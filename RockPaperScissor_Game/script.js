const choice = document.querySelectorAll(".choice");
const playerScore = document.getElementById("user-score");
const computerScore = document.getElementById("comp-score");
const result = document.getElementById("result-message");
let playerPoints = 0;
let computerPoints = 0;


choice.forEach((btn) => {
  btn.addEventListener('click', () => {
    winner(btn.id);
  })
})

const choices = ["rock", "paper", "scissors"];

// Function to get computer's choice
const computerChoice = () => {
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

// Function to determine the winner
const winner = (player) => {
  const comp = computerChoice();
  if(comp === "rock" && player === "scissors" ||
     comp === "paper" && player === "rock" ||
     comp === "scissors" && player === "paper") {
    computerPoints++;
    computerScore.innerText = computerPoints;
    result.innerText = "Computer wins!";
  } else if(comp === player) {
    result.innerText = "It's a tie!";
  } else {
    playerPoints++;
    playerScore.innerText = playerPoints;
    result.innerText = "You win!";
  }
}