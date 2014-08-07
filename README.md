# TodoMVC with FunScript and Ractive

My attempt to implement the [TodoMVC] (http://todomvc.com/) application in F# with [FunScript] (http://funscript.info/) and [Ractive] (http://www.ractivejs.org/).


There are no TypeScript definitons for Ractive in the [DefinitelyTyped] (https://github.com/borisyankov/DefinitelyTyped) repository, so I took the one from [Han Lin Yap] (https://github.com/codler/Ractive-TypeScript-Definition), modified it a bit and generated a assembly with the FunScript.TypeScript compiler.

I will post a more detailed walkthrough soon but here are some quick notes:

* The server is not interesting, I just used the empty Web API template from [Daniel Mohl] (http://visualstudiogallery.msdn.microsoft.com/39ae8dec-d11a-4ac9-974e-be0fdadec71b) but you can have a look at index.html, which is a modified version of the html file from the original [Ractive TodoMVC implementation] (http://todomvc.com/labs/architecture-examples/ractive/).
* I just started learning F# so these may not be the very best practices, but I tried to implement two Functional Reactive Programming techniques as explained in this tutorial from Tomas Petricek and Jon Skeet: [Asynchronous Workflows] (http://msdn.microsoft.com/en-us/library/hh273070.aspx) and [Event Streams] (http://msdn.microsoft.com/en-us/library/hh273073.aspx).
* FunScript.Extra.fs contains some additional components to FunScript and also an implementation of the [Observable module] (https://github.com/fsharp/fsharp/blob/master/src/fsharp/FSharp.Core/control.fs). This is necessary because the original module uses a lot of object expressions which are not allowed in code quotations. I just copied the code from the fsharp repository using actual types.
* Ractive.Extra.fs contains a couple of utility functions for Ractive but most importantly extensions to use Ractive events with Async workflows and the Observable module.
* Program.fs contains the logic of the application. I divided the program in three processes (unfortunately, they're not 100% independent, two of them modify the state of the todos list), each using a different FPR technique:
  - todosProcess is in charge of adding, removing or updating items from the todo list. It uses an Async workflow to implement a very simple state machine: WAITING -> EDITING
  - toggleProcess is responsible of updating the "completed" flag in the todos. It uses a couple of Ractive event stream which can also be merged.
  - filterProcess implements some pseudo-routing by modifying the filter of the Todo list. This is also an event stream, but in this case the source is directly HTML (window.onhashchange) not a Ractive proxy event.
* Compile.fsx: using a script for the Javascript translation is faster than recompiling the project and makes it unnecessary to restart the server. In bigger projects, you can also send to F# interactive only the parts that have actually changed.

Please let me know if you see something weird, I will post more details later. I hope you find it useful!
