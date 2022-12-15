// /**
//  * Declare variables for DOM elements
//  * and possible choices
//  */

let buttons = document.getElementsByClassName("control");
const userImage = document.getElementById("user-image");
const computerImage = document.getElementById("computer-image");
const resultMessage = document.getElementById("result-message");
const choices = ["rock", "paper", "scissors"];


// /**
//  * Add event listener to buttons
//  */

for (let button of buttons) {
    button.addEventListener("click", function () {
        let userChoice = this.getAttribute("data-choice");
        playGame(userChoice);
    });
}


// /**
//  * The main game function
//  * accepts one parameter, which is the data-choice value of the selected button
//  */

function playGame(userChoice) {
    userImage.src = `assets/images/${choices[userChoice]}.png`;
    userImage.alt = choices[userChoice];

    let computerChoice = Math.floor(Math.random() * 3);

    computerImage.src = `assets/images/${choices[computerChoice]}.png`;
    computerImage.alt = choices[computerChoice];

    checkWinner(choices[computerChoice], choices[userChoice]);
}
    

// /**
//  * The check winner function
//  * compares all different scenarios and decides and alerts the winner via on screen text
//  */

function checkWinner(computerChoice, userChoice) {

    if (computerChoice === "rock" && userChoice === "paper") {
        resultMessage.textContent = "You win!";
        return;
    }
    if (computerChoice === "rock" && userChoice === "scissors") {
        resultMessage.textContent = "You lose!";
        return;
    }
    if (computerChoice === "paper" && userChoice === "rock") {
        resultMessage.textContent = "You lose!";
        return;
    }
    if (computerChoice === "paper" && userChoice === "scissors") {
        resultMessage.textContent = "You win!";
        return;
    }
    if (computerChoice === "scissors" && userChoice === "rock") {
        resultMessage.textContent = "You win!";
        return;
    }
    if (computerChoice === "scissors" && userChoice === "paper") {
        resultMessage.textContent = "You lose!";
        return;
    }
    if (computerChoice === userChoice) {
        resultMessage.textContent = "Let's call it a tie!";
        return;
    }
}