const initializeGenerations = (rows, columns) => {
  if (rows < 3 && columns < 3) {
    return "The grid dimensions should be minimum 3x3";
  }

  const currentGenerationGrid = [];
  const nextGenerationGrid = [];

  for (let rowPosition = 0; rowPosition < rows; rowPosition++) {
    currentGenerationGrid[rowPosition] = [];
    nextGenerationGrid[rowPosition] = [];
    for (let columnPosition = 0; columnPosition < columns; columnPosition++) {
      currentGenerationGrid[rowPosition][columnPosition] = Math.round(
        Math.random()
      );
      nextGenerationGrid[rowPosition][columnPosition] = 0;
    }
  }

  return currentGenerationGrid;
};

export default initializeGenerations;
