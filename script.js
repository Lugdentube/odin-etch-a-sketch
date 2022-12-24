// create grid
for (let i = 0; i < 16; i++) {
  let row = document.createElement("div");
  row.className = "row";
  for (let j = 0; j < 16; j++) {
   let cell = document.createElement("div");
    cell.className = "cell"
      row.appendChild(cell);
  }
  document.querySelector(".game-container").appendChild(row);
}

// change color upon hovering
const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
  cell.addEventListener('mouseover', () => {
    cell.classList.add("hovered");
  });
});