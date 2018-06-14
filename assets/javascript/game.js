var cleoChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];


var wins = 0;
var losses = 0;
var userGuesses = 9;



//will need to use document.onkeyup!

document.onkeyup = function (event) {

    var userGuess = event.key; //??
    console.log(userGuess);

    // computer picks a random letter 
    // from the cleoChoices array

    // user select a letter 

    // compare the cleoChoice letter with the user selected 

    // if they match 
    // user wins 

    // if they don't match 
    // losses go up by one 
    // userGuesses go down by one

}




//include if else statments that reference userGuess, cleoGuess, 

//if else statments that increase score by one (wins++), losses++,