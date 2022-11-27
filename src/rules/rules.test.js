const rules = require("./rules");

describe("rules", () => {
  it("must find no winner", () => {
    const input = {
      o: [5, 6],
      x: [1, 2],
    };

    const result = rules.check(input, "x");

    expect(result).toEqual(undefined);
  });

  describe("horizontal", () => {
    it("must find a horizonal winner row 1", () => {
      const input = {
        o: [5, 6],
        x: [1, 2, 3],
      };

      const result = rules.check(input, "x");

      expect(result).toEqual("x");
    });

    it("must find a horizonal winner row 2", () => {
      const input = {
        o: [1.9],
        x: [4, 5, 6],
      };

      const result = rules.check(input, "x");

      expect(result).toEqual("x");
    });

    it("must find a horizonal winner row 3", () => {
      const input = {
        o: [7, 8, 9],
        x: [0, 1],
      };

      const result = rules.check(input, "o");

      expect(result).toEqual("o");
    });
  });

  describe("vertical", () => {
    it("must find a vertical winner col 1", () => {
      const input = {
        o: [2, 6, 8],
        x: [1, 4, 7],
      };

      const result = rules.check(input, "x");

      expect(result).toEqual("x");
    });

    it("must find a vertical winner col 2", () => {
      const input = {
        o: [2, 5, 8],
        x: [1, 3, 0],
      };

      const result = rules.check(input, "o");

      expect(result).toEqual("o");
    });

    it("must find a vertical winner col 3", () => {
      const input = {
        o: [3, 6, 9],
        x: [1, 2, 4],
      };

      const result = rules.check(input, "o");

      expect(result).toEqual("o");
    });
  });

  describe("diagonal", () => {
    it("must find diagonal winner left to right", () => {
      const input = {
        o: [3, 6],
        x: [1, 5, 9],
      };

      const result = rules.check(input, "x");

      expect(result).toEqual("x");
    });

    it("must find diagonal winner right to left", () => {
      const input = {
        o: [3, 5, 7],
        x: [1, 6],
      };

      const result = rules.check(input, "o");

      expect(result).toEqual("o");
    });
  });
});
