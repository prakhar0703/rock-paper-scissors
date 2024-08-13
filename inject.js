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

  const btn_rock = document.createElement("button");
  btn_rock.textContent = "ROCK";

  const btn_paper = document.createElement("button");
  btn_paper.textContent = "PAPER";

  const btn_scissors = document.createElement("button");
  btn_scissors.textContent = "SCISSORS";

  const div = document.createElement("div");

  btn_rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
  btn_paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
  btn_scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));
  
  // if(humanScore === 5 || computerScore === 5){
  //   div.textContent = `Your score: ${humanScore}  Computer's score: ${computerScore}`;
  // }
  
  const body = document.querySelector("body");

  body.appendChild(btn_rock);
  body.appendChild(btn_paper);
  body.appendChild(btn_scissors);
  body.appendChild(div);
  
  function playRound(humanChoice, computerChoice) {
    if (computerChoice == "rock" && humanChoice == "scissors") {
      div.textContent = `you lose. Rock beats Scissors. You: ${humanScore} Comp: ${computerScore}`;
      computerScore++;
    } else if (computerChoice == "scissors" && humanChoice == "paper") {
      div.textContent = `you lose. Scissors beat Paper You: ${humanScore} Comp: ${computerScore}`;
      computerScore++;
    } else if (computerChoice == "paper" && humanChoice == "rock") {
      div.textContent = `you lose. Paper beats Rock You: ${humanScore} Comp: ${computerScore}`;
      computerScore++;
    } else if (computerChoice == "rock" && humanChoice == "paper") {
      div.textContent = `you win. Paper beats Rock You: ${humanScore} Comp: ${computerScore}`;
      humanScore++;
    } else if (computerChoice == "scissors" && humanChoice == "rock") {
      div.textContent = `you win. Rock beats Scissors You: ${humanScore} Comp: ${computerScore}`;
      humanScore++;
    } else if (computerChoice == "paper" && humanChoice == "scissors") {
      div.textContent = `you win. Scissors beat Paper You: ${humanScore} Comp: ${computerScore}`;
      humanScore++;
    } else {
      div.textContent = `it's a tie. You: ${humanScore} Comp: ${computerScore}`;
    }
    if (humanScore === 5 || computerScore === 5) {
      if(humanScore === 5){
        div.textContent = `You win. You: ${humanScore} Computer: ${computerScore}`;
      }
      else div.textContent = `Computer wins. You: ${humanScore} Computer: ${computerScore}`
      btn_rock.disabled = true;
      btn_paper.disabled = true;
      btn_scissors.disabled = true;
    }
  }
  
}

playGame();
