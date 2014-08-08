[<ReflectedDefinition>]
module Program

open System
open FunScript
open FunScript.Extra
open FunScript.TypeScript
open System.Collections.Generic

// CONSTANTS AND TYPES
let STORAGE_KEY = "todos-ractive"

type Todo = { description: string; completed: bool }
type Filters = { all: Todo->bool; completed: Todo->bool; active: Todo->bool }
type RactiveData = { items: List<Todo>; currentFilter: string; filters: Filters }


// INIT PROCESS ----------------------------------------------------------
let init() =
    Globals.Ractive.events.["enter"] <- RactiveEventPlugins.makeCustomKeyEvent(13) // ENTER_KEY 
    Globals.Ractive.events.["escape"] <- RactiveEventPlugins.makeCustomKeyEvent(27) // ESCAPE_KEY

    let data = { items = let v = Storage.load(STORAGE_KEY) in match v with Some v' -> v' | None -> List()
                 currentFilter = "all"
                 filters = { all =       fun t-> true;
                             completed = fun t -> t.completed;
                             active =    fun t -> not t.completed; } }

    let ractive = Globals.Ractive.CreateWith("#todoapp", "#main", data, twoway=false)
    (ractive, data)

    
// TODO LIST MANAGER PROCESS ----------------------------------------------------
let todosProcess ractive todos =
    let rec editingLoop(ractive, todos: List<Todo>) = async {
        let! choice = Async.AwaitRactiveEvent2(ractive, "submit", "cancel");
        match choice with
        | Choice1Of2 ev ->
            let index = int ev.index.["i"]
            let oldTodo: Todo = unbox ev.context
            let input = ev.node :?> HTMLInputElement
            todos.[index] <- {oldTodo with description=input.value}
            //todos.spliceOverload2(index, 1., {oldTodo with description=input.value}) |> ignore
        | Choice2Of2 _ -> ()
    }

    let rec waitingLoop(ractive, todos: List<Todo>): Async<unit> = async {
        let! choice = Async.AwaitRactiveEvent4(ractive, "newTodo", "remove", "clearCompleted", "edit")
        match choice with
        | Choice1Of4 ev ->
            let input = ev.node :?> HTMLInputElement
            todos.Add({ description = input.value; completed = false }) //todos.pushOverload2({ description = input.value; completed = false }) |> ignore
            input.value <- ""

        | Choice2Of4 ev ->
            let index = int ev.index.["i"]
            todos.RemoveAt(index) //todos.spliceOverload2(index, 1.) |> ignore

        | Choice3Of4 ev ->
            for i in (todos.Count-1) .. -1 .. 0 do
                if todos.[i].completed then todos.RemoveAt(i)

        | Choice4Of4 ev ->
            let li = ev.node.parentElement.parentElement
            let input = li.querySelector("#edit") :?> HTMLInputElement
            li.classList.add("editing")
            input.value <- (unbox ev.context).description
            input.focus()
            do! editingLoop(ractive, todos)
            li.classList.remove("editing")

        Storage.save(STORAGE_KEY, todos)
        //r.update("todos") |> ignore   // Not necessary, Ractive intercepts array mutator methods (unless modifyArrays is false)
        return! waitingLoop(ractive, todos)
    }

    Async.StartImmediate <| waitingLoop(ractive, todos)


// TODO COMPLETED TOGGLE PROCESS ----------------------------------------------------------------
let toggleProcess ractive (todos: List<Todo>) =
    RactiveEventStream(ractive, "toggle")
    |> Observable.add (fun ev -> let index = int ev.index.["i"]
                                 let isDone = (ev.node :?> HTMLInputElement)._checked
                                 todos.[index] <- {todos.[index] with completed = isDone}
                                 Storage.save(STORAGE_KEY, todos))

    RactiveEventStream(ractive, "toggleAll")
    |> Observable.add (fun ev -> let isDone = (ev.node :?> HTMLInputElement)._checked
                                 for i = 0 to (todos.Count-1) do
                                    if todos.[i].completed <> isDone then
                                        todos.[i] <- {todos.[i] with completed = isDone}
                                 Storage.save(STORAGE_KEY, todos))


//    Observable.merge (RactiveEventStream (ractive, "toggle")) (RactiveEventStream (ractive, "toggleAll"))
//    |> Observable.add (fun ev -> let isDone = (ev.node :?> HTMLInputElement)._checked
//                                 let first, last =
//                                    let index = if (def ev.index) then (int ev.index.["i"]) else -1
//                                    if index > -1 then index, index else 0, (todos.Count-1)
//                                 for i = first to last do
//                                    todos.[i] <- {todos.[i] with completed = isDone}
//                                 Storage.save(STORAGE_KEY, todos))



// FILTER PROCESS ----------------------------------------------------------
let filterProcess (ractive: Ractive) =
    HTMLEventStream(fun cb -> Globals.window.onhashchange <- cb)
    |> Observable.subscribe(fun ev -> match Globals.window.location.hash.Substring(2) with
                                      | "active" -> ractive.set("currentFilter", "active") |> ignore
                                      | "completed" -> ractive.set("currentFilter", "completed") |> ignore
                                      | _ -> Globals.window.location.hash <- ""
                                             ractive.set("currentFilter", "all") |> ignore)
    |> ignore


let main() =
    let ractive, data = init()
    todosProcess ractive data.items
    toggleProcess ractive data.items
    filterProcess ractive
