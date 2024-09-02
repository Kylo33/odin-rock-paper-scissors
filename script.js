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

// This function capitalizes the first letter of a string
// It assumes that the string is at least one character long.
function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.substring(1);
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    function playRound(humanChoice, computerChoice) {
        // If humanChoice is equal to computer choice, print a tie message and return
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
            return;
        }
        // Declare a humanWon variable
        // If humanChoice is rock and computerChoice is scissors
            // or if humanChoice is scissors and computerChoice is paper
            // or if humanChoice is paper and computerChoice is rock
                // Assign True to humanWon
        let humanWon = (humanChoice === "rock" && computerChoice === "scissors") ||
                        (humanChoice === "scissors" && computerChoice === "paper") ||
                        (humanChoice === "paper" && computerChoice === "rock");
    
    
        // If humanWon
            // print a victory message
            // increment human score by 1
        // Else
            // print a loss message
            // increment computer score by 1
    
        if (humanWon) {
            console.log(`Victory! ${capitalizeFirstLetter(humanChoice)} beats ${capitalizeFirstLetter(computerChoice)}.`)
            humanScore++;
        } else {
            console.log(`You lose! ${capitalizeFirstLetter(computerChoice)} beats ${capitalizeFirstLetter(humanChoice)}.`)
            computerScore++;
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`Human: ${humanScore}, Computer: ${computerScore}`)
    }
}

playGame()