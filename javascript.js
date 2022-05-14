function computerPlay() {
    let computerNumber = Math.random() * 3;
    let computerChoice = "rock";
    if (computerNumber <= 1) {
        computerChoise = "rock";
    }
    else if (computerNumber <=2) {
        computerChoise = "paper";
    }
    else {
        computerChoise = "scissors";
    }
    return computerChoise;
}

function playRound(playerSelection) {
    computerSelection = computerPlay();
    if (computerChoise == playerSelection) {
        tieScore ++;
        return `You selected "${playerSelection}". Computer selected "${computerChoise}". It's a tie!`;
    }
    else if ((computerChoise == "rock" && playerSelection == "paper") || (computerChoise == "paper" && playerSelection == "scissors") || (computerChoise == "scissors" && playerSelection == "rock")) {
        playerScore ++;
        return `You selected "${playerSelection}". Computer selected "${computerChoise}". You beat the computer!`;
    }
    else {
        computerScore++;
        return `You selected "${playerSelection}". Computer selected "${computerChoise}". The computer beat you!`;
    }
  }
  
  function oneGame(playerSelection, gameCount){
        if (gameCount >5) {
            content.textContent = `Best of 5 so game is over.`;
            result.textContent = ``;
            result.appendChild(content);} 
        else {
            content.textContent = playRound(playerSelection);
            result.appendChild(content);

            if (gameCount ==5) {
            report.textContent = `Here's the final report after 5 rounds. Your score: ${playerScore}. Computer score: ${computerScore}. Tie: ${tieScore}.`;
            result.appendChild(report);
        }
  }
}

const btn = document.querySelectorAll('[class=choice]');
const result = document.querySelector('#result');
const content = document.createElement('div');
const report = document.createElement('div');
  let i = 1;
  let playerScore = 0;
  let computerScore = 0;
  let tieScore = 0;
  btn.forEach((button) => {
    button.addEventListener('click', () => {
        const btnID = button.getAttribute('id');
        oneGame(btnID, i);
        i++;
    });
});
