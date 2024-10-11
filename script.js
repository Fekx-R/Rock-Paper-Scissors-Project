const getComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndexFromOptions = Math.floor(Math.random() * options.length);
    return options[randomIndexFromOptions];
}

const getHumanChoice = () => {
    const humanChoice = prompt("Choose Rock, Paper or Scissors :", "Rock").toLowerCase();
    if (humanChoice === 'rock' || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice;
    } else {
        alert("Incorrect Value! Choose Rock, Paper or Scissors value")
        return getHumanChoice()
    }

}


let humanScore = 0;
let computerScore = 0;


const playRound = (humanInput, computerInput) => {
    

    const winningCondition = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    }

    if (winningCondition[humanInput] === computerInput) {
        humanScore++;
        console.log(`Player wins! ${humanInput} beats ${computerInput} \nYour score: ${humanScore} Computer Score: ${computerScore}`);
    } else if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanInput} \nYour score: ${humanScore} Computer Score: ${computerScore}`);
    } else {
        computerScore++;
        console.log(`Computer wins! ${computerInput} beats ${humanInput} \nYour score: ${humanScore} Computer Score: ${computerScore}`);
    }
}

const playGame = () => {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    playRound(humanChoice, computerChoice)

    if (humanScore === 3) {
        alert(`You win the game ${humanScore} - ${computerScore}`)
    } else if (computerScore === 3) {
        alert(`Computer win the game ${computerScore} - ${humanScore}`)
    } else {
        playGame()
    }

    // console.log(`Your score: ${humanScore}`);
    // console.log(`Computer Score: ${computerScore}`);
    
    
}

playGame()