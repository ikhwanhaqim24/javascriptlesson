// Initialize both human and computer scores to 0
let humanScore = 0;
let computerScore = 0;

// Generate computer random choice
const getComputerChoice = () => {
    const choice = Math.floor(Math.random() * 3);
    
    if (choice == 0) return "rock";
    else if (choice == 1) return "paper";
    else if (choice == 2) return "scissors";
};

// Prompt human choice using R, P, S
const getHumanChoice = () => {
    let choice = prompt("Choose between 3 options, [R, P, S]");

    let message = "";

    if (choice.toLowerCase() == "r" || choice.toLowerCase() == "rock") message = "rock";
    else if (choice.toLowerCase() == "p" || choice.toLowerCase() == "paper") message = "paper";
    else if (choice.toLowerCase() == "s" || choice.toLowerCase() == "scissors") message = "scissors";

    else return console.log("wrong choice");

    return message;
};

// Set a new play round with output result from human vs computer
const playRound = (humanChoice, computerChoice) => {
    if (humanChoice == "rock") {
        if (computerChoice == "rock") return "ties rock";
        else if (computerChoice == "paper") {
            computerScore += 1;
            return "You lose! Paper beats [Rock]";
        }
        else if (computerChoice == "scissors") {
            humanScore += 1;
            return "You win! [Rock] beats Scissors";
        }
    }

    else if (humanChoice == "paper") {
        if (computerChoice == "paper") return "ties paper";
        else if (computerChoice == "rock") {
            humanScore += 1;
            return "You win! [Paper] beats Rock";
        }
        else if (computerChoice == "scissors") {
            computerScore += 1;
            return "You lose! Scissors beats [Paper]";
        }
    }

    else if (humanChoice == "scissors") {
        if (computerChoice == "scissors") return "ties scissors";
        else if (computerChoice == "paper") {
            humanScore += 1;
            return "You win! [Scissors] beats Paper";
        }
        else if (computerChoice == "rock") {
            computerScore += 1;
            return "You lose! Rock beats [Scissors]";
        }
    }
};

// Simulate 5 rounds of games
const playGame = () => {
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    console.log(humanScore, computerScore);
}

// playGame()

const buttons = document.querySelectorAll("button.btn");
const resultText = document.querySelector(".result");

resultText.textContent = "";

buttons.forEach((button) => {
    // add eventlistener to button
    button.addEventListener("click", () => {
        // console.log(button.id, 'button clicked!')

        let text = playRound(button.id, getComputerChoice());

        if (humanScore >= 5) text += "\r\nHuman Wins!";
        else if (computerScore >= 5) text += "\r\nComputer Wins!";

        humanScore = humanScore >= 5 || computerScore >= 5 ? 0 : humanScore;
        computerScore = humanScore >= 5 || computerScore >= 5 ? 0 : computerScore;
        // console.log(humanScore, computerScore);

        resultText.setAttribute('style', 'white-space: pre;');
        resultText.textContent = text;
    });
});