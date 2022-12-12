/**
 * Declare const for DOM elements
 * and possible choices
 */

const buttons = document.getElementsByClassName("button");
const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");
const userImage = document.getElementById("user-image");
const computerImage = document.getElementById("computer-image");
const resultAlert = document.getElementById("result-alert");
const choices = ["rock", "paper", "scissors"];

/**
 * Add event listener to buttons
 */

for (let button of buttons) {
    button.addEventListener("click", function(playGame)) {
        let userChoice = this.getAttribute("data-choice");
        playGame(userChoice);
    };
}

/**
 * The main game function
 * accepts one parameter, which is the data-choice value of the selected button
 */

function playGame(userChoice) {
    userImage.src = `assets/images/${choices[userChoice]}.png`;
    userImage.alt = choices[userChoice];

    let computerChoice = Math.floor(Math.random("data-choice") * 3);

    computerImage.src = `assets/images/${choices[computerChoice]}.png`;
    computerImage.alt = choices[computerChoice];

    let result = checkWinner(choices[computerChoice], choices[userChoice]);

    updateScores(result);
}


/**
 * Gets the current score from the DOM and increments it by 1
 */


/**function incrementUserScore() {

    let oldScore = parseInt(document.getElementById("user-score").innerText);
    document.getElementById("user-score").innerText = ++oldScore;

}

function incrementComputerScore() {

    let oldScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++oldScore;

}
*/

