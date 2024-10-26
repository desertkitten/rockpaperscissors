let playerScore = 0;
let computerScore = 0;

const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');
const resultDisplay = document.getElementById('result');
const winnerDisplay = document.getElementById('winner');

// Function for computer's random choice
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function to play a single round
function playRound(playerSelection) {
    const computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        resultDisplay.textContent = `It's a tie! You both chose ${playerSelection}.`;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        resultDisplay.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computerScore++;
        resultDisplay.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
    }

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    checkWinner();
}

// Function to check if there is a winner
function checkWinner() {
    if (playerScore === 5) {
        winnerDisplay.textContent = 'Congratulations! You won the game!';
        disableButtons();
    } else if (computerScore === 5) {
        winnerDisplay.textContent = 'Computer wins! Better luck next time!';
        disableButtons();
    }
}

// Disable the button after the game is done
function disableButtons() {
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}

// Event Listeners for buttons
document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));