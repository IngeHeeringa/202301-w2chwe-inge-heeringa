const createGrid = (rows, columns, world) => {
  const worldHtml = document.querySelector(".world");
  const grid = document.createElement("table");
  grid.setAttribute("class", "grid");
  for (let rowPosition = 0; rowPosition < rows; rowPosition++) {
    const gridRow = document.createElement("tr");
    for (let columnPosition = 0; columnPosition < columns; columnPosition++) {
      const cell = document.createElement("td");
      cell.setAttribute("class", "grid__cell grid__cell--dead");
      cell.innerHTML = world.currentGeneration[rowPosition][columnPosition];

      if (cell.innerText === "1") {
        cell.classList.add("grid__cell--alive");
        cell.classList.remove("grid__cell--dead");
      } else {
        cell.classList.add("grid__cell--dead");
        cell.classList.remove("grid__cell--alive");
      }

      gridRow.appendChild(cell);
    }

    grid.appendChild(gridRow);
  }

  worldHtml.appendChild(grid);
};

export default createGrid;
