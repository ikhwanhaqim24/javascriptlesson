// console.log('Hello World')

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

    if (choice.toLowerCase() == "r") message = "rock";
    else if (choice.toLowerCase() == "p") message = "paper";
    else if (choice.toLowerCase() == "s") message = "scissors";

    else message = "wrong choice given";

    return console.log(message);
};

getHumanChoice();