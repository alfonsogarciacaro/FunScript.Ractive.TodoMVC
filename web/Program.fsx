#r "..\lib\Funscript.dll"
#r "..\lib\Funscript.Interop.dll"
#r "..\lib\Funscript.TypeScript.Binding.lib.dll"
#r "..\lib\Funscript.HTML.dll"
#r "..\lib\Funscript.HTML.Ractive.dll"

[<ReflectedDefinition>]
module Program =
    open System.Collections.Generic
    open FunScript.TypeScript
    open FunScript.HTML

    // Utility function to make adding values to a dictionary more F#esque
    let add (key: _) (value: obj) (dic: Dictionary<_,_>) =
        dic.Add(key, unbox value); dic

    module Storage =
        let private key = "todos-ractive"
        let load() =
            let attempt = Globals.localStorage.getItem(key) :?> string
            if attempt = null then None else Some (unbox <| Globals.JSON.parse(attempt))
        let save(data) =
            Globals.localStorage.setItem(key, Globals.JSON.stringify(data))

    type Todo = {
        description: string;
        completed: bool
    }

    // INIT PROCESS ----------------------------------------------------------
    let init() =
        // Make the custom key events, the function is based on Rich Harris' code and is defined in FunScript.HTML.Ractive.Extensions
        Globals.Ractive.events.Add("enter", Globals.Ractive.makeCustomKeyEvent(int Keys.enter))
        Globals.Ractive.events.Add("escape", Globals.Ractive.makeCustomKeyEvent(int Keys.escape))

        // Normally we need to wrap the functions to be used as JS callbacks, but it works anyway if they don't have more than one argument
        let filters =
            Dictionary<string, Todo->bool>()
            |> add "all" (fun t -> true)
            |> add "completed" (fun t -> t.completed)
            |> add "active" (fun t -> not t.completed)
        let data =
            Dictionary<string, obj>()
            |> add "items" (match Storage.load() with Some v -> v | None -> ResizeArray())
            |> add "currentFilter" "all"
            |> add "filters" filters
        let options = createEmpty<RactiveNewOptions>()
        options.el <- "#todoapp"
        options.template <- "#main"
        options.data <- data
        options.twoway <- false // Here the F# code is responsible of updating the data, so we disable two way data binding
        let ractive = Globals.Ractive.Create(options)
        (ractive, data)

    
    // TODO LIST MANAGER PROCESS ----------------------------------------------------
    let todosProcess ractive todos =
        // Here we use a couple of async workflows to simulate a simple state machine:
        // when we detect an edit event, we stop listening the others until
        // the editing is either completed or cancelled
        let editingLoop(r: Ractive, todos: List<Todo>) = async {
            let ev1, ev2 = r.onStream("submit", "cancel")
            let! choice = Async.AwaitObservable(ev1, ev2)
            match choice with
            | Choice1Of2 (ev, arg) ->
                // We use 'unbox' to trick the F# compiler, but it won't have any effect in Javascript
                let index: int = unbox ev.index.["i"]
                let oldTodo: Todo = unbox ev.context
                let input: HTMLInputElement = unbox ev.node
                if input.value.Length > 1 then
                    todos.[index] <- {oldTodo with description=input.value}
                else
                    todos.RemoveAt(index)
            | Choice2Of2 _ -> () // Cancel event: do nothing
            // As we don't call editingLoop recursively, we'll leave the loop immediately after handling the event
        }

        let rec waitingLoop(r: Ractive, todos: List<Todo>): Async<unit> = async {
            let ev1, ev2, ev3, ev4 = r.onStream("newTodo", "remove", "clearCompleted", "edit")
            let! choice = Async.AwaitObservable(ev1, ev2, ev3, ev4)
            match choice with
            | Choice1Of4 (ev, arg) ->
                let input: HTMLInputElement = unbox ev.node
                todos.Add({ description = input.value; completed = false })
                input.value <- ""
            | Choice2Of4 (ev, arg) ->
                // "i" is the name given to the list index in the HTML
                let index: int = unbox ev.index.["i"]
                todos.RemoveAt(index)
            | Choice3Of4 _ ->
                for i in (todos.Count-1) .. -1 .. 0 do
                    if todos.[i].completed then todos.RemoveAt(i)
            | Choice4Of4 (ev, arg) ->
                let li = ev.node.parentElement.parentElement
                let input: HTMLInputElement = unbox <| li.querySelector("#edit")
                li.classList.add("editing")
                input.value <- (unbox ev.context).description
                input.focus()
                do! editingLoop(r, todos) // Enter the editing loop
                li.classList.remove("editing")
            Storage.save(todos)
            //r.update("todos")           // Not necessary, Ractive intercepts array mutator methods (unless modifyArrays is false)
            return! waitingLoop(r, todos) // Repeat the loop indefinitely
        }
        Async.StartImmediate <| waitingLoop(ractive, todos)


    // TODO COMPLETED TOGGLE PROCESS ----------------------------------------------------------------
    let toggleProcess (ractive: Ractive) (todos: List<Todo>) =
        ractive.onStream("toggle")
        |> Observable.add (fun (ev, arg) ->
            let index: int = unbox ev.index.["i"]
            let isDone = (unbox<HTMLInputElement> ev.node)._checked
            todos.[index] <- {todos.[index] with completed = isDone}
            Storage.save(todos))
        ractive.onStream("toggleAll")
        |> Observable.add (fun (ev, arg) ->
            let isDone = (unbox<HTMLInputElement> ev.node)._checked
            for i = 0 to (todos.Count-1) do
            if todos.[i].completed <> isDone then
                todos.[i] <- {todos.[i] with completed = isDone}
            Storage.save(todos))

// We could also merge the events as shown in the commented code below
// All the other functions in the Observable module (filter, map, scan...) work too

//        Observable.merge (ractive.onStream("toggle")) (ractive.onStream("toggleAll"))
//        |> Observable.add (fun (ev, arg) ->
//            let isDone = (unbox<HTMLInputElement> ev.node)._checked
//            let first, last =
//                let index = if (ev.index <> Unchecked.defaultof<_>) then (unbox<int> ev.index.["i"]) else -1
//                if index > -1 then index, index else 0, (todos.Count-1)
//            for i = first to last do
//                todos.[i] <- {todos.[i] with completed = isDone}
//            Storage.save(todos))


    // FILTER PROCESS (pseudo-routing) -------------------------------------------------------
    let filterProcess (ractive: Ractive) =
        // Here we still use FRP but with a standard DOM event
        Globals.window.onhashchangeStream
        |> Observable.add(fun ev ->
            match Globals.window.location.hash.Substring(2) with
            | "active" ->
                ractive.set("currentFilter", "active")
            | "completed" ->
                ractive.set("currentFilter", "completed")
            | _ ->
                Globals.window.location.hash <- ""
                ractive.set("currentFilter", "all"))

    let main() =
        let ractive, data = init()
        todosProcess ractive (unbox data.["items"])
        toggleProcess ractive (unbox data.["items"])
        filterProcess ractive

    // The code below will call FunScript and compile the project to Javascript
    open System.IO
    let code = FunScript.Compiler.compileWithoutReturn(<@ main() @>)
    let path = Path.Combine(__SOURCE_DIRECTORY__, @"app.js")
    File.WriteAllText(path, code)
