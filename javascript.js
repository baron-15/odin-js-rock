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
    console.log(`Computer selected "${computerChoise}".`);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        return `${playerSelection} is an invalid entry`;
    }
    else if (computerChoise == playerSelection) {
        return `You selected ${playerSelection}. It's a tie!`;
    }
    else if ((computerChoise == "rock" && playerSelection == "paper") || (computerChoise == "paper" && playerSelection == "scissors") || (computerChoise == "scissors" && playerSelection == "rock")) {
        return `You selected ${playerSelection}. You beat the computer!`;
    }
    else {
        return `You selected ${playerSelection}. The computer beat you!`;
    }
  }
  
  function game(){
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors?");
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
     }
  }

  game();
