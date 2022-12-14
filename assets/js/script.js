// /**
//  * Declare variables for DOM elements
//  * and possible choices
//  */

const buttons = document.getElementsByClassName("control");
const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");
const userImage = document.getElementById("user-image");
const computerImage = document.getElementById("computer-image");
const resultAlert = document.getElementById("result-alert");
const choices = ["rock", "paper", "scissors"];



// /**
//  * Add event listener to buttons
//  */

for (let button of buttons) {
    button.addEventListener("click",function () {
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

    let result = checkWinner(choices[computerChoice], choices[userChoice]);

    updateScores(result);
}
    

function checkWinner() {

}

function updateScores() {
    
}



