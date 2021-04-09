const sumNumbers = require("./utils").sumNumbers;

test("sumNumbers of [2, 6, cat, dogs, 10]", () => {
  const result = sumNumbers(["2", "6", "cat", "dogs", "10"]);
  expect(result).toBe(18);
});

test("sumNumbers of [cat, dogs, goose]", () => {
  const result = sumNumbers(["cat", "dogs", "goose"]);
  expect(result).toBe(0);
});

test("sumNumbers of [10, 4, 6]", () => {
  const result = sumNumbers(["10", "4", "6"]);
  expect(result).toBe(20);
});

test("sumNumbers of [$, 10, 5, home]", () => {
  const result = sumNumbers(["$", "10", "5", "home"]);
  expect(result).toBe(15);
});
