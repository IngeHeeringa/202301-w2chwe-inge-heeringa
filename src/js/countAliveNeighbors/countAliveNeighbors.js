const countAliveNeighbors = (
  rowPositionCurrentCell,
  columnPositionCurrentCell,
  rows,
  columns,
  currentGeneration
) => {
  if (
    rowPositionCurrentCell < 0 ||
    rowPositionCurrentCell >= rows ||
    columnPositionCurrentCell < 0 ||
    columnPositionCurrentCell >= columns
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
        rowBeingChecked < rows &&
        columnBeingChecked >= 0 &&
        columnBeingChecked < columns
      ) {
        totalAliveNeighbors +=
          currentGeneration[rowBeingChecked][columnBeingChecked];
      }
    }
  }

  totalAliveNeighbors -=
    currentGeneration[rowPositionCurrentCell][columnPositionCurrentCell];

  return totalAliveNeighbors;
};

export default countAliveNeighbors;
