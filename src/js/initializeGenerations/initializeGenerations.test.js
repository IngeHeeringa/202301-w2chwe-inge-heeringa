import initializeGenerations from "./initializeGenerations";

describe("Given a function initializeGenerations", () => {
  describe("When it receives 5 and 5", () => {
    test("Then it should return [[ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ]]", () => {
      const rows = 5;
      const columns = 5;
      const expectedGridRows = 5;

      const gridRows = initializeGenerations(rows, columns).length;

      expect(gridRows).toBe(expectedGridRows);
    });
  });

  describe("When it receives 0 and 0", () => {
    test("Then it should return the message 'The grid dimensions should be minimum 3x3'", () => {
      const rows = 0;
      const columns = 0;
      const expectedMessage = "The grid dimensions should be minimum 3x3";

      const message = initializeGenerations(rows, columns);

      expect(message).toBe(expectedMessage);
    });
  });

  describe("When it receives 1 and 1", () => {
    test("Then it should return the message 'The grid dimensions should be minimum 3x3'", () => {
      const rows = 1;
      const columns = 1;
      const expectedMessage = "The grid dimensions should be minimum 3x3";

      const message = initializeGenerations(rows, columns);

      expect(message).toBe(expectedMessage);
    });
  });

  describe("When it receives 2 and 2", () => {
    test("Then it should return the message 'The grid dimensions should be minimum 3x3'", () => {
      const rows = 2;
      const columns = 2;
      const expectedMessage = "The grid dimensions should be minimum 3x3";

      const message = initializeGenerations(rows, columns);

      expect(message).toBe(expectedMessage);
    });
  });
});
