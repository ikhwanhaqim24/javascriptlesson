// console.log('Hello World')

const getComputerChoice = () => {
    const choice = Math.floor(Math.random() * 3);
    
    if (choice == 0) return "Rock";
    if (choice == 1) return "Paper";
    if (choice == 2) return "Scissors";
};

console.log(getComputerChoice());