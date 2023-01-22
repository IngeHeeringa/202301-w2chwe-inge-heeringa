import World from "./World";

describe("Given an object instance of World", () => {
  describe("Given a method updateCurrentGeneration", () => {
    describe("When it receives 5, 5 and [[0, 1, 0, 0, 0], [1, 1, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]", () => {
      test("Then it should return [[1, 1, 0, 0, 0], [1, 1, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]", () => {
        const rows = 5;
        const columns = 5;
        const currentState = [
          [0, 1, 0, 0, 0],
          [1, 1, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
        ];
        const nextState = [
          [1, 1, 0, 0, 0],
          [1, 1, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
        ];
        const world = new World(rows, columns, currentState);

        world.updateCurrentGeneration();

        expect(world.currentGeneration).toStrictEqual(nextState);
      });
    });
    describe("When it receives 5, 5 and [[1, 1, 0, 0, 0], [1, 1, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]", () => {
      test("Then it should return [[1, 1, 0, 0, 0], [1, 1, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]", () => {
        const rows = 5;
        const columns = 5;
        const currentState = [
          [1, 1, 0, 0, 0],
          [1, 1, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
        ];
        const nextState = [
          [1, 1, 0, 0, 0],
          [1, 1, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
        ];
        const world = new World(rows, columns, currentState);

        world.updateCurrentGeneration();

        expect(world.currentGeneration).toStrictEqual(nextState);
      });
    });
    describe("When it receives 5, 5 and [[0, 1, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]", () => {
      test("Then it should return [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]", () => {
        const rows = 5;
        const columns = 5;
        const currentState = [
          [0, 1, 0, 0, 0],
          [0, 1, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
        ];
        const nextState = [
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
        ];
        const world = new World(rows, columns, currentState);

        world.updateCurrentGeneration();

        expect(world.currentGeneration).toStrictEqual(nextState);
      });
    });
    describe("When it receives 5, 5 and [[0, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]", () => {
      test("Then it should receive [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]", () => {
        const rows = 5;
        const columns = 5;
        const currentState = [
          [0, 0, 0, 0, 0],
          [0, 1, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
        ];
        const nextState = [
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
        ];
        const world = new World(rows, columns, currentState);

        world.updateCurrentGeneration();

        expect(world.currentGeneration).toStrictEqual(nextState);
      });
    });
    describe("When it receives 5, 5 and [[1, 1, 0, 0, 0], [1, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]", () => {
      test("Then it should return [[1, 1, 0, 0, 0], [1, 1, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]", () => {
        const rows = 5;
        const columns = 5;
        const currentState = [
          [1, 1, 0, 0, 0],
          [1, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
        ];
        const nextState = [
          [1, 1, 0, 0, 0],
          [1, 1, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
        ];
        const world = new World(rows, columns, currentState);

        world.updateCurrentGeneration();

        expect(world.currentGeneration).toStrictEqual(nextState);
      });
    });
  });

  describe("Given a method countAliveNeighbors", () => {
    describe("When it receives 3, 3, 5, 5 and [[1, 0, 1, 1, 0], [1, 0, 0, 1, 1], [0, 0, 1, 0, 0], [1, 0, 1, 1, 0], [1, 0, 1, 1, 0]]", () => {
      test("Then it should return 4", () => {
        const rows = 5;
        const columns = 5;
        const world = new World(rows, columns, [
          [1, 0, 1, 1, 0],
          [1, 0, 0, 1, 1],
          [0, 0, 1, 0, 0],
          [1, 0, 1, 1, 0],
          [1, 0, 1, 1, 0],
        ]);
        const rowPositionCurrentCell = 3;
        const columnPositionCurrentCell = 3;
        const expectedTotalAliveNeighbors = 4;

        const totalAliveNeighbors = world.countAliveNeighbors(
          rowPositionCurrentCell,
          columnPositionCurrentCell
        );

        expect(totalAliveNeighbors).toBe(expectedTotalAliveNeighbors);
      });
    });
  });
});
