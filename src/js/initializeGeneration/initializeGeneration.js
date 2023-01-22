const initializeGeneration = (rows, columns, random) => {
  if (rows < 3 || columns < 3) {
    return "The grid dimensions should be minimum 3x3";
  }

  const generation = [];

  for (let rowPosition = 0; rowPosition < rows; rowPosition++) {
    generation[rowPosition] = [];
    for (let columnPosition = 0; columnPosition < columns; columnPosition++) {
      generation[rowPosition][columnPosition] = random
        ? Math.round(Math.random() * 0.7)
        : 0;
    }
  }

  return generation;
};

export default initializeGeneration;
