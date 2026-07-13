const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');
const resetButton = document.getElementById('reset-btn');

let currentPlayer = 'X'; // Current player ('X' or 'O')
let gameActive = true;
let board = Array(9).fill(null);

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

let count = 9;


cells.forEach((cell, index) => {
  cell.addEventListener('click', () => {
    if(cell.innerText !== '' || !gameActive) {
      return; // Ignore clicks on already filled cells or if the game is over
    }
    console.log("Cell Clicked");
    if(currentPlayer === 'X') {
      cell.innerText = 'X';
      cell.classList.add('x');
      board[index] = 'X';
      currentPlayer = 'O';
    } else {
      cell.innerText = 'O';
      cell.classList.add('o');
      board[index] = 'O';
      currentPlayer = 'X';
    }
    
    count--;

    statusText.innerText = `Player ${currentPlayer}'s turn`;

    checkWinner();

    if(count === 0 && gameActive) {
      gameActive = false;
      statusText.innerText = "It's a draw";
    }

  })
});


// Reset button functionality
resetButton.addEventListener('click', () => {
  console.log("Reset Button Clicked");
  cells.forEach(cell => {
    cell.innerText = '';
    cell.classList.remove('x', 'o');
  });
  board.fill(null);
  currentPlayer = 'X';
  statusText.innerText = `Player ${currentPlayer}'s turn`;
  gameActive = true;
  count = 9;
});


// Check for a winner
const checkWinner = () => {
  for(let p of winningConditions) {
    let a = board[p[0]];
    let b = board[p[1]];
    let c = board[p[2]];
    let result = false;
    if(a && a === b && a === c) {
      console.log(`Player ${a} wins!`);
      result = true;
    }
    if(result) {
      gameActive = false;
      statusText.innerText = `Player ${a} wins`;
      return;
    }
  }
}