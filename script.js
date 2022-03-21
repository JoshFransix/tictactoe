const xClass = "x";
const circleClass = "circle";

const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
  // [0, 4, 3, 6],
];

const cellElements = document.querySelectorAll("[data-cell]");
const winMessageTextElement = document.querySelector("[data-win-message-text]");
const winMessageElement = document.getElementById("win-message");
const board = document.getElementById("board");
const restartButton = document.getElementById("restartButton");
let circleTurn;

restartButton.addEventListener("click", startGame);

startGame();

function startGame() {
  cellElements.forEach((cell) => {
    cell.classList.remove(circleClass);
    cell.classList.remove(xClass);
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true });
  });
  setBoardHoverClass();
  winMessageElement.classList.remove("show");
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? circleClass : xClass;
  // Place mark
  placeMark(cell, currentClass);
  if (checkWin(currentClass)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    swapTurns();
    setBoardHoverClass();
  }
  // Check for win
  // Check for draw
  // Switch Turns
}

function endGame(draw) {
  if (draw) {
    winMessageTextElement.innerText = "Draw!!";
  } else {
    winMessageTextElement.innerText = `${circleTurn ? "O" : "X"} Wins!!`;
  }
  winMessageElement.classList.add("show");
}

function isDraw() {
  return [...cellElements].every((cell) => {
    return (
      cell.classList.contains(xClass) || cell.classList.contains(circleClass)
    );
  });
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

function checkWin(currentClass) {
  return winCombinations.some((combination) => {
    return combination.every((index) => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
}

// Dark Mode

const checkbox = document.getElementById("checkbox");
// const cell = document.querySelectorAll(".cell");

checkbox.addEventListener("click", () => {
  // Change background color
  document.body.classList.toggle("dark");
  // cellElements.classList.toggle("dark");
});

const numbers = [1, 4, 5, 6, 7, 8765, 4];

const res = numbers.some((number) => {
  return numbers > 7;
});

console.log(res);
