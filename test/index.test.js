const { multiply, absolute } = require("../src/index.js");

describe("multiply", function() {
  const arrayA = [1, 2, 3];
  const arrayAClone = [...arrayA];

  const expected = [3, 6, 9];
  const result = multiply(arrayA, 3);
  it("preserves the input", () => {
    expect(arrayA).toEqual(arrayAClone);
  });
  it("multiplies correctly", () => {
    expect(result).toEqual(expected);
  });
});

// test("multiply", function() {
//   const expected = [4, 8, 12];
//   const result = multiply([2, 4, 6], 2);
//   expect(result).toEqual(expected);
// });

describe("absolute", function() {
  const arrayA = [2, 4, 6, 8, -10, -12];
  const arrayAClone = [...arrayA];

  const expected = [2, 4, 6, 8, 10, 12];
  const result = absolute(arrayA);
  it("preserves the input", () => {
    expect(arrayA).toEqual(arrayAClone);
  });

  it("multiplies correctly", () => {
    expect(result).toEqual(expected);
  });
});
