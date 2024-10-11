const getComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndexFromOptions = Math.floor(Math.random() * options.length);
    return options[randomIndexFromOptions];
}

console.log(getComputerChoice());
