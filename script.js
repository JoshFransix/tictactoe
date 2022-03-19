const xClass = "x";
const circleClass = "circle";

const cellElements = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");
let circleTurn;

cellElements.forEach((cell) => {
  cell.addEventListener("click", handleClick, { once: true });
});

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

function setBoardHoverClass() {}
