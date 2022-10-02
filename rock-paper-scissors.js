const playerScoreDiv = document.getElementById('playerScore');
const compScoreDiv = document.getElementById('compScore');
const resultDiv = document.getElementById('gameResult');
const playerEntryDiv = document.getElementById('playerChoice');
const compEntryDiv = document.getElementById('compChoice');
let playerScore = 0;
let compScore = 0;
let roundNumber = 0;
playerScoreDiv.innerText = playerScore;
compScoreDiv.innerText = compScore;

const btns = document.querySelectorAll('button');


btns.forEach((btn) => btn.addEventListener('click', (e) => {
    let playerEntry = e.srcElement.id;
    playerEntry = playerEntry.slice(0, -4);
    playRound(playerEntry);
}))


/* Function to play a round of rock paper scissors. Uses the getComputerChoice() function to generate computer choice. The
user inputs their choice when prompted with the prompt */

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    if (playerSelection === 'reset') {
        resetGame();
        return;
    }
    if (playerScore === 5) {
        resultDiv.innerText = 'Player wins!';
        return;
    }
    if (compScore === 5) {
        resultDiv.innerText = 'Computer wins!';
        return;
    }
    playerEntryDiv.innerHTML = playerSelection;
    compEntryDiv.innerHTML = computerSelection;

    if (((playerSelection === 'rock') && (computerSelection === 'scissors')) 
    || ((playerSelection === 'paper') && (computerSelection === 'rock'))
    || ((playerSelection === 'scissors') && (computerSelection === 'paper')))  {
     playerScore++;
     roundNumber++;
     playerScoreDiv.innerText = playerScore;
     resultDiv.innerText = `Round ${roundNumber}`;
     if (playerScore === 5) {
        resultDiv.innerText = 'Player wins!';
        return;
    }
    }
    else if (playerSelection === computerSelection) {
        roundNumber++;
        resultDiv.innerText = `Round ${roundNumber} drawn`;
    }
    else {
        compScore++;
        roundNumber++;
        compScoreDiv.innerText = compScore;
        resultDiv.innerText = `Round ${roundNumber}`;
        if (compScore === 5) {
            resultDiv.innerText = 'Computer wins!';
            return;
        }
    }
}

function resetGame() {
        playerScore = 0;
        compScore = 0;
        roundNumber = 0;
        playerScoreDiv.innerText = playerScore;
        compScoreDiv.innerText = compScore;
        resultDiv.innerText = `--`
        playerEntryDiv.innerHTML = '--';
        compEntryDiv.innerHTML = '--';
        return 'game reset';
}

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
