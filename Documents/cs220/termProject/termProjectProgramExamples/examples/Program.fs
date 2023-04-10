(*|
Term Project Stage 3: Program Examples

Project: Program Examples
Author: Tyler Rodenberger
Date: 4/10/23
Language: F#

Project Description:
The following examples show off a few interesting features of F# -- asynchronous
functions, matching, and unit specification. Asynchronous functions are used in 
threading, delaying, timing, etc. and async blocks allow for all of these to 
be done relatively easily. Matching is one of the key features of F#. Its 
matching system allows not only for really easy comparison but also provides
a concise way to write conditionals and switch statements. Finally, less integral
to F# as a whole but an interesting feature nonetheless is unit specification.
F# has the ability to assign units to values you are working with and 
automatically figure out the unit of the result of an operation. This is useful
when performing calculations or if you are particularly concerned with recording
units.

References:
https://learn.microsoft.com/en-us/dotnet/fsharp/what-is-fsharp (textbook equivalent)
https://www.youtube.com/watch?v=c7eNDJN758U (youtube tutorial)
https://fsharp.org/docs/ (F# Documentation)
|*)






// ================== EXAMPLE 1 -- ASYNCHRONOUS FUNCTIONS =========================== \\


(*|
Asynchrony is something I have only ever encountered in JavaScript. It essentially
allows for threading which is useful for when you want to run more than one piece 
of code at the same time. In F# this is done by using the async keyword when defining
a function (it can also exist in its own code block) and either starting the running
of the code while the rest of the program continues, or by batching several async
functions together and running them using RunAsynchronously (Which is a bit of a
misnomer because there is still threading involved)
|*)

let shortRest = async {
        "This function waits for one second and returns 1" |> ignore
        do! Async.Sleep(1000)
        printfn "I've had a short rest!"
        return 1
    }

let longRest = async {
        "This function waits for three seconds and returns 'monkeys in the bed!'" |> ignore
        do! Async.Sleep(3000)
        printfn "I've had a long rest!"
        return "monkeys in the bed!"
    }

let allRest = async {
        "This function batches the two previous asynchronous functions and runs them together" |> ignore
        // Begin both functions asynchronously
        let! short = Async.StartChild shortRest
        let! long = Async.StartChild longRest

        
        // Wait for the results
        let! result1 = short
        let! result2 = long

        return sprintf "%d %s" (result1 + 5) (result2.ToUpper())
    }

allRest |> Async.RunSynchronously |> printfn "%A"




// ================== EXAMPLE 2 -- RECURSION AND MATCHING =========================== \\

(*|
The main point of this section is to discuss matching, but there is also some
recursion involved which is always nice. Matching is a fairly unique feature to
F# and it allows for easy pattern matching. A similar idea in python or C++ would
be the switch statement. 

Recursion can be done by calling a function within a function, but also by using the
rec keyword when defining a function or code block. Tail recursion is only executed
when the function is set up to support tail recursion (lengthList is not).
|*)

// NOTE: this is not tail recursive
let rec lengthList (list : list<'a>) :int =
    "This function uses recursion and returns the length of an inputed list" |> ignore
    match list with
    | []      -> 0
    | first :: rest -> 1 + lengthList rest

let myList = [1; 2; 3; 4; 5; 6; 7]

lengthList myList |> printfn "%A"


let getColor r g b =
    "This function determines the color with given r, g, and b values" |> ignore
    match r, g, b with 
    | 0,    0,      0       -> "Black"
    | 255,  0,      0       -> "Red"
    | 0,    255,    0       -> "Green"
    | 0,    0,      255     -> "Blue"
    | 255,  255,    0       -> "Yellow"
    | 255,  0,      255     -> "Magenta"
    | 0,    255,    255     -> "Cyan"
    | 255,  255,    255     -> "White"
    | _                     -> "Other"

let r = 255
let g = 255
let b = 0

getColor r g b |> printfn "%A"




// ================== EXAMPLE 3 -- UNITS =========================== \\

(*| 
This next chunk of code shows off some basic features of units in F#.
As a way of performing accurate calculations without having to store the
unit elsewhere or have it assumed, you can assign a unit to a number really
easily in F#. Beyond what I show here, you can create your own units using
the following syntax:

[<Measure>] type oodle = m^3     // this makes an oodle = cubic meter

and you can create easy conversions as follows:

let gramsPerKilogram : float<g kg^-1> = 1000.0<g/kg>
let convertGramsToKilograms (x : float<g>) = x / gramsPerKilogram
|*)

let rectangleArea l w =
    "This function calulates the area of a rectangle. " |> ignore
    l * w

let getVelocity d t =
    "This function calculates the velocity of an object given distance and time." |> ignore
    d / t

[<Measure>] type m // initiates the meter (m) unit
[<Measure>] type s // initiates the second (s) unit

let distance = 100<m> // assigns 100 to distance with a unit meters (m)
let time = 10<s> // assigns 10 to time with a unit seconds (s)

let velocity = getVelocity distance time // velocity has a unit m/s
printfn "Velocity is: %A" velocity

let length = 4<m>
let width = 5<m>
let area = rectangleArea length width // area has a unit m^2
printfn "Area is: %A" area