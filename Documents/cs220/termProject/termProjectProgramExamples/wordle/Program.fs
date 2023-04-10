open System
open System.IO

(*|
Term Project Stage 3: Program Examples

Project: Wordle
Author: Tyler Rodenberger
Date: 4/10/23
Language: F#

Project Description:
This is a command line implementation of the common game, Wordle. The goal is
to figure out what the target 5-letter word is by guessing other 5-letter words.
After each guess, the program will reveal if any letters in your guess are 
correct and in the correct position (green), correct and in the wrong position
(yellow), or if they are incorrect (default terminal print color). The program
also provides you with a reference alphabet that records which letters you have 
found information about in the past. Green = correct letter and position, Yellow =
correct letter but incorrect position, Red = incorrect letter. The game ends
when the user correctly guesses the word or runs out of guesses (6).

References:
https://learn.microsoft.com/en-us/dotnet/fsharp/what-is-fsharp (textbook equivalent)
https://www.youtube.com/watch?v=c7eNDJN758U (youtube tutorial)
https://fsharp.org/docs/ (F# Documentation)
|*)


// ==================== FILE I/O =======================

let readWordsFromFile (filename : string) =
    "Takes no arguments and returns a list of all words in a given file." |> ignore
    let allWords = File.ReadAllText(filename)
    allWords.Split '\n'

let chooseSolution() :list<char> = 
    "returns a random word (as a character list) from the solutionsList" |> ignore
    let solutionsList = readWordsFromFile "solutions.txt"
    let rand = Random()
    let index = rand.Next solutionsList.Length
    Seq.toList solutionsList.[index]




// ==================== GENERAL TOOLS =======================

let rec insertColor (color :char, alphabetColors :list<char>, alphabetIndex :int) :list<char> =
    "This function takes a color value (y, g, or u, for example), a list of
    alphabet colors, and an index to put the color value into the color list.
    It recursively calls itself to return a new list that is identical to the 
    original with the color argument replacing the original color at the desired
    index." |> ignore
    match alphabetColors with
    | [] -> []
    | head :: tail when alphabetIndex = 0 -> color :: tail
    | head :: tail -> head :: (insertColor(color, tail, (alphabetIndex - 1))) // recursive call

let clearWindow() :unit = 
    "This function just prints a ton of new lines to 'clear' the current
    terminal window" |> ignore
    for i in 0..24 do
        printf "\n"

let stringifyCharList (charList :list<char>) :string =
    "This takes a list of characters and returns a string made from
    the characters" |> ignore
    let mutable string = ""
    for letter in charList do
        string <- string + (Char.ToString letter)
    string




// ==================== GUESS HANDLING =======================

let validGuess(guess : string) :bool = 
    let dictionary = readWordsFromFile("fiveLetterWords.txt")
    if Array.contains guess dictionary then
        true
    else
        false

let readGuess() :list<char> = 
    "Reads a guess from the user from the command line." |> ignore
    let guess = Console.ReadLine()
    if validGuess guess then
        Seq.toList guess
    else
        []

let correctGuess (solution : list<char>, guess : list<char>) :bool =
    "Returns true if the guess matches the solution and false otherwise" |> ignore
    if guess = solution then
        true
    else
        false

let getGuessColors (guess : list<char>, solution : list<char>) :list<char> =
    "getGuessColors takes a guess and a solution in the form of character lists
    and returns a third list that holds the appropriate character color values
    based on the guess. Example: guess = round and solution = doors results in
    ['y'; 'g'; 'u'; 'u'; 'y'] where y = Yellow, g = Green, and u = standard 
    terminal text color." |> ignore
    let mutable colorList :list<char> = []
    let mutable tempSolution :list<char> = solution

    // first pass gets green letters and removes them from consideration
    for i in 0..(guess.Length - 1) do
        let guessChar = List.item i guess
        if List.item i tempSolution = guessChar then
            tempSolution <- insertColor('_', tempSolution, i) // using insert color to replace a character with an underscore
            colorList <- 'g'::colorList
        else
            colorList <- 'u'::colorList
    
    colorList <- List.rev colorList // colorList is built up backwards in pass 1 -- this fixes that

    // second pass gets yellows and removes them from consideration
    for i in 0..(guess.Length - 1) do
        let guessChar = List.item i guess
        if List.contains guessChar tempSolution && (List.item i colorList) <> 'g' then // if the letter is in the solution and has not already been found to be green:
            let solutionCharIndex = tempSolution |> List.findIndex (fun x -> x = guessChar)
            let guessCharIndex = i
            colorList <- insertColor('y', colorList, guessCharIndex)
            tempSolution <- insertColor('_', tempSolution, solutionCharIndex)

    // printfn "current (reversed) Color List for %s: %s" (stringifyCharList(guess)) (stringifyCharList(colorList))
    colorList 




// ==================== ALPHABET HANDLING =======================

let getAlphabetColors (guessList :list<list<char>>, solution :list<char>, alphabet :list<char>, alphabetColors :list<char>) :list<char> =
    "getAlphabetColors determines the colors of the letters of the alphabet
    to print out after each guess is made. Green meaning the letter has 
    previously been determined to be in the correct location, yellow meaning
    the letter is known to be in the work but the location is not known, and
    red meaning the letter is known to not be in the word." |> ignore
    let mutable alphColors = alphabetColors

    // first pass -- identify reds
    for guess in guessList do
        let guessColors = getGuessColors(guess, solution)
        // at this point, guess is a character array with each respective color
        // held at the same index in guessColors
        for i in 0..(guess.Length - 1) do
            let guessChar = List.item i guess
            let guessColor = List.item i guessColors
            let alphIndex = alphabet |> List.findIndex (fun x -> x = guessChar)
            // if guessColor is red or yellow, update alphColors as such
            if guessColor = 'u' then
                alphColors <- insertColor(guessColor, alphColors, alphIndex)

    // second pass -- identify yellows (overwriting reds as necessary)
    for guess in guessList do
        let guessColors = getGuessColors(guess, solution)
        // at this point, guess is a character array with each respective color
        // held at the same index in guessColors
        for i in 0..(guess.Length - 1) do
            let guessChar = List.item i guess
            let guessColor = List.item i guessColors
            let alphIndex = alphabet |> List.findIndex (fun x -> x = guessChar)
            // if guessColor is red or yellow, update alphColors as such
            if guessColor = 'y' then
                alphColors <- insertColor(guessColor, alphColors, alphIndex)

    // third pass -- identify greens (overwriting yellows as necessary)
    for guess in guessList do
        let guessColors = getGuessColors(solution, guess)
        // at this point, guess is a character array with each respective color
        // held at the same index in guessColors
        for i in 0..(guess.Length - 1) do
            let guessChar = List.item i guess
            let guessColor = List.item i guessColors
            let alphIndex = alphabet |> List.findIndex (fun x -> x = guessChar) 
            // if guessColor is green, update the value in alphColors to be 'g'
            if guessColor = 'g' then
                alphColors <- insertColor(guessColor, alphColors, alphIndex)
    alphColors



// ==================== PRINTING =======================

let printColoredGuess (guess : list<char>, colorList : list<char>) :unit = 
    "Takes a guess and a color list that holds the appropriate colors of
    each character in the guess and prints each character out in its
    associated color." |> ignore
    for i in 0..(guess.Length - 1) do
        if List.item i colorList = 'g' then
            Console.ForegroundColor <- ConsoleColor.Green // changes text color
            let character = List.item i guess
            printf "%c" character 
            Console.ResetColor() // resets color to default
        elif List.item i colorList = 'y' then
            Console.ForegroundColor <- ConsoleColor.Yellow
            let character = List.item i guess
            printf "%c" character 
            Console.ResetColor()
        else
            let character = List.item i guess
            printf "%c" character 
    printf "\n"

let printColoredAlphabet (alphabet : list<char>, alphabetColors : list<char>) :unit = 
    "Takes an alphabet and its associated color list and prints out a colored
    alphabet in the same way that printColoredGuess prints a colored guess." |> ignore
    for i in 0..(alphabet.Length - 1) do
        let letter = List.item i alphabet
        let color = List.item i alphabetColors
        if  color = 'g' then
            Console.ForegroundColor <- ConsoleColor.Green
            printf "%c" letter 
            Console.ResetColor()
        elif color = 'y' then
            Console.ForegroundColor <- ConsoleColor.Yellow
            printf "%c" letter 
            Console.ResetColor()
        elif color = 'u' then
            Console.ForegroundColor <- ConsoleColor.Red
            printf "%c" letter 
            Console.ResetColor()
        else
            printf "%c" letter 
    printfn "\n"

let printGuessList (guessList : list<list<char>>, solution : list<char>) :unit = 
    "This function prints a list of a list of characters as a series of
    strings using getGuessColors and printGuessColors to ensure each
    character of each string is the correct color." |> ignore
    for charlist in guessList do
        let guessColors = getGuessColors(charlist, solution)
        printColoredGuess(charlist, guessColors)

let wordle :unit = 
    "Wordle controls the flow of the wordle game" |> ignore
    let solution = chooseSolution() // choose solution from solutions list

    let mutable guessList = []

    let alphabet :list<char> = ['a'; 'b'; 'c'; 'd'; 'e'; 'f'; 'g'; 'h'; 'i'; 'j'; 'k'; 'l'; 'm'; 'n'; 'o'; 'p'; 'q'; 'r'; 's'; 't'; 'u'; 'v'; 'w'; 'x'; 'y'; 'z']
    let mutable alphabetColors :list<char> = ['n'; 'n'; 'n'; 'n'; 'n'; 'n'; 'n'; 'n'; 'n'; 'n'; 'n'; 'n'; 'n'; 'n'; 'n'; 'n'; 'n'; 'n'; 'n'; 'n'; 'n'; 'n'; 'n'; 'n'; 'n'; 'n']
    let mutable solved = false
    let mutable guessesRemaining = 6

    clearWindow()

    while solved = false && guessesRemaining <> 0 do

        // get guess from user
        printfn "Guesses remaining: %d" guessesRemaining
        printf "Enter your guess: "
        let mutable guess = readGuess()
        while guess = [] do
            printf "That is not a valid 5-letter word. Try again: "
            guess <- readGuess()

        // add it to the guess list
        guessList <- guess::guessList

        // update endGame parameters
        solved <- correctGuess(solution, guess)
        guessesRemaining <- guessesRemaining - 1

        // do all the round printing and color calculation shenanigans
        clearWindow()

        guessList <- List.rev guessList
        printfn "Guesses so far: "
        printGuessList(guessList, solution)
        printf "\n"
        alphabetColors <- getAlphabetColors(guessList, solution, alphabet, alphabetColors)
        printColoredAlphabet(alphabet, alphabetColors)
        guessList <- List.rev guessList
   
    // game over
    clearWindow()
    guessList <- List.rev guessList
    printGuessList(guessList, solution)
    guessList <- List.rev guessList
    printf "\n"
    if solved = false then
        printfn "You ran out of guesses. Better luck next time!"
        let targetWord = stringifyCharList(solution) 
        printf "The correct word was: " 
        Console.ForegroundColor <- ConsoleColor.Green
        printf "%s\n" targetWord
        Console.ResetColor()
    else
        printfn "You solved the puzzle!"
        let targetWord = stringifyCharList(solution) 
        printf "The word was: " 
        Console.ForegroundColor <- ConsoleColor.Green
        printf "%s\n" targetWord
        Console.ResetColor()


wordle