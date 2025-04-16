console.log("This is from main.js");

let result = false;

const container = document.querySelector("#divContainer");
const gridButton = document.querySelector("#gridSizeBtn");
const resetButton = document.querySelector("#resetGridBtn")

const containerSize = 640;
createGrid(16);

// function to generate square divs
function createGrid(size) {
  console.log(container);
  // clear existing grid
  container.innerHTML = "";

  // set the container dimensions
  container.style.width = `${containerSize}px`;
  container.style.height = `${containerSize}px`;

  const squareSize = containerSize / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    container.appendChild(square);
  }

  // add hover effect
  const gridSquares = document.querySelectorAll(".square");

  gridSquares.forEach((square) =>
    square.addEventListener("mouseover", (e) => changeSquareColor(e.target))
  );
}

// onHover event - change square color when hovered
function changeSquareColor(currentSquare) {
  currentSquare.classList.add("squareHovered");
}

// button event listener
gridButton.addEventListener("click", () => {
  let input = prompt("Enter desired grid size (e.g., 16 for 16x16): ");
  const size = parseInt(input);

  if (!isNaN(size) && size > 0 && size <= 100) {
    createGrid(size)
  } else {
    alert("Please enter a valid number between 1 and 100.")
  }
});

// reset button event listener
resetButton.addEventListener("click", () => {
    container.innerHTML = "";
    createGrid(16);
})