#r "lib/FunScript.dll"
#r "lib/FunScript.Interop.dll"
#r "lib/FunScript.TypeScript.Binding.lib.dll"
#r "lib/FunScript.TypeScript.Binding.ractive.dll"

#load "FunScript.Extra.fs"
#load "Ractive.Extra.fs"
#load "Program.fs"

open System.IO
open FunScript

let path = Path.Combine(__SOURCE_DIRECTORY__, @"..\Server\js")
if not (Directory.Exists path) then (Directory.CreateDirectory path) |> ignore
let code = Compiler.Compiler.Compile(expression= <@ Program.main() @> , noReturn=true, components=Extra.Components.get())
File.WriteAllText(Path.Combine(path, "app.js"), code)
