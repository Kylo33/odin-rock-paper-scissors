let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    // Generate a random number between 0 and 2 (inclusive)
    let randomNumber = Math.floor(Math.random() * 3);

    // If the number is 0, return "rock"
    // Else if the number is 1, return "paper"
    // Else return "scissors"

    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    // DO:
    //      Ask the user to input 'rock', 'paper', or 'scissors'
    // While their input is not 'rock', 'paper', or 'scissors'

    let input;
    do {
        input = prompt("Enter 'rock', 'paper', or 'scissors'").toLowerCase();
    } while (!(input === 'rock' || input === 'paper' || input === 'scissors'))

    return input;
}