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

    }
}