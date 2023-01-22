// generate initial grid
createGrid(16);

// trigger board resize function after slider value change
let slider = document.querySelector(".slider");
slider.addEventListener('input', (e) => {
  createGrid(e.target.value);
});

function createGrid(size) {
  // update boardSize display
  let boardSize = document.querySelector(".board-size")
  boardSize.textContent = `${size} x ${size}`;
  // grab parent element and wipe the current grid
  let container = document.querySelector(".game-container")
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  // generate and append new grid to parent element
  for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.className = "row";
    for (let j = 0; j < size; j++) {
      let cell = document.createElement("div");
      cell.className = "cell"
      row.appendChild(cell);
    }
  container.appendChild(row);
  }
  // add hover effect 
  let cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
      cell.classList.add("hovered");
    });
  });
}