import createGrid from "../createGrid/createGrid.js";
import initializeGeneration from "../initializeGeneration/initializeGeneration.js";

class World {
  constructor(rows, columns, initialGeneration) {
    this.rows = rows;
    this.columns = columns;
    this.currentGeneration = initialGeneration;
  }

  updateCurrentGeneration(grid) {
    const nextGeneration = initializeGeneration(this.rows, this.columns, false);

    for (
      let rowPositionCell = 0;
      rowPositionCell < this.rows;
      rowPositionCell++
    ) {
      for (
        let columnPositionCell = 0;
        columnPositionCell < this.columns;
        columnPositionCell++
      ) {
        const aliveNeighbors = this.countAliveNeighbors(
          rowPositionCell,
          columnPositionCell
        );

        if (
          this.currentGeneration[rowPositionCell][columnPositionCell] === 1 &&
          aliveNeighbors < 2
        ) {
          nextGeneration[rowPositionCell][columnPositionCell] = 0;
        } else if (
          this.currentGeneration[rowPositionCell][columnPositionCell] === 1 &&
          (aliveNeighbors === 2 || aliveNeighbors === 3)
        ) {
          nextGeneration[rowPositionCell][columnPositionCell] = 1;
        } else if (
          this.currentGeneration[rowPositionCell][columnPositionCell] === 1 &&
          aliveNeighbors > 3
        ) {
          nextGeneration[rowPositionCell][columnPositionCell] = 0;
        } else if (
          this.currentGeneration[rowPositionCell][columnPositionCell] === 0 &&
          aliveNeighbors === 3
        ) {
          nextGeneration[rowPositionCell][columnPositionCell] = 1;
        } else {
          nextGeneration[rowPositionCell][columnPositionCell] =
            this.currentGeneration[rowPositionCell][columnPositionCell];
        }
      }
    }

    document.querySelector(".world").innerHTML = "";
    createGrid(this.rows, this.columns, grid);
    this.currentGeneration = [...nextGeneration];
  }

  countAliveNeighbors(rowPositionCurrentCell, columnPositionCurrentCell) {
    if (
      rowPositionCurrentCell < 0 ||
      rowPositionCurrentCell >= this.rows ||
      columnPositionCurrentCell < 0 ||
      columnPositionCurrentCell >= this.columns
    ) {
      return "Cell must exist within the boundaries of the world";
    }

    let totalAliveNeighbors = 0;

    for (
      let rowPositionNeighbor = -1;
      rowPositionNeighbor <= 1;
      rowPositionNeighbor++
    ) {
      for (
        let columnPositionNeighbor = -1;
        columnPositionNeighbor <= 1;
        columnPositionNeighbor++
      ) {
        const rowBeingChecked = rowPositionCurrentCell + rowPositionNeighbor;
        const columnBeingChecked =
          columnPositionCurrentCell + columnPositionNeighbor;

        if (
          rowBeingChecked >= 0 &&
          rowBeingChecked < this.rows &&
          columnBeingChecked >= 0 &&
          columnBeingChecked < this.columns
        ) {
          totalAliveNeighbors +=
            this.currentGeneration[rowBeingChecked][columnBeingChecked];
        }
      }
    }

    totalAliveNeighbors -=
      this.currentGeneration[rowPositionCurrentCell][columnPositionCurrentCell];

    return totalAliveNeighbors;
  }
}

export default World;
