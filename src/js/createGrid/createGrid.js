const createGrid = (rows, columns) => {
  const world = document.querySelector(".world");
  const grid = document.createElement("table");
  grid.setAttribute("class", "grid");
  for (let rowPosition = 0; rowPosition < rows; rowPosition++) {
    const gridRow = document.createElement("tr");
    gridRow.setAttribute("class", "grid__row");
    for (let columnPosition = 0; columnPosition < columns; columnPosition++) {
      const cell = document.createElement("td");
      cell.setAttribute(
        "class",
        `grid__cell dead ${rowPosition}_${columnPosition}`
      );

      gridRow.appendChild(cell);
    }

    grid.appendChild(gridRow);
  }

  world.appendChild(grid);
};

export default createGrid;
