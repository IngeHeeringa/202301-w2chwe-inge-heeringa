import countAliveNeighbors from "./countAliveNeighbors";

describe("Given a function countAliveNeighbors", () => {
  describe("When it receives 3, 3, 5, 5 and [[1, 0, 1, 1, 0], [1, 0, 0, 1, 1], [0, 0, 1, 0, 0], [1, 0, 1, 1, 0], [1, 0, 1, 1, 0]]", () => {
    test("Then it should return 4", () => {
      const rowPositionCurrentCell = 3;
      const columnPositionCurrentCell = 3;
      const rows = 5;
      const columns = 5;
      const grid = [
        [1, 0, 1, 1, 0],
        [1, 0, 0, 1, 1],
        [0, 0, 1, 0, 0],
        [1, 0, 1, 1, 0],
        [1, 0, 1, 1, 0],
      ];
      const expectedTotalAliveNeighbors = 4;

      const totalAliveNeighbors = countAliveNeighbors(
        rowPositionCurrentCell,
        columnPositionCurrentCell,
        rows,
        columns,
        grid
      );

      expect(totalAliveNeighbors).toBe(expectedTotalAliveNeighbors);
    });
  });

  describe("When it receives -2, 1, 5, 5 and [[1, 0, 1, 1, 0], [1, 0, 0, 1, 1], [0, 0, 1, 0, 0], [1, 0, 1, 1, 0], [1, 0, 1, 1, 0]]", () => {
    test("Then it should return the message 'Cell must exist within the boundaries of the world'", () => {
      const rowPositionCurrentCell = -2;
      const columnPositionCurrentCell = 1;
      const rows = 5;
      const columns = 5;
      const grid = [
        [1, 0, 1, 1, 0],
        [1, 0, 0, 1, 1],
        [0, 0, 1, 0, 0],
        [1, 0, 1, 1, 0],
        [1, 0, 1, 1, 0],
      ];
      const expectedMessage =
        "Cell must exist within the boundaries of the world";

      const message = countAliveNeighbors(
        rowPositionCurrentCell,
        columnPositionCurrentCell,
        rows,
        columns,
        grid
      );

      expect(message).toBe(expectedMessage);
    });
  });
  describe("When it receives 1, 6, 5, 5 and [[1, 0, 1, 1, 0], [1, 0, 0, 1, 1], [0, 0, 1, 0, 0], [1, 0, 1, 1, 0], [1, 0, 1, 1, 0]]", () => {
    test("Then it should return the message 'Cell must exist within the boundaries of the world'", () => {
      const rowPositionCurrentCell = 1;
      const columnPositionCurrentCell = 6;
      const rows = 5;
      const columns = 5;
      const grid = [
        [1, 0, 1, 1, 0],
        [1, 0, 0, 1, 1],
        [0, 0, 1, 0, 0],
        [1, 0, 1, 1, 0],
        [1, 0, 1, 1, 0],
      ];
      const expectedMessage =
        "Cell must exist within the boundaries of the world";

      const message = countAliveNeighbors(
        rowPositionCurrentCell,
        columnPositionCurrentCell,
        rows,
        columns,
        grid
      );

      expect(message).toBe(expectedMessage);
    });
  });
});
