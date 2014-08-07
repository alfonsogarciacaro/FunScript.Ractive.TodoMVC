var UnfoldEnumerator_2_Int32__Int32___ctor$Int32_Int32, TupleRactive__RactiveData_, TupleRactive__List_1_Todo_, TupleInt32_Int32, TupleFSharpFunc_2_FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent__Unit__FSharpFunc_2_Exception__Unit__FSharpFunc_2_String__Unit_, TupleFSharpFunc_2_FSharpChoice_2_RactiveEvent__RactiveEvent__Unit__FSharpFunc_2_Exception__Unit__FSharpFunc_2_String__Unit_, Todo___ctor$, Storage__save$List_1_Todo_List_1_Todo_, Storage__load$List_1_Todo_List_1_Todo_, Seq__Unfold$Int32__Int32_Int32_Int32, Seq__ToArray$Int32_Int32, Seq__OfArray$Int32_Int32, Seq__IterateIndexed$Int32_Int32, Seq__FromFactory$Int32_Int32, Seq__FoldIndexedAux$Unit__Int32_Unit__Int32, Seq__FoldIndexed$Int32__Unit_Int32_Unit_, Seq__Enumerator$Int32_Int32, Range__oneStep$Int32_Int32, Range__customStep$Int32__Int32_Int32_Int32, RactiveExtra__RactiveStatic_CreateWith$RactiveData_RactiveData_, RactiveExtra__RactiveEventPlugins_makeCustomKeyEvent_Static$HTMLElement_HTMLElement_, RactiveExtra__Async_AwaitRactiveEvent4_Static$, RactiveExtra__Async_AwaitRactiveEvent2_Static$, RactiveEventStream___ctor$, RactiveData___ctor$, Program__toggleProcess$, Program__todosProcess$, Program__main$, Program__init$, Program__get_STORAGE_KEY$, Program__filterProcess$, Program__STORAGE_KEY, Option__IsSome$Int32_Int32, Option__GetValue$Tuple_2_Int32__Int32_Tuple_2_Int32__Int32_, Option__GetValue$RactiveObserve_RactiveObserve_, Option__GetValue$List_1_Todo_List_1_Todo_, Option__GetValue$Int32_Int32, Option__GetValue$FSharpRef_1_Boolean_FSharpRef_1_Boolean_, Option__GetValue$CancellationToken_CancellationToken_, Option__GetValue$Boolean_Boolean, Observable__subscribe$RactiveEvent_RactiveEvent_, Observable__subscribe$Event_Event_, LanguagePrimitives__UnboxGeneric$String_String, LanguagePrimitives__UnboxGeneric$KeyboardEvent_KeyboardEvent_, LanguagePrimitives__UnboxGeneric$HTMLInputElement_HTMLInputElement_, HTMLEventStream_1_Event___ctor$Event_, GenericConstants__One$Int32_Int32, Filters___ctor$, FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent__Choice4Of4RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent_, FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent__Choice3Of4RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent_, FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent__Choice2Of4RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent_, FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent__Choice1Of4RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent_, FSharpChoice_2_RactiveEvent__RactiveEvent__Choice2Of2RactiveEvent__RactiveEvent_, FSharpChoice_2_RactiveEvent__RactiveEvent__Choice1Of2RactiveEvent__RactiveEvent_, CreateEnumerable_1_Int32___ctor$Int32, CancellationToken___ctor$, CancellationToken__ThrowIfCancellationRequested$, Async__StartImmediate$, Async__FromContinuations$FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent_FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent_, Async__FromContinuations$FSharpChoice_2_RactiveEvent__RactiveEvent_FSharpChoice_2_RactiveEvent__RactiveEvent_, Async_1_protectedCont$Unit_Unit_, Async_1_protectedCont$FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent_FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent_, Async_1_protectedCont$FSharpChoice_2_RactiveEvent__RactiveEvent_FSharpChoice_2_RactiveEvent__RactiveEvent_, Async_1_invokeCont$Unit_Unit_, Async_1_get_async$, Async_1_Unit__ContUnit_, Async_1_FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent__ContFSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent_, Async_1_FSharpChoice_2_RactiveEvent__RactiveEvent__ContFSharpChoice_2_RactiveEvent__RactiveEvent_, AsyncParams_1_Unit___ctor$Unit_, AsyncParams_1_FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent___ctor$FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent_, AsyncParams_1_FSharpChoice_2_RactiveEvent__RactiveEvent___ctor$FSharpChoice_2_RactiveEvent__RactiveEvent_, AsyncParamsAux___ctor$, AsyncBuilder___ctor$, AsyncBuilder__Zero$, AsyncBuilder__While$, AsyncBuilder__ReturnFrom$Unit_Unit_, AsyncBuilder__Return$Unit_Unit_, AsyncBuilder__For$Int32_Int32, AsyncBuilder__Delay$Unit_Unit_, AsyncBuilder__Combine$Unit_Unit_, AsyncBuilder__Bind$Unit__Unit_Unit__Unit_, AsyncBuilder__Bind$FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent__Unit_FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent__Unit_, AsyncBuilder__Bind$FSharpChoice_2_RactiveEvent__RactiveEvent__Unit_FSharpChoice_2_RactiveEvent__RactiveEvent__Unit_, Array__ZeroCreate$Int32_Int32, Array__BoxedLength$, ActionObserver_1_RactiveEvent___ctor$RactiveEvent_, ActionObserver_1_Event___ctor$Event_, ActionDisposable___ctor$;
  ActionDisposable___ctor$ = (function (f)
  {
    this.f = f;
  });
  ActionObserver_1_Event___ctor$Event_ = (function (onNext, onError, onCompleted)
  {
    this.onNext = onNext;
    this.onError = onError;
    this.onCompleted = onCompleted;
  });
  ActionObserver_1_RactiveEvent___ctor$RactiveEvent_ = (function (onNext, onError, onCompleted)
  {
    this.onNext = onNext;
    this.onError = onError;
    this.onCompleted = onCompleted;
  });
  Array__BoxedLength$ = (function (xs)
  {
    return xs.length;;
  });
  Array__ZeroCreate$Int32_Int32 = (function (size)
  {
    return new Array(size);;
  });
  AsyncBuilder__Bind$FSharpChoice_2_RactiveEvent__RactiveEvent__Unit_FSharpChoice_2_RactiveEvent__RactiveEvent__Unit_ = (function (x, _arg1, f)
  {
    var v = _arg1.Item;
    return (function (_f)
    {
      return Async_1_protectedCont$Unit_Unit_(_f);
    })((function (k)
    {
      var cont = (function (a)
      {
        var patternInput = f(a);
        var r = patternInput.Item;
        return r(k);
      });
      return v((new AsyncParams_1_FSharpChoice_2_RactiveEvent__RactiveEvent___ctor$FSharpChoice_2_RactiveEvent__RactiveEvent_(cont, k.Aux)));
    }));
  });
  AsyncBuilder__Bind$FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent__Unit_FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent__Unit_ = (function (x, _arg1, f)
  {
    var v = _arg1.Item;
    return (function (_f)
    {
      return Async_1_protectedCont$Unit_Unit_(_f);
    })((function (k)
    {
      var cont = (function (a)
      {
        var patternInput = f(a);
        var r = patternInput.Item;
        return r(k);
      });
      return v((new AsyncParams_1_FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent___ctor$FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent_(cont, k.Aux)));
    }));
  });
  AsyncBuilder__Bind$Unit__Unit_Unit__Unit_ = (function (x, _arg1, f)
  {
    var v = _arg1.Item;
    return (function (_f)
    {
      return Async_1_protectedCont$Unit_Unit_(_f);
    })((function (k)
    {
      var cont = (function (a)
      {
        var patternInput = f(a);
        var r = patternInput.Item;
        return r(k);
      });
      return v((new AsyncParams_1_Unit___ctor$Unit_(cont, k.Aux)));
    }));
  });
  AsyncBuilder__Combine$Unit_Unit_ = (function (x, work1, work2)
  {
    return AsyncBuilder__Bind$Unit__Unit_Unit__Unit_(x, work1, (function (unitVar0)
    {
      return work2;
    }));
  });
  AsyncBuilder__Delay$Unit_Unit_ = (function (x, f)
  {
    return (function (_f)
    {
      return Async_1_protectedCont$Unit_Unit_(_f);
    })((function (k)
    {
      var _966;
      var _968;
      _966 = f(_968);
      var patternInput = _966;
      var r = patternInput.Item;
      return r(k);
    }));
  });
  AsyncBuilder__For$Int32_Int32 = (function (x, seq, body)
  {
    var enumerator = seq.GetEnumerator();
    return AsyncBuilder__While$(x, (function (unitVar0)
    {
      return enumerator.MoveNext();
    }), AsyncBuilder__Delay$Unit_Unit_(x, (function (unitVar0)
    {
      return body(enumerator.get_Current());
    })));
  });
  AsyncBuilder__Return$Unit_Unit_ = (function (x, v)
  {
    return (function (f)
    {
      return Async_1_protectedCont$Unit_Unit_(f);
    })((function (k)
    {
      return Async_1_invokeCont$Unit_Unit_(k, v);
    }));
  });
  AsyncBuilder__ReturnFrom$Unit_Unit_ = (function (x, w)
  {
    return w;
  });
  AsyncBuilder__While$ = (function (x, cond, body)
  {
    var _974;
    var _976;
    _974 = cond(_976);
    if (_974) 
    {
      return AsyncBuilder__Bind$Unit__Unit_Unit__Unit_(x, body, (function (unitVar0)
      {
        return AsyncBuilder__While$(x, cond, body);
      }));
    }
    else
    {
      var _1005;
      return AsyncBuilder__Return$Unit_Unit_(x, _1005);
    };
  });
  AsyncBuilder__Zero$ = (function (x, unitVar1)
  {
    return (function (f)
    {
      return Async_1_protectedCont$Unit_Unit_(f);
    })((function (k)
    {
      var _741;
      return Async_1_invokeCont$Unit_Unit_(k, _741);
    }));
  });
  AsyncBuilder___ctor$ = (function (unitVar0)
  {
    ;
  });
  AsyncParamsAux___ctor$ = (function (StackCounter, ExceptionCont, CancelledCont, CancellationToken)
  {
    this.StackCounter = StackCounter;
    this.ExceptionCont = ExceptionCont;
    this.CancelledCont = CancelledCont;
    this.CancellationToken = CancellationToken;
  });
  AsyncParamsAux___ctor$.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = this.StackCounter.CompareTo(that.StackCounter);
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = this.ExceptionCont.CompareTo(that.ExceptionCont);
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        var ___diff = 0.000000;
        ___diff = this.CancelledCont.CompareTo(that.CancelledCont);
        diff = ___diff;
        if ((diff != 0.000000)) 
        {
          return diff;
        }
        else
        {
          var ____diff = 0.000000;
          ____diff = this.CancellationToken.CompareTo(that.CancellationToken);
          diff = ____diff;
          if ((diff != 0.000000)) 
          {
            return diff;
          }
          else
          {
            return 0.000000;
          };
        };
      };
    };
  });
  AsyncParams_1_FSharpChoice_2_RactiveEvent__RactiveEvent___ctor$FSharpChoice_2_RactiveEvent__RactiveEvent_ = (function (Cont, Aux)
  {
    this.Cont = Cont;
    this.Aux = Aux;
  });
  AsyncParams_1_FSharpChoice_2_RactiveEvent__RactiveEvent___ctor$FSharpChoice_2_RactiveEvent__RactiveEvent_.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = this.Cont.CompareTo(that.Cont);
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = this.Aux.CompareTo(that.Aux);
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        return 0.000000;
      };
    };
  });
  AsyncParams_1_FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent___ctor$FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent_ = (function (Cont, Aux)
  {
    this.Cont = Cont;
    this.Aux = Aux;
  });
  AsyncParams_1_FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent___ctor$FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent_.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = this.Cont.CompareTo(that.Cont);
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = this.Aux.CompareTo(that.Aux);
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        return 0.000000;
      };
    };
  });
  AsyncParams_1_Unit___ctor$Unit_ = (function (Cont, Aux)
  {
    this.Cont = Cont;
    this.Aux = Aux;
  });
  AsyncParams_1_Unit___ctor$Unit_.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = this.Cont.CompareTo(that.Cont);
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = this.Aux.CompareTo(that.Aux);
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        return 0.000000;
      };
    };
  });
  Async_1_FSharpChoice_2_RactiveEvent__RactiveEvent__ContFSharpChoice_2_RactiveEvent__RactiveEvent_ = (function (Item)
  {
    this.Tag = 0.000000;
    this._CaseName = "Cont";
    this.Item = Item;
  });
  Async_1_FSharpChoice_2_RactiveEvent__RactiveEvent__ContFSharpChoice_2_RactiveEvent__RactiveEvent_.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = ((this.Tag < that.Tag) ? -1.000000 : ((this.Tag == that.Tag) ? 0.000000 : 1.000000));
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = this.Item.CompareTo(that.Item);
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        return 0.000000;
      };
    };
  });
  Async_1_FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent__ContFSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent_ = (function (Item)
  {
    this.Tag = 0.000000;
    this._CaseName = "Cont";
    this.Item = Item;
  });
  Async_1_FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent__ContFSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent_.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = ((this.Tag < that.Tag) ? -1.000000 : ((this.Tag == that.Tag) ? 0.000000 : 1.000000));
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = this.Item.CompareTo(that.Item);
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        return 0.000000;
      };
    };
  });
  Async_1_Unit__ContUnit_ = (function (Item)
  {
    this.Tag = 0.000000;
    this._CaseName = "Cont";
    this.Item = Item;
  });
  Async_1_Unit__ContUnit_.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = ((this.Tag < that.Tag) ? -1.000000 : ((this.Tag == that.Tag) ? 0.000000 : 1.000000));
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = this.Item.CompareTo(that.Item);
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        return 0.000000;
      };
    };
  });
  Async_1_get_async$ = (function ()
  {
    return (new AsyncBuilder___ctor$());
  });
  Async_1_invokeCont$Unit_Unit_ = (function (k, value)
  {
    return k.Cont(value);
  });
  Async_1_protectedCont$FSharpChoice_2_RactiveEvent__RactiveEvent_FSharpChoice_2_RactiveEvent__RactiveEvent_ = (function (f)
  {
    return (new Async_1_FSharpChoice_2_RactiveEvent__RactiveEvent__ContFSharpChoice_2_RactiveEvent__RactiveEvent_((function (args)
    {
      CancellationToken__ThrowIfCancellationRequested$(args.Aux.CancellationToken);
      args.Aux.StackCounter.contents = (args.Aux.StackCounter.contents + 1);
      null;
      if ((args.Aux.StackCounter.contents > 1000)) 
      {
        args.Aux.StackCounter.contents = 0;
        null;
        return window.setTimeout((function (unitVar0)
        {
          try
          {
            return f(args);
          }
          catch(ex){
            return args.Aux.ExceptionCont(ex);
          };
        }), 1.000000);
      }
      else
      {
        try
        {
          return f(args);
        }
        catch(ex){
          return args.Aux.ExceptionCont(ex);
        };
      };
    })));
  });
  Async_1_protectedCont$FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent_FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent_ = (function (f)
  {
    return (new Async_1_FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent__ContFSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent_((function (args)
    {
      CancellationToken__ThrowIfCancellationRequested$(args.Aux.CancellationToken);
      args.Aux.StackCounter.contents = (args.Aux.StackCounter.contents + 1);
      null;
      if ((args.Aux.StackCounter.contents > 1000)) 
      {
        args.Aux.StackCounter.contents = 0;
        null;
        return window.setTimeout((function (unitVar0)
        {
          try
          {
            return f(args);
          }
          catch(ex){
            return args.Aux.ExceptionCont(ex);
          };
        }), 1.000000);
      }
      else
      {
        try
        {
          return f(args);
        }
        catch(ex){
          return args.Aux.ExceptionCont(ex);
        };
      };
    })));
  });
  Async_1_protectedCont$Unit_Unit_ = (function (f)
  {
    return (new Async_1_Unit__ContUnit_((function (args)
    {
      CancellationToken__ThrowIfCancellationRequested$(args.Aux.CancellationToken);
      args.Aux.StackCounter.contents = (args.Aux.StackCounter.contents + 1);
      null;
      if ((args.Aux.StackCounter.contents > 1000)) 
      {
        args.Aux.StackCounter.contents = 0;
        null;
        return window.setTimeout((function (unitVar0)
        {
          try
          {
            return f(args);
          }
          catch(ex){
            return args.Aux.ExceptionCont(ex);
          };
        }), 1.000000);
      }
      else
      {
        try
        {
          return f(args);
        }
        catch(ex){
          return args.Aux.ExceptionCont(ex);
        };
      };
    })));
  });
  Async__FromContinuations$FSharpChoice_2_RactiveEvent__RactiveEvent_FSharpChoice_2_RactiveEvent__RactiveEvent_ = (function (f)
  {
    return (function (_f)
    {
      return Async_1_protectedCont$FSharpChoice_2_RactiveEvent__RactiveEvent_FSharpChoice_2_RactiveEvent__RactiveEvent_(_f);
    })((function (k)
    {
      return f((new TupleFSharpFunc_2_FSharpChoice_2_RactiveEvent__RactiveEvent__Unit__FSharpFunc_2_Exception__Unit__FSharpFunc_2_String__Unit_(k.Cont, k.Aux.ExceptionCont, k.Aux.CancelledCont)));
    }));
  });
  Async__FromContinuations$FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent_FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent_ = (function (f)
  {
    return (function (_f)
    {
      return Async_1_protectedCont$FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent_FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent_(_f);
    })((function (k)
    {
      return f((new TupleFSharpFunc_2_FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent__Unit__FSharpFunc_2_Exception__Unit__FSharpFunc_2_String__Unit_(k.Cont, k.Aux.ExceptionCont, k.Aux.CancelledCont)));
    }));
  });
  Async__StartImmediate$ = (function (workflow, cancellationToken)
  {
    var _144;
    if ((cancellationToken.Tag == 1.000000)) 
    {
      var v = Option__GetValue$CancellationToken_CancellationToken_(cancellationToken);
      _144 = v;
    }
    else
    {
      _144 = (new CancellationToken___ctor$({Tag: 0.000000}));
    };
    var token = _144;
    var f = workflow.Item;
    var aux = (new AsyncParamsAux___ctor$({contents: 0}, (function (value)
    {
      var ignored0 = value;
    }), (function (value)
    {
      var ignored0 = value;
    }), token));
    return f((new AsyncParams_1_Unit___ctor$Unit_((function (value)
    {
      var ignored0 = value;
    }), aux)));
  });
  CancellationToken__ThrowIfCancellationRequested$ = (function (x, unitVar1)
  {
    var matchValue = x.Cell;
    if ((matchValue.Tag == 1.000000)) 
    {
      var _470;
      var cell = Option__GetValue$FSharpRef_1_Boolean_FSharpRef_1_Boolean_(matchValue);
      _470 = cell.contents;
      if (_470) 
      {
        var _cell = Option__GetValue$FSharpRef_1_Boolean_FSharpRef_1_Boolean_(matchValue);
        throw ("OperationCancelledException");
        return null;
      }
      else
      {
        ;
      };
    }
    else
    {
      ;
    };
  });
  CancellationToken___ctor$ = (function (Cell)
  {
    this.Cell = Cell;
  });
  CancellationToken___ctor$.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = this.Cell.CompareTo(that.Cell);
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      return 0.000000;
    };
  });
  CreateEnumerable_1_Int32___ctor$Int32 = (function (factory)
  {
    this.factory = factory;
  });
  FSharpChoice_2_RactiveEvent__RactiveEvent__Choice1Of2RactiveEvent__RactiveEvent_ = (function (Item)
  {
    this.Tag = 0.000000;
    this._CaseName = "Choice1Of2";
    this.Item = Item;
  });
  FSharpChoice_2_RactiveEvent__RactiveEvent__Choice1Of2RactiveEvent__RactiveEvent_.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = ((this.Tag < that.Tag) ? -1.000000 : ((this.Tag == that.Tag) ? 0.000000 : 1.000000));
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = this.Item.CompareTo(that.Item);
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        return 0.000000;
      };
    };
  });
  FSharpChoice_2_RactiveEvent__RactiveEvent__Choice2Of2RactiveEvent__RactiveEvent_ = (function (Item)
  {
    this.Tag = 1.000000;
    this._CaseName = "Choice2Of2";
    this.Item = Item;
  });
  FSharpChoice_2_RactiveEvent__RactiveEvent__Choice2Of2RactiveEvent__RactiveEvent_.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = ((this.Tag < that.Tag) ? -1.000000 : ((this.Tag == that.Tag) ? 0.000000 : 1.000000));
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = this.Item.CompareTo(that.Item);
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        return 0.000000;
      };
    };
  });
  FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent__Choice1Of4RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent_ = (function (Item)
  {
    this.Tag = 0.000000;
    this._CaseName = "Choice1Of4";
    this.Item = Item;
  });
  FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent__Choice1Of4RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent_.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = ((this.Tag < that.Tag) ? -1.000000 : ((this.Tag == that.Tag) ? 0.000000 : 1.000000));
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = this.Item.CompareTo(that.Item);
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        return 0.000000;
      };
    };
  });
  FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent__Choice2Of4RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent_ = (function (Item)
  {
    this.Tag = 1.000000;
    this._CaseName = "Choice2Of4";
    this.Item = Item;
  });
  FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent__Choice2Of4RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent_.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = ((this.Tag < that.Tag) ? -1.000000 : ((this.Tag == that.Tag) ? 0.000000 : 1.000000));
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = this.Item.CompareTo(that.Item);
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        return 0.000000;
      };
    };
  });
  FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent__Choice3Of4RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent_ = (function (Item)
  {
    this.Tag = 2.000000;
    this._CaseName = "Choice3Of4";
    this.Item = Item;
  });
  FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent__Choice3Of4RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent_.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = ((this.Tag < that.Tag) ? -1.000000 : ((this.Tag == that.Tag) ? 0.000000 : 1.000000));
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = this.Item.CompareTo(that.Item);
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        return 0.000000;
      };
    };
  });
  FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent__Choice4Of4RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent_ = (function (Item)
  {
    this.Tag = 3.000000;
    this._CaseName = "Choice4Of4";
    this.Item = Item;
  });
  FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent__Choice4Of4RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent_.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = ((this.Tag < that.Tag) ? -1.000000 : ((this.Tag == that.Tag) ? 0.000000 : 1.000000));
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = this.Item.CompareTo(that.Item);
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        return 0.000000;
      };
    };
  });
  Filters___ctor$ = (function (all, completed, active)
  {
    this.all = all;
    this.completed = completed;
    this.active = active;
  });
  Filters___ctor$.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = this.all.CompareTo(that.all);
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = this.completed.CompareTo(that.completed);
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        var ___diff = 0.000000;
        ___diff = this.active.CompareTo(that.active);
        diff = ___diff;
        if ((diff != 0.000000)) 
        {
          return diff;
        }
        else
        {
          return 0.000000;
        };
      };
    };
  });
  GenericConstants__One$Int32_Int32 = (function ()
  {
    return 1;;
  });
  HTMLEventStream_1_Event___ctor$Event_ = (function (attach)
  {
    this.attach = attach;
  });
  LanguagePrimitives__UnboxGeneric$HTMLInputElement_HTMLInputElement_ = (function (x)
  {
    return x;;
  });
  LanguagePrimitives__UnboxGeneric$KeyboardEvent_KeyboardEvent_ = (function (x)
  {
    return x;;
  });
  LanguagePrimitives__UnboxGeneric$String_String = (function (x)
  {
    return x;;
  });
  Observable__subscribe$Event_Event_ = (function (f, w)
  {
    var _1634;
    var impl;
    impl = (new ActionObserver_1_Event___ctor$Event_(f, (function (e)
    {
      ;
    }), (function (unitVar0)
    {
      ;
    })));
    _1634 = {OnNext: (function (v)
    {
      return (function (_this, v)
      {
        return _this.onNext(v);
      })(impl, v);
    }), OnError: (function (e)
    {
      return (function (_this, e)
      {
        return _this.onError(e);
      })(impl, e);
    }), OnCompleted: (function (unitVar1)
    {
      return (function (_this, unitVar1)
      {
        var _1643;
        return _this.onCompleted(_1643);
      })(impl, unitVar1);
    })};
    return w.Subscribe(_1634);
  });
  Observable__subscribe$RactiveEvent_RactiveEvent_ = (function (f, w)
  {
    var _1484;
    var impl;
    impl = (new ActionObserver_1_RactiveEvent___ctor$RactiveEvent_(f, (function (e)
    {
      ;
    }), (function (unitVar0)
    {
      ;
    })));
    _1484 = {OnNext: (function (v)
    {
      return (function (_this, v)
      {
        return _this.onNext(v);
      })(impl, v);
    }), OnError: (function (e)
    {
      return (function (_this, e)
      {
        return _this.onError(e);
      })(impl, e);
    }), OnCompleted: (function (unitVar1)
    {
      return (function (_this, unitVar1)
      {
        var _1493;
        return _this.onCompleted(_1493);
      })(impl, unitVar1);
    })};
    return w.Subscribe(_1484);
  });
  Option__GetValue$Boolean_Boolean = (function (option)
  {
    return option.Value;;
  });
  Option__GetValue$CancellationToken_CancellationToken_ = (function (option)
  {
    return option.Value;;
  });
  Option__GetValue$FSharpRef_1_Boolean_FSharpRef_1_Boolean_ = (function (option)
  {
    return option.Value;;
  });
  Option__GetValue$Int32_Int32 = (function (option)
  {
    return option.Value;;
  });
  Option__GetValue$List_1_Todo_List_1_Todo_ = (function (option)
  {
    return option.Value;;
  });
  Option__GetValue$RactiveObserve_RactiveObserve_ = (function (option)
  {
    return option.Value;;
  });
  Option__GetValue$Tuple_2_Int32__Int32_Tuple_2_Int32__Int32_ = (function (option)
  {
    return option.Value;;
  });
  Option__IsSome$Int32_Int32 = (function (option)
  {
    return ((option.Tag == 1.000000) && true);
  });
  Program__filterProcess$ = (function (ractive)
  {
    var _1580;
    var _1581;
    var f = (function (ev)
    {
      var matchValue = (((window.window).location).hash).substring(2);
      if ((matchValue == "active")) 
      {
        return (function (value)
        {
          var ignored0 = value;
        })((ractive.set("currentFilter", "active")));
      }
      else
      {
        if ((matchValue == "completed")) 
        {
          return (function (value)
          {
            var ignored0 = value;
          })((ractive.set("currentFilter", "completed")));
        }
        else
        {
          (((window.window).location).hash) = "";
          null;
          return (function (value)
          {
            var ignored0 = value;
          })((ractive.set("currentFilter", "all")));
        };
      };
    });
    _1581 = (function (w)
    {
      var _1619;
      var impl;
      impl = w;
      _1619 = {Subscribe: (function (observer)
      {
        return (function (x, observer)
        {
          x.attach((function (ev)
          {
            return observer.OnNext(ev);
          }));
          var _impl;
          _impl = (new ActionDisposable___ctor$((function (unitVar0)
          {
            return x.attach(null);
          })));
          return {Dispose: (function (unitVar1)
          {
            return (function (_this, unitVar1)
            {
              var _1628;
              return _this.f(_1628);
            })(_impl, unitVar1);
          })};
        })(impl, observer);
      })};
      return Observable__subscribe$Event_Event_(f, _1619);
    });
    _1580 = _1581((new HTMLEventStream_1_Event___ctor$Event_((function (cb)
    {
      ((window.window).onhashchange) = cb;
      return null;
    }))));
    return (function (value)
    {
      var ignored0 = value;
    })(_1580);
  });
  Program__get_STORAGE_KEY$ = (function ()
  {
    return "todos-ractive";
  });
  Program__init$ = (function (unitVar0)
  {
    (((window.Ractive).events)["enter"]) = RactiveExtra__RactiveEventPlugins_makeCustomKeyEvent_Static$HTMLElement_HTMLElement_(13);
    null;
    (((window.Ractive).events)["escape"]) = RactiveExtra__RactiveEventPlugins_makeCustomKeyEvent_Static$HTMLElement_HTMLElement_(27);
    null;
    var _68;
    var _69;
    var v = Storage__load$List_1_Todo_List_1_Todo_(Program__STORAGE_KEY);
    if ((v.Tag == 0.000000)) 
    {
      _69 = (new Array());
    }
    else
    {
      var v_ = Option__GetValue$List_1_Todo_List_1_Todo_(v);
      _69 = v_;
    };
    _68 = (new RactiveData___ctor$(_69, "all", (new Filters___ctor$((function (t)
    {
      return true;
    }), (function (t)
    {
      return t.completed;
    }), (function (t)
    {
      return (!t.completed);
    })))));
    var data = _68;
    var ractive = RactiveExtra__RactiveStatic_CreateWith$RactiveData_RactiveData_((window.Ractive), "#todoapp", "#main", data, {Tag: 1.000000, Value: false});
    return (new TupleRactive__RactiveData_(ractive, data));
  });
  Program__main$ = (function (unitVar0)
  {
    var patternInput = Program__init$();
    var ractive = patternInput.Items[0.000000];
    var data = patternInput.Items[1.000000];
    Program__todosProcess$(ractive, data.items);
    Program__toggleProcess$(ractive, data.items);
    return Program__filterProcess$(ractive);
  });
  Program__todosProcess$ = (function (ractive, todos)
  {
    var editingLoop;
    editingLoop = (function (tupledArg)
    {
      var _ractive = tupledArg.Items[0.000000];
      var _todos = tupledArg.Items[1.000000];
      return (function (builder_)
      {
        return AsyncBuilder__Delay$Unit_Unit_(builder_, (function (unitVar)
        {
          return AsyncBuilder__Bind$FSharpChoice_2_RactiveEvent__RactiveEvent__Unit_FSharpChoice_2_RactiveEvent__RactiveEvent__Unit_(builder_, RactiveExtra__Async_AwaitRactiveEvent2_Static$(_ractive, "submit", "cancel"), (function (_arg1)
          {
            var choice = _arg1;
            if ((choice.Tag == 1.000000)) 
            {
              return AsyncBuilder__Zero$(builder_);
            }
            else
            {
              var ev = choice.Item;
              var index = ((ev.index)["i"]);
              var oldTodo = (ev.context);
              var input = LanguagePrimitives__UnboxGeneric$HTMLInputElement_HTMLInputElement_((ev.node));
              _todos.splice(index, 1, (new Todo___ctor$((input.value), oldTodo.completed)));
              return AsyncBuilder__Zero$(builder_);
            };
          }));
        }));
      })(Async_1_get_async$());
    });
    var waitingLoop;
    waitingLoop = (function (tupledArg)
    {
      var _ractive = tupledArg.Items[0.000000];
      var _todos = tupledArg.Items[1.000000];
      return (function (builder_)
      {
        return AsyncBuilder__Delay$Unit_Unit_(builder_, (function (unitVar)
        {
          return AsyncBuilder__Bind$FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent__Unit_FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent__Unit_(builder_, RactiveExtra__Async_AwaitRactiveEvent4_Static$(_ractive, "newTodo", "remove", "clearCompleted", "edit"), (function (_arg2)
          {
            var choice = _arg2;
            var _608;
            var _609;
            if ((choice.Tag == 1.000000)) 
            {
              var ev = choice.Item;
              var index = ((ev.index)["i"]);
              _todos.splice(index, 1);
              _609 = AsyncBuilder__Zero$(builder_);
            }
            else
            {
              if ((choice.Tag == 2.000000)) 
              {
                var _ev = choice.Item;
                _609 = AsyncBuilder__For$Int32_Int32(builder_, Seq__OfArray$Int32_Int32((Seq__ToArray$Int32_Int32(Range__oneStep$Int32_Int32(0, (_todos.length - 1))).reverse())), (function (_arg3)
                {
                  var i = _arg3;
                  if (_todos[i].completed) 
                  {
                    _todos.splice(i, 1);
                    return AsyncBuilder__Zero$(builder_);
                  }
                  else
                  {
                    return AsyncBuilder__Zero$(builder_);
                  };
                }));
              }
              else
              {
                if ((choice.Tag == 3.000000)) 
                {
                  var __ev = choice.Item;
                  var li = (((__ev.node).parentElement).parentElement);
                  var input = LanguagePrimitives__UnboxGeneric$HTMLInputElement_HTMLInputElement_((li.querySelector("#edit")));
                  ((li.classList).add("editing"));
                  (input.value) = (__ev.context).description;
                  null;
                  (input.focus());
                  _609 = AsyncBuilder__Bind$Unit__Unit_Unit__Unit_(builder_, editingLoop((new TupleRactive__List_1_Todo_(_ractive, _todos))), (function (_arg4)
                  {
                    ((li.classList).remove("editing"));
                    return AsyncBuilder__Zero$(builder_);
                  }));
                }
                else
                {
                  var ___ev = choice.Item;
                  var _input = LanguagePrimitives__UnboxGeneric$HTMLInputElement_HTMLInputElement_((___ev.node));
                  _todos.push((new Todo___ctor$((_input.value), false)));
                  (_input.value) = "";
                  null;
                  _609 = AsyncBuilder__Zero$(builder_);
                };
              };
            };
            _608 = _609;
            return AsyncBuilder__Combine$Unit_Unit_(builder_, _608, AsyncBuilder__Delay$Unit_Unit_(builder_, (function (_unitVar)
            {
              Storage__save$List_1_Todo_List_1_Todo_(Program__STORAGE_KEY, _todos);
              return AsyncBuilder__ReturnFrom$Unit_Unit_(builder_, waitingLoop((new TupleRactive__List_1_Todo_(_ractive, _todos))));
            })));
          }));
        }));
      })(Async_1_get_async$());
    });
    return (function (arg00)
    {
      return Async__StartImmediate$(arg00, {Tag: 0.000000});
    })(waitingLoop((new TupleRactive__List_1_Todo_(ractive, todos))));
  });
  Program__toggleProcess$ = (function (ractive, todos)
  {
    var _1433;
    var _1434;
    var f = (function (ev)
    {
      var index = ((ev.index)["i"]);
      var isDone = (LanguagePrimitives__UnboxGeneric$HTMLInputElement_HTMLInputElement_((ev.node)).checked);
      var _1450;
      var _1451;
      var inputRecord = todos[index];
      _1451 = (new Todo___ctor$(inputRecord.description, isDone));
      _1450 = _1451;
      todos.splice(index, 1, _1450);
      return Storage__save$List_1_Todo_List_1_Todo_(Program__STORAGE_KEY, todos);
    });
    _1434 = (function (w)
    {
      var _1464;
      var impl;
      impl = w;
      _1464 = {Subscribe: (function (observer)
      {
        return (function (x, observer)
        {
          var remover = (x.ractive.on(x.ev, (function (delegateArg)
          {
            return (function (arg00)
            {
              return observer.OnNext(arg00);
            })(delegateArg);
          })));
          var disposable = (new ActionDisposable___ctor$((function (unitVar0)
          {
            return (remover.cancel());
          })));
          var _impl;
          _impl = disposable;
          return {Dispose: (function (unitVar1)
          {
            return (function (_this, unitVar1)
            {
              var _1482;
              return _this.f(_1482);
            })(_impl, unitVar1);
          })};
        })(impl, observer);
      })};
      return Observable__subscribe$RactiveEvent_RactiveEvent_(f, _1464);
    });
    _1433 = _1434((new RactiveEventStream___ctor$(ractive, "toggle")));
    (function (value)
    {
      var ignored0 = value;
    })(_1433);
    var _1512;
    var _1513;
    var _f = (function (ev)
    {
      var isDone = (LanguagePrimitives__UnboxGeneric$HTMLInputElement_HTMLInputElement_((ev.node)).checked);
      for (var i = 0; i <= (todos.length - 1); i++)
      {
        if ((todos[i].completed != isDone)) 
        {
          var _1543;
          var _1544;
          var inputRecord = todos[i];
          _1544 = (new Todo___ctor$(inputRecord.description, isDone));
          _1543 = _1544;
          todos.splice(i, 1, _1543);
        }
        else
        {
          ;
        };
      };
      return Storage__save$List_1_Todo_List_1_Todo_(Program__STORAGE_KEY, todos);
    });
    _1513 = (function (w)
    {
      var _1557;
      var impl;
      impl = w;
      _1557 = {Subscribe: (function (observer)
      {
        return (function (x, observer)
        {
          var remover = (x.ractive.on(x.ev, (function (delegateArg)
          {
            return (function (arg00)
            {
              return observer.OnNext(arg00);
            })(delegateArg);
          })));
          var disposable = (new ActionDisposable___ctor$((function (unitVar0)
          {
            return (remover.cancel());
          })));
          var _impl;
          _impl = disposable;
          return {Dispose: (function (unitVar1)
          {
            return (function (_this, unitVar1)
            {
              var _1573;
              return _this.f(_1573);
            })(_impl, unitVar1);
          })};
        })(impl, observer);
      })};
      return Observable__subscribe$RactiveEvent_RactiveEvent_(_f, _1557);
    });
    _1512 = _1513((new RactiveEventStream___ctor$(ractive, "toggleAll")));
    return (function (value)
    {
      var ignored0 = value;
    })(_1512);
  });
  RactiveData___ctor$ = (function (items, currentFilter, filters)
  {
    this.items = items;
    this.currentFilter = currentFilter;
    this.filters = filters;
  });
  RactiveData___ctor$.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = this.items.CompareTo(that.items);
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = ((this.currentFilter < that.currentFilter) ? -1.000000 : ((this.currentFilter == that.currentFilter) ? 0.000000 : 1.000000));
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        var ___diff = 0.000000;
        ___diff = this.filters.CompareTo(that.filters);
        diff = ___diff;
        if ((diff != 0.000000)) 
        {
          return diff;
        }
        else
        {
          return 0.000000;
        };
      };
    };
  });
  RactiveEventStream___ctor$ = (function (ractive, ev)
  {
    this.ractive = ractive;
    this.ev = ev;
  });
  RactiveExtra__Async_AwaitRactiveEvent2_Static$ = (function (r, ev1, ev2)
  {
    return Async__FromContinuations$FSharpChoice_2_RactiveEvent__RactiveEvent_FSharpChoice_2_RactiveEvent__RactiveEvent_((function (tupledArg)
    {
      var cont = tupledArg.Items[0.000000];
      var econt = tupledArg.Items[1.000000];
      var ccont = tupledArg.Items[2.000000];
      var observe1 = {contents: {Tag: 0.000000}};
      var observe2 = {contents: {Tag: 0.000000}};
      observe1.contents = (function (arg0)
      {
        return {Tag: 1.000000, Value: arg0};
      })((r.on(ev1, (function (ev)
      {
        (Option__GetValue$RactiveObserve_RactiveObserve_(observe1.contents).cancel());
        (Option__GetValue$RactiveObserve_RactiveObserve_(observe2.contents).cancel());
        return cont((new FSharpChoice_2_RactiveEvent__RactiveEvent__Choice1Of2RactiveEvent__RactiveEvent_(ev)));
      }))));
      null;
      observe2.contents = (function (arg0)
      {
        return {Tag: 1.000000, Value: arg0};
      })((r.on(ev2, (function (ev)
      {
        (Option__GetValue$RactiveObserve_RactiveObserve_(observe1.contents).cancel());
        (Option__GetValue$RactiveObserve_RactiveObserve_(observe2.contents).cancel());
        return cont((new FSharpChoice_2_RactiveEvent__RactiveEvent__Choice2Of2RactiveEvent__RactiveEvent_(ev)));
      }))));
    }));
  });
  RactiveExtra__Async_AwaitRactiveEvent4_Static$ = (function (r, ev1, ev2, ev3, ev4)
  {
    return Async__FromContinuations$FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent_FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent_((function (tupledArg)
    {
      var cont = tupledArg.Items[0.000000];
      var econt = tupledArg.Items[1.000000];
      var ccont = tupledArg.Items[2.000000];
      var observe1 = {contents: {Tag: 0.000000}};
      var observe2 = {contents: {Tag: 0.000000}};
      var observe3 = {contents: {Tag: 0.000000}};
      var observe4 = {contents: {Tag: 0.000000}};
      observe1.contents = (function (arg0)
      {
        return {Tag: 1.000000, Value: arg0};
      })((r.on(ev1, (function (ev)
      {
        (Option__GetValue$RactiveObserve_RactiveObserve_(observe1.contents).cancel());
        (Option__GetValue$RactiveObserve_RactiveObserve_(observe2.contents).cancel());
        (Option__GetValue$RactiveObserve_RactiveObserve_(observe3.contents).cancel());
        (Option__GetValue$RactiveObserve_RactiveObserve_(observe4.contents).cancel());
        return cont((new FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent__Choice1Of4RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent_(ev)));
      }))));
      null;
      observe2.contents = (function (arg0)
      {
        return {Tag: 1.000000, Value: arg0};
      })((r.on(ev2, (function (ev)
      {
        (Option__GetValue$RactiveObserve_RactiveObserve_(observe1.contents).cancel());
        (Option__GetValue$RactiveObserve_RactiveObserve_(observe2.contents).cancel());
        (Option__GetValue$RactiveObserve_RactiveObserve_(observe3.contents).cancel());
        (Option__GetValue$RactiveObserve_RactiveObserve_(observe4.contents).cancel());
        return cont((new FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent__Choice2Of4RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent_(ev)));
      }))));
      null;
      observe3.contents = (function (arg0)
      {
        return {Tag: 1.000000, Value: arg0};
      })((r.on(ev3, (function (ev)
      {
        (Option__GetValue$RactiveObserve_RactiveObserve_(observe1.contents).cancel());
        (Option__GetValue$RactiveObserve_RactiveObserve_(observe2.contents).cancel());
        (Option__GetValue$RactiveObserve_RactiveObserve_(observe3.contents).cancel());
        (Option__GetValue$RactiveObserve_RactiveObserve_(observe4.contents).cancel());
        return cont((new FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent__Choice3Of4RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent_(ev)));
      }))));
      null;
      observe4.contents = (function (arg0)
      {
        return {Tag: 1.000000, Value: arg0};
      })((r.on(ev4, (function (ev)
      {
        (Option__GetValue$RactiveObserve_RactiveObserve_(observe1.contents).cancel());
        (Option__GetValue$RactiveObserve_RactiveObserve_(observe2.contents).cancel());
        (Option__GetValue$RactiveObserve_RactiveObserve_(observe3.contents).cancel());
        (Option__GetValue$RactiveObserve_RactiveObserve_(observe4.contents).cancel());
        return cont((new FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent__Choice4Of4RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent_(ev)));
      }))));
    }));
  });
  RactiveExtra__RactiveEventPlugins_makeCustomKeyEvent_Static$HTMLElement_HTMLElement_ = (function (keyCode)
  {
    var plugin = (function (node)
    {
      return (function (fire)
      {
        var keydownHandler = (function (ev)
        {
          if (((LanguagePrimitives__UnboxGeneric$KeyboardEvent_KeyboardEvent_(ev).which) == keyCode)) 
          {
            var f = ({});
            (f.node) = node;
            null;
            (f.original) = ev;
            null;
            return (function (value)
            {
              var ignored0 = value;
            })(fire(f));
          }
          else
          {
            ;
          };
        });
        (node.addEventListener("keydown", keydownHandler, false));
        var tear = ({});
        (tear.teardown) = (function ()
        {
          var _38;
          return (function (unitVar0)
          {
            return (node.removeEventListener("keydown", keydownHandler, false));
          })(_38);
        });
        null;
        return tear;
      });
    });
    return (function (delegateArg, _delegateArg)
    {
      return (function (arg00)
      {
        var clo1 = plugin(arg00);
        return (function (arg10)
        {
          return clo1(arg10);
        });
      })(delegateArg)(_delegateArg);
    });
  });
  RactiveExtra__RactiveStatic_CreateWith$RactiveData_RactiveData_ = (function (x, el, template, data, twoway)
  {
    var _108;
    if ((twoway.Tag == 1.000000)) 
    {
      var v = Option__GetValue$Boolean_Boolean(twoway);
      _108 = v;
    }
    else
    {
      _108 = true;
    };
    var _twoway = _108;
    var options = ({});
    (options.template) = template;
    null;
    (options.el) = el;
    null;
    (options.data) = data;
    null;
    (options.twoway) = _twoway;
    null;
    return (new x(options));
  });
  Range__customStep$Int32__Int32_Int32_Int32 = (function (first, stepping, last)
  {
    var _771;
    var f = (function (x)
    {
      if ((x <= last)) 
      {
        return {Tag: 1.000000, Value: (new TupleInt32_Int32(x, (x + stepping)))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    });
    _771 = (function (seed)
    {
      return Seq__Unfold$Int32__Int32_Int32_Int32(f, seed);
    });
    return _771(first);
  });
  Range__oneStep$Int32_Int32 = (function (first, last)
  {
    return Range__customStep$Int32__Int32_Int32_Int32(first, GenericConstants__One$Int32_Int32(), last);
  });
  Seq__Enumerator$Int32_Int32 = (function (xs)
  {
    return xs.GetEnumerator();
  });
  Seq__FoldIndexed$Int32__Unit_Int32_Unit_ = (function (f, seed, xs)
  {
    return Seq__FoldIndexedAux$Unit__Int32_Unit__Int32(f, seed, Seq__Enumerator$Int32_Int32(xs));
  });
  Seq__FoldIndexedAux$Unit__Int32_Unit__Int32 = (function (f, acc, xs)
  {
    var i = {contents: 0};
    var _acc = {contents: acc};
    while (xs.MoveNext())
    {
      _acc.contents = f(i.contents)(_acc.contents)(xs.get_Current());
      null;
      i.contents = (i.contents + 1);
      null;
    };
    return _acc.contents;
  });
  Seq__FromFactory$Int32_Int32 = (function (f)
  {
    var impl;
    impl = (new CreateEnumerable_1_Int32___ctor$Int32(f));
    return {GetEnumerator: (function (unitVar1)
    {
      return (function (__, unitVar1)
      {
        var _841;
        return __.factory(_841);
      })(impl, unitVar1);
    })};
  });
  Seq__IterateIndexed$Int32_Int32 = (function (f, xs)
  {
    var _860;
    return Seq__FoldIndexed$Int32__Unit_Int32_Unit_((function (i)
    {
      return (function (unitVar1)
      {
        return (function (x)
        {
          return f(i)(x);
        });
      });
    }), _860, xs);
  });
  Seq__OfArray$Int32_Int32 = (function (xs)
  {
    var _913;
    var f = (function (i)
    {
      if ((i < Array__BoxedLength$(xs))) 
      {
        return {Tag: 1.000000, Value: (new TupleInt32_Int32(xs[i], (i + 1)))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    });
    _913 = (function (seed)
    {
      return Seq__Unfold$Int32__Int32_Int32_Int32(f, seed);
    });
    return _913(0);
  });
  Seq__ToArray$Int32_Int32 = (function (xs)
  {
    var ys = Array__ZeroCreate$Int32_Int32(0);
    var _848;
    var f = (function (i)
    {
      return (function (x)
      {
        ys[i] = x;
        return null;
      });
    });
    _848 = (function (_xs)
    {
      return Seq__IterateIndexed$Int32_Int32(f, _xs);
    });
    _848(xs);
    return ys;
  });
  Seq__Unfold$Int32__Int32_Int32_Int32 = (function (f, seed)
  {
    return Seq__FromFactory$Int32_Int32((function (unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_Int32__Int32___ctor$Int32_Int32(seed, f));
      return {get_Current: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          var next = (function (_unitVar0)
          {
            var currAcc = Option__GetValue$Int32_Int32(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_Int32__Int32_Tuple_2_Int32__Int32_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_Int32__Int32_Tuple_2_Int32__Int32_(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$Int32_Int32(__.acc) && (function ()
          {
            var _820;
            return next(_820);
          })());
        })(impl, unitVar1);
      }), Reset: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
  });
  Storage__load$List_1_Todo_List_1_Todo_ = (function (key)
  {
    var attempt = LanguagePrimitives__UnboxGeneric$String_String(((window.localStorage).getItem(key)));
    if ((attempt == null)) 
    {
      return {Tag: 0.000000};
    }
    else
    {
      return {Tag: 1.000000, Value: (function (value)
      {
        return value;
      })(((window.JSON).parse(attempt)))};
    };
  });
  Storage__save$List_1_Todo_List_1_Todo_ = (function (key, data)
  {
    return ((window.localStorage).setItem(key, ((window.JSON).stringify(data))));
  });
  Todo___ctor$ = (function (description, completed)
  {
    this.description = description;
    this.completed = completed;
  });
  Todo___ctor$.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = ((this.description < that.description) ? -1.000000 : ((this.description == that.description) ? 0.000000 : 1.000000));
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = ((this.completed < that.completed) ? -1.000000 : ((this.completed == that.completed) ? 0.000000 : 1.000000));
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        return 0.000000;
      };
    };
  });
  TupleFSharpFunc_2_FSharpChoice_2_RactiveEvent__RactiveEvent__Unit__FSharpFunc_2_Exception__Unit__FSharpFunc_2_String__Unit_ = (function (Item0, Item1, Item2)
  {
    this.Items = [Item0, Item1, Item2];
    this.Items = [Item0, Item1, Item2];
    this.Items = [Item0, Item1, Item2];
  });
  TupleFSharpFunc_2_FSharpChoice_2_RactiveEvent__RactiveEvent__Unit__FSharpFunc_2_Exception__Unit__FSharpFunc_2_String__Unit_.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = this.Items[0.000000].CompareTo(that.Items[0.000000]);
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = this.Items[1.000000].CompareTo(that.Items[1.000000]);
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        var ___diff = 0.000000;
        ___diff = this.Items[2.000000].CompareTo(that.Items[2.000000]);
        diff = ___diff;
        if ((diff != 0.000000)) 
        {
          return diff;
        }
        else
        {
          return 0.000000;
        };
      };
    };
  });
  TupleFSharpFunc_2_FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent__Unit__FSharpFunc_2_Exception__Unit__FSharpFunc_2_String__Unit_ = (function (Item0, Item1, Item2)
  {
    this.Items = [Item0, Item1, Item2];
    this.Items = [Item0, Item1, Item2];
    this.Items = [Item0, Item1, Item2];
  });
  TupleFSharpFunc_2_FSharpChoice_4_RactiveEvent__RactiveEvent__RactiveEvent__RactiveEvent__Unit__FSharpFunc_2_Exception__Unit__FSharpFunc_2_String__Unit_.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = this.Items[0.000000].CompareTo(that.Items[0.000000]);
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = this.Items[1.000000].CompareTo(that.Items[1.000000]);
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        var ___diff = 0.000000;
        ___diff = this.Items[2.000000].CompareTo(that.Items[2.000000]);
        diff = ___diff;
        if ((diff != 0.000000)) 
        {
          return diff;
        }
        else
        {
          return 0.000000;
        };
      };
    };
  });
  TupleInt32_Int32 = (function (Item0, Item1)
  {
    this.Items = [Item0, Item1];
    this.Items = [Item0, Item1];
  });
  TupleInt32_Int32.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = ((this.Items[0.000000] < that.Items[0.000000]) ? -1.000000 : ((this.Items[0.000000] == that.Items[0.000000]) ? 0.000000 : 1.000000));
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = ((this.Items[1.000000] < that.Items[1.000000]) ? -1.000000 : ((this.Items[1.000000] == that.Items[1.000000]) ? 0.000000 : 1.000000));
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        return 0.000000;
      };
    };
  });
  TupleRactive__List_1_Todo_ = (function (Item0, Item1)
  {
    this.Items = [Item0, Item1];
    this.Items = [Item0, Item1];
  });
  TupleRactive__List_1_Todo_.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = this.Items[0.000000].CompareTo(that.Items[0.000000]);
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = this.Items[1.000000].CompareTo(that.Items[1.000000]);
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        return 0.000000;
      };
    };
  });
  TupleRactive__RactiveData_ = (function (Item0, Item1)
  {
    this.Items = [Item0, Item1];
    this.Items = [Item0, Item1];
  });
  TupleRactive__RactiveData_.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = this.Items[0.000000].CompareTo(that.Items[0.000000]);
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = this.Items[1.000000].CompareTo(that.Items[1.000000]);
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        return 0.000000;
      };
    };
  });
  UnfoldEnumerator_2_Int32__Int32___ctor$Int32_Int32 = (function (seed, unfold)
  {
    this.seed = seed;
    this.unfold = unfold;
    this.acc = {Tag: 1.000000, Value: this.seed};
    this.current = null;
  });
  Program__STORAGE_KEY = Program__get_STORAGE_KEY$();
  Program__main$()