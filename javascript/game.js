document.addEventListener("DOMContentLoaded", function(){
// Handler when all assets are loaded (avoids null reference error)

//initializes variables and references
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var guessesSoFar = [];
var hiddenLetter = "";
var winsEl = document.getElementById("wins");
var wins = 0;
var lossesEl = document.getElementById("losses");
var losses = 0;
var guessesLeftEl = document.getElementById("guessesleft");
var guessesLeft = 9;
var guessesEl = document.getElementById("guesses");

//resets variables to initial values and generates a new hidden letter
function reset() {
    guessesSoFar = [];
    guessesLeftEl.textContent = "Guesses Left : 9";
    guessesEl.textContent = "Your Guesses so far:";
    guessesLeft = 9;
    hiddenLetter = generateLetter();
}

//generates a hidden letter
function generateLetter() {
    min = Math.ceil(0);
    max = Math.floor(26);
    return alphabet[Math.floor(Math.random() * (26))];
}

reset();


//key press handler function
document.onkeyup = function(event) {
    var keyPress = event.key.toLowerCase();
    //checks that the keypress is a valid input
    if (alphabet.includes(keyPress)) {
    //increments wins and updates page if guess is correct then runs reset function
    if (keyPress === hiddenLetter) {
        wins++;
        winsEl.textContent = ("Wins: " + wins);
        reset();
    }
    //loss handler, checks to see if the user has used all guesses, then either updates list of guesses if not, or resets if they have
    else {
        if (guessesSoFar.length < 8) {
        guessesLeft--;
        guessesSoFar.push(keyPress);
        guessesEl.textContent = ("Your Guesses so far: "+ guessesSoFar);
        guessesLeftEl.textContent = ("Guesses Left: " + guessesLeft);
        }
        else {
            losses++;
            lossesEl.textContent = ("Losses : " + losses);
            reset();
        }
    }
    }
}
});