# TodoMVC with FunScript and Ractive

Implementation of a [TodoMVC] (http://todomvc.com/) application in F# with [FunScript] (http://funscript.info/) and [Ractive] (http://www.ractivejs.org/).

Don't look at the generated Javascript directly if you don't want to feel dizzy ;) The only one interesting file is funscript/Programs.fs.

## FunScript

FunScript is a lightweight F# library that lets you rapidly develop single-page applications. You can connect to external data sources and call REST APIs with intellisense, produce dashboards using JavaScript visualization libraries and write asynchronous computations easily without explicit callbacks. More info at http://funscript.info/

This application also uses the [FunScript.HTML extensions] (https://github.com/alfonsogarciacaro/FunScript.HTML).

## Ractive.js

There is already a [Ractive.js implementation] (http://todomvc.com/labs/architecture-examples/ractive/) in the todomvc repository which you can check for more details. My implementation is more or less a direct translation in F# but using Functional Reactive Programming techniques and asynchronous workflows. The html is almost the same with a few modifications.

The bindings for using Ractive.js from FunScript have been built using [Han Lin Yap's TypeScript definitions] (https://github.com/codler/Ractive-TypeScript-Definition).

## Note
The purpose of this app is to show how quickly and easily you can integrate FRP, .NET methods and a JS framework in F# using FunScript. However, in a more complicated app two other things should be done:
* Separate the business logic from the interface logic. Ideally, the business logic should have no dependencies to FunScript (besides de ReflectedDefiniton attribute), so you can use the code in other .NET/Mono platforms without modifications.
* Encapsulate the state so only specific processes can modify it.
