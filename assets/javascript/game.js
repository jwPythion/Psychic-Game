



var cleoChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var wins = 0;
var losses = 0;
var userGuesses = 9;


// computer picks a random letter 
// from the cleoChoices array
var cleoChosenLetter = cleoChoices[Math.floor(Math.random() * cleoChoices.length)];
console.log(cleoChosenLetter);//check that this is working...


//will need to use document.onkeyup to track!

document.onkeyup = function (event) {

    var userGuess = event.key; 
    console.log(userGuess);//check that this is working with consolelog



    // user selects a letter...

    // compare the cleoChoice letter with the user selected
    if (userGuess === cleoChosenLetter) {
        // if they match 
        // user wins & #of wins increases by one
        wins++
        alert("You win!");
    } else {
        // if they don't match 
        // losses go up by one 
        // userGuesses go down by one
        losses++
        alert("You lose!");
    }

}




//include if else statments that reference userGuess, cleoGuess, 

//if else statments that increase score by one (wins++), losses++,