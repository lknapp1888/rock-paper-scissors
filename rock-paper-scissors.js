function getComputerChoice() {
    let choiceRefNum = Math.floor((Math.random() * 3));
    if (choiceRefNum === 0) {
        return 'rock';
    }
    else if (choiceRefNum === 1) {
        return 'paper';
    }
    else if (choiceRefNum === 2) {
        return 'scissors';
    }
}

function playRound() {
    let playerSelection = prompt("Make your selection by typing 'rock', 'paper', or 'scissors': ", "");
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = getComputerChoice();

    if ((playerSelection !== 'rock') && (playerSelection !== 'paper') && (playerSelection !== 'scissors')) {
        alert("Your entry is invalid! Pleaser enter 'rock', 'paper' or 'scissors'");
        return playRound();
    }
    else {
    if (((playerSelection === 'rock') && (computerSelection === 'scissors')) 
    || ((playerSelection === 'paper') && (computerSelection === 'rock'))
    || ((playerSelection === 'scissors') && (computerSelection === 'paper')))  {
        return `You: ${playerSelection}
Computer: ${computerSelection}
You win!`;
    }
    else if (playerSelection === computerSelection) {
        return `You: ${playerSelection}
Computer: ${computerSelection}
Draw!`;
    }
    else {
        return `You: ${playerSelection}
Computer: ${computerSelection}
You lose!`;
    }
}
}

console.log(playRound());

