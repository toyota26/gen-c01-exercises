const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput
    } else {
        console.log('error!')
    }
};

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
        return 'user won!'
    } else if (userChoice === computerChoice) {
        return 'it is a tie!'
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'computer won!'
        } else {
            return 'user won!'
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'computer won!'
        } else {
            return 'user won!'
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'computer won!'
        } else {
            return 'user won!'
        }
    }
}

console.log(determineWinner('paper', 'scissors'));
console.log(determineWinner('rock', 'scissors'));
console.log(determineWinner('rock', 'rock'));
console.log(determineWinner('bomb', 'rock'));


const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();