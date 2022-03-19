const xClass = "x";
const circleClass = "circle";

const cellElements = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");
let circleTurn;

startGame();

function startGame() {
  cellElements.forEach((cell) => {
    cell.addEventListener("click", handleClick, { once: true });
  });
  setBoardHoverClass();
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? circleClass : xClass;
  // Place mark
  placeMark(cell, currentClass);
  // Check for win
  // Check for draw
  // Switch Turns
  swapTurns();
  setBoardHoverClass();
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function swapTurns() {
  circleTurn = !circleTurn;
}

function setBoardHoverClass() {
  board.classList.remove(xClass);
  board.classList.remove(circleClass);
  if (circleTurn) {
    board.classList.add(circleClass);
  } else {
    board.classList.add(xClass);
  }
}
