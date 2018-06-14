const {
  multiply,
  absolute,
  concatNames,
  numbersToStrings
} = require("../src/index.js");

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

  it("converts to positive correctly", () => {
    expect(result).toEqual(expected);
  });
});

describe("concatNames", function() {
  const arrayA = [
    {
      firstName: "Alan",
      lastName: "Sugar"
    },
    {
      firstName: "Alan1",
      lastName: "Sugar1"
    },
    {
      firstName: "Alan2",
      lastName: "Sugar2"
    }
  ];
  const arrayAClone = [...arrayA];

  const expected = ["Alan Sugar", "Alan1 Sugar1", "Alan2 Sugar2"];
  const result = concatNames(arrayA);

  it("preserves the input", () => {
    expect(arrayA).toEqual(arrayAClone);
  });
  it("concat names correctly", () => {
    expect(result).toEqual(expected);
  });
});

describe.only("numbersToStrings", function() {
  const arrayA = ["2", "1", 21, 4];
  const arrayAClone = [...arrayA];

  const expected = ["2", "1", "21", "4"];
  const result = numbersToStrings(arrayA);

  it("preserves the input", () => {
    expect(arrayA).toEqual(arrayAClone);
  });
  it("convert numbers to strings correctly", () => {
    expect(result).toEqual(expected);
  });
});
