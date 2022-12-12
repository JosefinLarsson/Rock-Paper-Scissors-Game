/**
 * Declare variables for DOM elements
 * and possible choices
 */

let buttons = document.getElementsByClassName("buttons");
let userScore = document.getElementById("user-score");
let computerScore = document.getElementById("computer-score");
let userImage = document.getElementById("user-image");
let computerImage = document.getElementById("computer-image");
let resultAlert = document.getElementById("result-alert");
let choices = ["rock", "paper", "scissors"];

/**
 * Add event listener to buttons
 */

for (let button of buttons) {
    button.addEventListener("click", function()) {
        let userChoice = this.getAttribute("data-choice");
        playGame(userChoice);
    });
}

/**
 * The main game function
 * accepts one parameter, which is the data-choice value of the selected button
 */

function playGame(userChoice) {
    userImage.src = `assets/images/${choices[userChoice]}.png`;
    userImage.alt = choices[userChoice];

    let computerChoice = Math.floor(Math.random() * 3);

    computerImage.src = `assets/images/${choices[computerChoice]}.png`;
    computerImage.alt = choices[computerChoice];
}