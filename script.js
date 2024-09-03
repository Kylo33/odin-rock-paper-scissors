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

    const computerScorePara = document.querySelector("#computerScore");
    const humanScorePara = document.querySelector("#humanScore");

    const feedbackPara = document.querySelector("#feedback");

    function playRound(humanChoice, computerChoice) {
        // If humanChoice is equal to computer choice, print a tie message and return
        if (humanChoice === computerChoice) {
            feedbackPara.textContent = "It's a tie!";
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
            feedbackPara.textContent = `Victory! ${capitalizeFirstLetter(humanChoice)} beats ${capitalizeFirstLetter(computerChoice)}.`;
            humanScore++;
        } else {
            feedbackPara.textContent = `You lose! ${capitalizeFirstLetter(computerChoice)} beats ${capitalizeFirstLetter(humanChoice)}.`;
            computerScore++;
        }
    }

    function updateScore() {
        humanScorePara.textContent = `Human: ${humanScore}`;
        computerScorePara.textContent = `Computer: ${computerScore}`;
    }

    let roundNumber = 1;

    document.addEventListener("click", e => {
        if (["rock", "paper", "scissors"].includes(e.target.id)) {
            playRound(e.target.id, getComputerChoice());
            updateScore();
            if (roundNumber++ === 5) {
                alert(`Game over! You ${humanScore > computerScore ? "beat" 
                    : humanScore < computerScore ? "lost to"
                    : "tied with"} the computer!`);
                    humanScore = 0;
                    computerScore = 0;
                    updateScore();
                    roundNumber = 1;
            }
        }
    })
}
playGame()