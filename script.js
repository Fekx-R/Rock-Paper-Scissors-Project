const gameDisplay = document.getElementById("display-game");
const scoreDisplay = document.querySelector('.score')

const startGame = document.getElementById("startGame").addEventListener("click", (e) => {
    e.target.style.display = "none";
    
    scoreDisplay.style.display = 'flex';
    gameDisplay.style.display = "block";
});

// computer choice
const getComputerChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndexFromOptions = Math.floor(Math.random() * options.length);
    return options[randomIndexFromOptions];
}

// player win condition
const hasPlayerWonTheRound = (playerOption, computerOption) => {
    return (
        (playerOption === 'Rock' && computerOption === 'Scissors') ||
        (playerOption === 'Paper' && computerOption === 'Rock') ||
        (playerOption === 'Scissors' && computerOption === 'Paper')
    )
}

let playerScore = 0;
let computerScore = 0;

const getRoundResult = (playerOption) => {
    const computerOption = getComputerChoice();

    if (hasPlayerWonTheRound(playerOption, computerOption)) {
        playerScore++;
        return `Player wins! ${playerOption} beats ${computerOption}`;
    } else if (playerOption === computerOption) {
        return `Its a tie! both choose ${playerOption}`;
    } else {
        computerScore++;
        return `Computer wins! ${computerOption} beats ${playerOption}`
    }
}

const playerSpanScore = document.getElementById("human-score");
const computerSpanScore = document.getElementById("computer-score");
const resultMsg = document.querySelector(".result");
const resetGame = document.querySelector(".reset-game");
const winResultMsg = document.getElementById('win-result')


const getPlayerOption = (playerOption) => {
    resultMsg.innerText = getRoundResult(playerOption);
    playerSpanScore.textContent = playerScore;
    computerSpanScore.textContent = computerScore;

    if (playerScore === 3 || computerScore === 3) {
        winResultMsg.textContent = `${playerScore === 3 ? 'Player' : 'Computer'} has won the game!`;

        resetGame.style.display = 'flex';
        gameDisplay.style.display = 'none';
    }
}

// starting the game from beginning
const playAgain = () => {
    playerScore = 0;
    computerScore = 0;
    resetGame.style.display = 'none';
    gameDisplay.style.display = 'block';
    winResultMsg.textContent = '';
    resultMsg.textContent = '';
    playerSpanScore.textContent = 0;
    computerSpanScore.textContent = 0;
}


document.getElementById("play-again").addEventListener('click', playAgain);

const rockBtn = document.getElementById("rock");
rockBtn.addEventListener('click', () => {
    getPlayerOption('Rock');
});


const paperBtn = document.getElementById("paper").addEventListener('click', function() {
    getPlayerOption('Paper');
});

const scissorsBtn = document.getElementById("scissors").addEventListener('click', () => {
    getPlayerOption('Scissors')
});