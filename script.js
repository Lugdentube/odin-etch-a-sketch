for (let i = 0; i < 16; i++) {
  row = document.createElement("div");
  row.className = "row";
  for (let j = 0; j < 16; j++) {
    cell = document.createElement("div");
    cell.className = "cell"
      row.appendChild(cell);
  }
  document.querySelector(".game-container").appendChild(row);
}