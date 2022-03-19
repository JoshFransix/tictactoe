const xClass = "x";
const circleClass = "circle";

const cellElements = document.querySelectorAll("[data-cell]");
let circleTurn;

cellElements.forEach((cell) => {
  cell.addEventListener("click", handleClick, { once: true });
});

function handleClick(e) {
  // Place mark
  // Check for win
  // Check for draw
  // Switch Turns
}
