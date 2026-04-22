const board = document.getElementById("board");
const ctx = board.getContext("2d");
const square = 20;

// Initial snake with 2 segments
const snake = [
  { x: 100, y: 100 },
  { x: 80, y: 100 }
];

// Movement direction (initially right)
const move = { x: square, y: 0 };
let food_x = -1;
let food_y = -1;

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

// TODO: implement this
function random_food(min, max) {
  const randomGridPos = Math.floor(Math.random() * ((max - min) / square + 1));
  return randomGridPos * square;
}

// TODO: implement this
function gen_food() {
  let valid = false;
  while (!valid) {
    food_x = random_food(20, 380);
    food_y = random_food(20, 380);
    valid = !snake.some(segment => segment.x === food_x && segment.y === food_y);
  }
  window.food_x = food_x; // for testing purpose
  window.food_y = food_y; // for testing purpose

}

function drawFood() {
  ctx.fillStyle = "red";
  ctx.strokeStyle = "brown";
  ctx.fillRect(food_x, food_y, square, square);
  ctx.strokeRect(food_x, food_y, square, square);
}

// Game loop
function main() {
  setTimeout(() => {
    clear_canvas();
    if (food_x === -1 && food_y === -1) gen_food();
    moveSnake();
    draw_snake();
    drawFood();
    main();
  }, 100);
}

// for testing purpose
window.snake = snake;
window.main = main;
window.moveSnake = moveSnake;
window.clear_canvas = clear_canvas;
window.board = board;
window.ctx = ctx;
window.drawFood = drawFood;
window.gen_food = gen_food;
window.food_x = food_x;
window.food_y = food_y;
main();