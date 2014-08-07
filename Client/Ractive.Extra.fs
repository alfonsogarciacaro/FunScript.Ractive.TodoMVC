namespace FunScript.TypeScript

[<AutoOpen>]
[<ReflectedDefinition>]
module RactiveExtra =
    open FunScript.TypeScript

    type RactiveEventPlugins with
        static member makeCustomKeyEvent keyCode =
            let plugin =
                fun (node: HTMLElement) (fire: System.Func<RactiveEvent,obj>) ->
                    let keydownHandler =
                        EventListenerDelegate( 
                            fun (ev: Event) ->
                                if (ev :?> KeyboardEvent).which = (float keyCode) then
                                    let f = createEmpty<RactiveEvent>() in f.node <- node; f.original <- ev
                                    fire.Invoke(f) |> ignore )

                    node.addEventListener("keydown", keydownHandler, false)
                    let tear = createEmpty<RactiveTeardownDefinition>()
                    tear.teardown <- fun () -> node.removeEventListener("keydown", keydownHandler, false)
                    tear
            System.Func<_,_,_>(plugin)

    type RactiveStatic with
        member x.CreateWith<'T>(el: string, template: string, data: 'T, ?twoway: bool) =
            let twoway = defaultArg twoway true
            let options = createEmpty<RactiveNewOptions>()
            options.template <- template
            options.el <- el
            options.data <- data
            options.twoway <- twoway
            x.Create(options)

    type RactiveEventStream(ractive: Ractive, ev: string) =
        interface FunScript.Core.Events.IObservable<RactiveEvent> with
            member x.Subscribe observer =
                let remover = ractive.on(ev, System.Func<_,_>(observer.OnNext))
                let disposable = new FunScript.Core.Events.ActionDisposable(fun () -> remover.cancel())
                disposable :> System.IDisposable

    type Async with
        static member AwaitRactiveEvent(r: Ractive, ev: string) =
            Async.FromContinuations(fun (cont, econt, ccont) ->
                let observe = ref None
                observe := Some <| r.on(ev, fun ev -> (!observe).Value.cancel(); cont(ev))
            )

        static member AwaitRactiveEvent2(r: Ractive, ev1: string, ev2: string) =
            Async.FromContinuations(fun (cont, econt, ccont) ->
                let observe1: (RactiveObserve option) ref = ref None
                let observe2: (RactiveObserve option) ref = ref None
                observe1 := Some <| r.on(ev1, fun ev -> (!observe1).Value.cancel(); (!observe2).Value.cancel(); cont(Choice1Of2(ev)))
                observe2 := Some <| r.on(ev2, fun ev -> (!observe1).Value.cancel(); (!observe2).Value.cancel(); cont(Choice2Of2(ev)))
            )

        static member AwaitRactiveEvent3(r: Ractive, ev1: string, ev2: string, ev3: string) =
            Async.FromContinuations(fun (cont, econt, ccont) ->
                let observe1: (RactiveObserve option) ref = ref None
                let observe2: (RactiveObserve option) ref = ref None
                let observe3: (RactiveObserve option) ref = ref None
                observe1 := Some <| r.on(ev1, fun ev -> (!observe1).Value.cancel(); (!observe2).Value.cancel(); (!observe3).Value.cancel(); cont(Choice1Of3(ev)))
                observe2 := Some <| r.on(ev2, fun ev -> (!observe1).Value.cancel(); (!observe2).Value.cancel(); (!observe3).Value.cancel(); cont(Choice2Of3(ev)))
                observe3 := Some <| r.on(ev3, fun ev -> (!observe1).Value.cancel(); (!observe2).Value.cancel(); (!observe3).Value.cancel(); cont(Choice3Of3(ev)))
            )

        static member AwaitRactiveEvent4(r: Ractive, ev1: string, ev2: string, ev3: string, ev4: string) =
            Async.FromContinuations(fun (cont, econt, ccont) ->
                let observe1: (RactiveObserve option) ref = ref None
                let observe2: (RactiveObserve option) ref = ref None
                let observe3: (RactiveObserve option) ref = ref None
                let observe4: (RactiveObserve option) ref = ref None
                observe1 := Some <| r.on(ev1, fun ev -> (!observe1).Value.cancel(); (!observe2).Value.cancel(); (!observe3).Value.cancel(); (!observe4).Value.cancel(); cont(Choice1Of4(ev)))
                observe2 := Some <| r.on(ev2, fun ev -> (!observe1).Value.cancel(); (!observe2).Value.cancel(); (!observe3).Value.cancel(); (!observe4).Value.cancel(); cont(Choice2Of4(ev)))
                observe3 := Some <| r.on(ev3, fun ev -> (!observe1).Value.cancel(); (!observe2).Value.cancel(); (!observe3).Value.cancel(); (!observe4).Value.cancel(); cont(Choice3Of4(ev)))
                observe4 := Some <| r.on(ev4, fun ev -> (!observe1).Value.cancel(); (!observe2).Value.cancel(); (!observe3).Value.cancel(); (!observe4).Value.cancel(); cont(Choice4Of4(ev)))
            )
