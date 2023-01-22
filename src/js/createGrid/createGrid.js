const createGrid = (rows, columns, world) => {
  const worldHtml = document.querySelector(".world");
  const grid = document.createElement("table");
  grid.setAttribute("class", "grid");
  for (let rowPosition = 0; rowPosition < rows; rowPosition++) {
    const gridRow = document.createElement("tr");
    gridRow.setAttribute("class", "grid__row");
    for (let columnPosition = 0; columnPosition < columns; columnPosition++) {
      const cell = document.createElement("td");
      cell.setAttribute("class", "dead");
      cell.innerHTML = world.currentGeneration[rowPosition][columnPosition];

      if (cell.innerText === "1") {
        cell.classList.add("alive");
        cell.classList.remove("dead");
      } else {
        cell.classList.add("dead");
        cell.classList.remove("alive");
      }

      gridRow.appendChild(cell);
    }

    grid.appendChild(gridRow);
  }

  worldHtml.appendChild(grid);
};

export default createGrid;
