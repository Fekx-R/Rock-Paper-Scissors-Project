const getComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndexFromOptions = Math.floor(Math.random() * options.length);
    return options[randomIndexFromOptions];
}

const getHumanChoice = () => {
    let HumanChoice = prompt("Choose Rock, Paper or Scissors :", "Rock").toLowerCase();
    return HumanChoice
}

let playerScore = 0;
let computerScore = 0;
