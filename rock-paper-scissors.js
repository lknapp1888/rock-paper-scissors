/*function to randomly generate rock, paper or scissors. Math.random generates random decimal number between 0 and 1.
This is multiplied by 3 and then rounded down to the nearest integer using Math.floor. We multiply by three as we need
three numbers - in this case, 0, 1 and 2)
*/


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

/* Function to play a round of rock paper scissors. Uses the getComputerChoice() function to generate computer choice. The
user inputs their choice when prompted with the prompt */

function playRound() {
    let playerSelection = prompt("Make your selection by typing 'rock', 'paper', or 'scissors': ", "");
    //change to lower case as the conditional checks in the function are case sensitive
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
        console.log(`You: ${playerSelection}
Computer: ${computerSelection}`);
return `You win!`;
    }
    else if (playerSelection === computerSelection) {
        console.log(`You: ${playerSelection}
Computer: ${computerSelection}`);
return `Draw!`;
    }
    else {
        console.log(`You: ${playerSelection}
Computer: ${computerSelection}`);
return `You lose!`;
    }
}
}

/* Function to play a 5 round game of rock paper scissors. Uses a for loop to play the playROund() function
5 times. A message with the round name and score is outputted in each round*/
function game() {
    let userScore = 0;
    let compScore = 0;
    alert('Welcome to the Rock Paper Scissors game. There are 5 rounds to play against the computer. Press OK to continue.');
    for (i = 1; i <= 5; i++) {
        let roundOutcome = playRound();
        if (roundOutcome === 'You win!') {
            userScore++;
            console.log(`You have won round ${i}.
Computer score: ${compScore}
User score:     ${userScore}`);
        }
        else if (roundOutcome === 'You lose!') {
            compScore++;
            console.log(`You have lost round ${i}.
Computer score: ${compScore}
User score:     ${userScore}`);
        }
        else {
            console.log(`Round ${i} is a tie.
Computer score: ${compScore}
User score:     ${userScore}`);
        }
    }
    if (userScore > compScore) {
        return 'congratulations! You have won the game';
    }
    else if (userScore < compScore) {
        return 'Unlucky. You have lost the game';
    }
    else {
        return 'The scores are equal - the game is tied!';
    }
}

console.log(game());

