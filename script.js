// console.log('Hello World')

let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const choice = Math.floor(Math.random() * 3);
    
    if (choice == 0) return "rock";
    else if (choice == 1) return "paper";
    else if (choice == 2) return "scissors";
};

// console.log(getComputerChoice());

const getHumanChoice = () => {
    let choice = prompt("Choose between 3 options, [R, P, S]");

    let message = "";

    if (choice.toLowerCase() == "r" || choice.toLowerCase() == "rock") message = "rock";
    else if (choice.toLowerCase() == "p" || choice.toLowerCase() == "paper") message = "paper";
    else if (choice.toLowerCase() == "s" || choice.toLowerCase() == "scissors") message = "scissors";

    else return console.log("wrong choice");

    return message;
};

// getHumanChoice();

const playRound = (humanChoice, computerChoice) => {
    if (humanChoice == "rock") {
        if (computerChoice == "rock") return console.log("ties rock");
        else if (computerChoice == "paper") {
            computerScore += 1;
            return console.log("You lose! Paper beats [Rock]");
        }
        else if (computerChoice == "scissors") {
            humanScore += 1;
            return console.log("You win! [Rock] beats Scissors");
        }
    }

    else if (humanChoice == "paper") {
        if (computerChoice == "paper") return console.log("ties paper");
        else if (computerChoice == "rock") {
            humanScore += 1;
            return console.log("You win! [Paper] beats Rock");
        }
        else if (computerChoice == "scissors") {
            computerScore += 1;
            return console.log("You lose! Scissors beats [Paper]");
        }
    }

    else if (humanChoice == "scissors") {
        if (computerChoice == "scissors") return console.log("ties scissors");
        else if (computerChoice == "paper") {
            humanScore += 1;
            return console.log("You win! [Scissors] beats Paper");
        }
        else if (computerChoice == "rock") {
            computerScore += 1;
            return console.log("You lose! Rock beats [Scissors]");
        }
    }
};

// playRound(getHumanChoice(), getComputerChoice());

const playGame = () => {
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    console.log(humanScore, computerScore);
}

playGame()