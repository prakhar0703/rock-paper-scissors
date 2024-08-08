function getComputerChoice() {
  let choiceComputer = Math.random();
  if (choiceComputer < 0.33) return "rock";
  else if (choiceComputer < 0.66) return "paper";
  else return "scissors";
}

function getHumanChoice() {
  let choiceHuman = prompt("Choose: Rock? Paper? Scissors?").toLowerCase();
  if (
    choiceHuman !== "rock" &&
    choiceHuman !== "paper" &&
    choiceHuman !== "scissors"
  ) {
    alert("invalid choice");
  } else return choiceHuman;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  let humanChoice;
  let computerChoice;

  for (i = 0; i < 5; i++) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  console.log(`Your score: ${humanScore}  Computer's score: ${computerScore}`);

  function playRound(humanChoice, computerChoice) {
    if (computerChoice == "rock" && humanChoice == "scissors") {
      console.log("you lose. Rock beats Scissors");
      computerScore++;
    } else if (computerChoice == "scissors" && humanChoice == "paper") {
      console.log("you lose. Scissors beat Paper");
      computerScore++;
    } else if (computerChoice == "paper" && humanChoice == "rock") {
      console.log("you lose. Paper beats Rock");
      computerScore++;
    } else if (computerChoice == "rock" && humanChoice == "paper") {
      console.log("you win. Paper beats Rock");
      humanScore++;
    } else if (computerChoice == "scissors" && humanChoice == "rock") {
      console.log("you win. Rock beats Scissors");
      humanScore++;
    } else if (computerChoice == "paper" && humanChoice == "scissors") {
      console.log("you win. Scissors beat Paper");
      humanScore++;
    } else {
      console.log("it's a tie.");
    }
  }
}

playGame();
