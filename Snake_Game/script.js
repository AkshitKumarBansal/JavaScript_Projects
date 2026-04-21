const board = document.getElementById("board");
const ctx = board.getContext("2d");
const square = 20;

// Initial snake with 2 segments
const snake = [
  { x: 100, y: 100 },
  { x: 80, y: 100 }
];

window.snake = snake;

// Movement direction (initially right)
const move = { x: square, y: 0 };

// Draw one snake segment
function draw_rect(part) {
  ctx.fillStyle = 'lightblue';
  ctx.strokeStyle = 'darkblue';
  ctx.fillRect(part.x, part.y, 20, 20);
  ctx.strokeRect(part.x, part.y, 20, 20);
}

// Draw the full snake
function draw_snake() {
  snake.forEach(draw_rect);
}

// Move the snake forward by 1  block
function moveSnake() {
  const head = snake[0];
  const newHead = { 
    x: head.x + move.x, 
    y: head.y + move.y 
  };
  snake.unshift(newHead);
  snake.pop();
}

// Clear the canvas
function clear_canvas() {
  ctx.fillStyle = "white";
  ctx.strokeStyle = "black";
  ctx.fillRect(0, 0, board.width, board.height);
  ctx.strokeRect(0, 0, board.width, board.height);
}

// Game loop
function main() {
  setTimeout(() => {
    clear_canvas();
    moveSnake();
    draw_snake();
    main(); // Repeat
  }, 100);
}

window.snake = snake;
window.main = main;
main(); // call after assigning
window.snake = snake;
window.moveSnake = moveSnake;
window.clear_canvas = clear_canvas;
window.board = board;
window.ctx = ctx;