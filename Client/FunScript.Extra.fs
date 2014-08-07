namespace FunScript.TypeScript

[<AutoOpen>]
module TypeExtensions =

    [<FunScript.JSEmitInline("({0} !== undefined)")>]
    let def (property: obj): bool = failwith "never"

    /// Useful to expose values to Javascript
    type FunScript.TypeScript.Window with
        [<FunScript.JSEmitInline("({0}[{1}])")>]
        member __.Item with get(i : string) : obj = failwith "never" and set (i : string) (v : obj) : unit = failwith "never"

    /// Number formatting without casting
    type System.Double with 
        [<FunScript.JSEmitInline("({0}.toFixed({?1}))")>]
        member __.toFixed(?fractionDigits : float) : string = failwith "never"
        [<FunScript.JSEmitInline("({0}.toExponential({?1}))")>]
        member __.toExponential(?fractionDigits : float) : string = failwith "never"
        [<FunScript.JSEmitInline("({0}.toPrecision({1}))")>]
        member __.toPrecision(precision : float) : string = failwith "never"



namespace FunScript.Extra

open FunScript
open FunScript.TypeScript
open System
open System.Collections.Generic

[<ReflectedDefinition>]
module Storage =
    let load (key) = let attempt = Globals.localStorage.getItem(key) :?> string
                     if attempt = null then None else Some (unbox <| Globals.JSON.parse(attempt))

    let save (key, data) = Globals.localStorage.setItem(key, Globals.JSON.stringify(data))

[<AutoOpen>]
[<ReflectedDefinition>]
module TypeExtensions =

    type HTMLEventStream<'T when 'T:>Event>(attach: Func<'T,obj>->unit) =
        interface FunScript.Core.Events.IObservable<'T> with
            member x.Subscribe observer =
                attach <| Func<_,_>(fun ev -> box (observer.OnNext(ev)))
                new FunScript.Core.Events.ActionDisposable(fun () -> attach null) :> IDisposable

    type Async with
        static member AwaitHTMLEvent(attach: Func<#Event,obj>->unit) =
            Async.FromContinuations(fun (cont, econt, ccont) ->
                attach <| Func<_,_>(fun ev -> (attach null); box (cont(ev)))
            )

        static member AwaitHTMLEvent2(attach1: Func<#Event,obj>->unit, attach2: Func<#Event,obj>->unit) =
            Async.FromContinuations(fun (cont, econt, ccont) ->
                attach1 <| Func<_,_>(fun ev -> (attach1 null); (attach2 null); box (cont(ev)))
                attach2 <| Func<_,_>(fun ev -> (attach1 null); (attach2 null); box (cont(ev)))
            )

        static member AwaitHTMLEvent3(attach1: Func<#Event,obj>->unit, attach2: Func<#Event,obj>->unit, attach3: Func<#Event,obj>->unit) =
            Async.FromContinuations(fun (cont, econt, ccont) ->
                attach1 <| Func<_,_>(fun ev -> (attach1 null); (attach2 null); (attach3 null); box (cont(ev)))
                attach2 <| Func<_,_>(fun ev -> (attach1 null); (attach2 null); (attach3 null); box (cont(ev)))
                attach3 <| Func<_,_>(fun ev -> (attach1 null); (attach2 null); (attach3 null); box (cont(ev)))
            )

        static member AwaitHTMLEvent4(attach1: Func<#Event,obj>->unit, attach2: Func<#Event,obj>->unit, attach3: Func<#Event,obj>->unit, attach4: Func<#Event,obj>->unit) =
            Async.FromContinuations(fun (cont, econt, ccont) ->
                attach1 <| Func<_,_>(fun ev -> (attach1 null); (attach2 null); (attach3 null); (attach4 null); box (cont(ev)))
                attach2 <| Func<_,_>(fun ev -> (attach1 null); (attach2 null); (attach3 null); (attach4 null); box (cont(ev)))
                attach3 <| Func<_,_>(fun ev -> (attach1 null); (attach2 null); (attach3 null); (attach4 null); box (cont(ev)))
                attach4 <| Func<_,_>(fun ev -> (attach1 null); (attach2 null); (attach3 null); (attach4 null); box (cont(ev)))
            )


[<ReflectedDefinition>]
module Observable =
    open FunScript.Core.Events

    let inline protect f succeed fail =
        match (try Choice1Of2 (f ()) with e -> Choice2Of2 e) with
        | Choice1Of2 x -> (succeed x)
        | Choice2Of2 e -> (fail e)

    type NewObservable1<'T,'U>(f: 'T->'U option, w: IObservable<'T>) =
        interface IObservable<'U> with
            member x.Subscribe(observer) =
                let newObserver =
                    ActionObserver<_>(
                        onNext =        (fun v -> protect (fun () -> f v) (function None -> () | Some v2 -> observer.OnNext v2) observer.OnError),
                        onError =       (fun e -> observer.OnError(e)),
                        onCompleted =   (fun () -> observer.OnCompleted())
                    )
                w.Subscribe(newObserver)

    type NewObservable2<'T,'U>(f: 'T->'U, w: IObservable<'T>) =
        interface IObservable<'U> with
            member x.Subscribe(observer) =
                let newObserver =
                    ActionObserver<_>(
                        onNext =        (fun v -> protect (fun () -> f v) observer.OnNext observer.OnError),
                        onError =       (fun e -> observer.OnError(e)),
                        onCompleted =   (fun () -> observer.OnCompleted())
                    )
                w.Subscribe(newObserver)

    type NewObservable3<'T>(w1: IObservable<'T>, w2: IObservable<'T>) =
        interface IObservable<'T> with
            member x.Subscribe(observer) =
                let stopped = ref false
                let completed1 = ref false
                let completed2 = ref false

                let observer1 =
                    ActionObserver<_>(
                        onNext =        (fun v -> if not !stopped then observer.OnNext v),
                        onError =       (fun e -> if not !stopped then stopped:=true; observer.OnError(e)),
                        onCompleted =   (fun () -> if not !stopped then completed1:=true; if !completed1 && !completed2 then stopped:=true; observer.OnCompleted())
                    )

                let observer2 =
                    ActionObserver<_>(
                        onNext =        (fun v -> if not !stopped then observer.OnNext v),
                        onError =       (fun e -> if not !stopped then stopped:=true; observer.OnError(e)),
                        onCompleted =   (fun () -> if not !stopped then completed2:=true; if !completed1 && !completed2 then stopped:=true; observer.OnCompleted())
                    )

                let h1 = w1.Subscribe(observer1)
                let h2 = w2.Subscribe(observer2)
                new ActionDisposable(fun () -> h1.Dispose(); h2.Dispose()) :> System.IDisposable

    type NewObservable4<'T>(w: IObservable<'T>) =
        interface IObservable<'T*'T> with
            member x.Subscribe(observer) =
                let lastArgs = ref None
                let newObserver =
                    ActionObserver<_>(
                        onNext =        (fun args2 -> match !lastArgs with None->()|Some args1->observer.OnNext(args1,args2); lastArgs:=Some args2),
                        onError =       (fun e -> observer.OnError(e)),
                        onCompleted =   (fun () -> observer.OnCompleted())
                    )
                w.Subscribe(newObserver)

    type NewObservable5<'T,'U>(f: 'U->'T->'U, z: 'U, w: IObservable<'T>) =
        interface IObservable<'U> with
            member x.Subscribe(observer) =
                let state = ref z
                let newObserver =
                    ActionObserver<_>(
                        onNext =        (fun v -> let z = !state in protect (fun () -> f z v) (fun z -> state := z; observer.OnNext z) observer.OnError),
                        onError =       (fun e -> observer.OnError(e)),
                        onCompleted =   (fun () -> observer.OnCompleted())
                    )
                w.Subscribe(newObserver)

    let add f (w: IObservable<'T>) =
        w.Subscribe(ActionObserver(f, (fun e->()), (fun ()->()))) |> ignore
    
    let choose f (w: IObservable<'T>) =
        NewObservable1(f, w) :> IObservable<_>
    
    let filter f (w: IObservable<'T>) =
        choose (fun x -> if f x then Some x else None) w

    let map f (w: IObservable<'T>) =
        NewObservable2(f, w) :> IObservable<_>

    let merge (w1: IObservable<'T>) (w2: IObservable<'T>) =
        NewObservable3(w1, w2) :> IObservable<_>

    let pairwise (w : IObservable<'T>) : IObservable<'T * 'T> =
        NewObservable4(w) :> IObservable<_>

    let partition f (w: IObservable<'T>) =
        filter f w, filter (f >> not) w

    let scan f z (w: IObservable<'T>) =
        NewObservable5(f, z, w) :> IObservable<_>

    let split (f : 'T -> Choice<'U1,'U2>) (w: IObservable<'T>) =
        choose (fun v -> match f v with Choice1Of2 x -> Some x | _ -> None) w,
        choose (fun v -> match f v with Choice2Of2 x -> Some x | _ -> None) w

    let subscribe (f: 'T -> unit) (w: IObservable<'T>) =
        w.Subscribe(ActionObserver(f, (fun e->()), (fun ()->())))
        

[<ReflectedDefinition>]
module String =

    [<JSEmitInline("{0}.lastIndexOf({1})")>]
    let LastIndexOf(s: string) (search: string) : int = failwith "never"

    [<JSEmitInline("{0}.trim()")>]
    let Trim(s: string): string = failwith "never"

    let getComponents() = [
        ExpressionReplacer.create <@ fun (s:string) (search: string) -> s.LastIndexOf(search) @> <@ LastIndexOf @>
        ExpressionReplacer.create <@ fun (s:string) -> s.Trim() @> <@ Trim @>
    ]


[<ReflectedDefinition>]
module List =

    [<JSEmitInline("{0}.length")>]
    let Count(list: List<'T>) : int = failwith "never"

    [<JSEmitInline("{0}[{1}]")>]
    let Get(list: List<'T>) (index: int): 'T = failwith "never"

    [<JSEmitInline("({0}[{1}] = {2})")>]
    let Set(list: List<'T>) (index: int) (value: 'T): unit = failwith "never"

    [<JSEmitInline("({0} = [])")>]
    let Clear(list: List<'T>): unit = failwith "never"

    [<JSEmitInline("{0}.push({1})")>]
    let Add(list: List<'T>) (item: 'T): unit = failwith "never"

    [<JSEmitInline("({0}.indexOf({1}) > -1)")>]
    let Contains(list: List<'T>) (searchElement: 'T): bool = failwith "never"    

    [<JSEmitInline("{0}.indexOf({1})")>]
    let IndexOf(list: List<'T>) (searchElement: 'T): int = failwith "never"

    [<JSEmit("var i = {0}.indexOf({1}); if (i > -1) { {0}.splice(i, 1); return true; } else { return false; }")>]
    let Remove(list: List<'T>) (item: 'T): bool = failwith "never"

    [<JSEmitInline("{0}.splice({1}, 1)")>]
    let RemoveAt(list: List<'T>) (index: int): unit = failwith "never"

    [<JSEmitInline("{0}.splice({1}, 0, {2})")>]
    let Insert(list: List<'T>) (index: int) (item: 'T): unit = failwith "never"

    [<JSEmitInline("{0}.splice({1}, 1, {2})")>]
    let Replace(list: List<'T>) (index: int) (item: 'T): unit = failwith "never"

    [<JSEmitInline("{0}.reverse()")>]
    let Reverse(list: List<'T>): unit = failwith "never"

    [<JSEmitInline("(new Array())")>]
    let Create(): List<'T> = failwith "never"
    
    let getComponents() = [
        ExpressionReplacer.create <@ fun () -> List() @> <@ Create @>
        ExpressionReplacer.create <@ fun (list: List<_>) -> list.Count @> <@ Count @>
        ExpressionReplacer.create <@ fun (list: List<_>) (index: int) -> list.Item(index) @> <@ Get @>
        ExpressionReplacer.create <@ fun (list: List<_>) (index: int) (v: _) -> list.Item(index) <- v @> <@ Set @>
        ExpressionReplacer.create <@ fun (list: List<_>) -> list.Clear() @> <@ Clear @>
        ExpressionReplacer.create <@ fun (list: List<_>) (item: _) -> list.Add(item) @> <@ Add @>
        ExpressionReplacer.create <@ fun (list: List<_>) (item: _) -> list.Contains(item) @> <@ Contains @>
        ExpressionReplacer.create <@ fun (list: List<_>) (item: _) -> list.IndexOf(item) @> <@ IndexOf @>
        ExpressionReplacer.create <@ fun (list: List<_>) (item: _) -> list.Remove(item) @> <@ Remove @>
        ExpressionReplacer.create <@ fun (list: List<_>) (index: int)-> list.RemoveAt(index) @> <@ RemoveAt @>
        ExpressionReplacer.create <@ fun (list: List<_>) (index: int) (item: _)-> list.Insert(index, item) @> <@ Insert @>
        ExpressionReplacer.create <@ fun (list: List<_>) (index: int) (item: _)-> list.[index] <- item @> <@ Replace @> // Many MVC libraries override the splice method
        ExpressionReplacer.create <@ fun (list: List<_>) -> list.Reverse() @> <@ Reverse @>
    ]


[<ReflectedDefinition>]
module Dictionary =

    [<JSEmitInline("Object.keys({0})")>]
    let Keys(dic: Dictionary<'K,'V>) : Dictionary.KeyCollection<'K,'V> = failwith "never"

    [<JSEmitInline("{0}[{1}]")>]
    let Get(dic: Dictionary<'K,'V>) (key: 'K): 'V = failwith "never"

    [<JSEmitInline("({0}[{1}] = {2})")>]
    let Set(dic: Dictionary<'K,'V>) (key: 'K) (value: 'V): unit = failwith "never"

    [<JSEmitInline("({0}[{1}] = {2})")>]
    let Add(dic: Dictionary<'K,'V>) (key: 'K, value: 'V): unit = failwith "never"

    [<JSEmitInline("({0} = {})")>]
    let Clear(dic: Dictionary<'K,'V>): unit = failwith "never"

    [<JSEmitInline("({0}[{1}] !== undefined)")>]
    let ContainsKey(dic: Dictionary<'K,'V>) (key: 'K): bool = failwith "never"    

    [<JSEmit("if ({0}[{1}] !== undefined) { delete {0}[{1}]; return true; } else { return false; }")>]
    let Remove(dic: Dictionary<'K,'V>) (key: 'K): bool = failwith "never"

    [<JSEmitInline("({})")>]
    let CreateEmpty() = failwith "never"

    let Create([<System.ParamArray>] pairs: array<'K*'V>) =
        let dic = createEmpty()
        for key, value in pairs do Set dic key value
        dic

    let getComponents() = [
        ExpressionReplacer.create <@ fun () -> Dictionary() @> <@ CreateEmpty() @> // TODO: Why do I get an error when giving a type annotation for CreateEmpty?
        ExpressionReplacer.create <@ fun (dic: Dictionary<_,_>) -> dic.Keys @> <@ Keys @>
        ExpressionReplacer.create <@ fun (dic: Dictionary<_,_>) (k: _) -> dic.Item(k) @> <@ Get @>
        ExpressionReplacer.create <@ fun (dic: Dictionary<_,_>) (k: _) (v: _) -> dic.Item(k) <- v @> <@ Set @>
        ExpressionReplacer.create <@ fun (dic: Dictionary<_,_>) -> dic.Clear() @> <@ Clear @>
        ExpressionReplacer.create <@ fun (dic: Dictionary<_,_>) (key: _, value: _) -> dic.Add(key, value) @> <@ Add @>
        ExpressionReplacer.create <@ fun (dic: Dictionary<_,_>) (key: _) -> dic.ContainsKey(key) @> <@ ContainsKey @>
        ExpressionReplacer.create <@ fun (dic: Dictionary<_,_>) (key: _) -> dic.Remove(key) @> <@ Remove @>
    ]


module Components =

    let get() = String.getComponents() @ List.getComponents() @ Dictionary.getComponents()