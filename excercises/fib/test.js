const { fibIterative, fibRecursion } = require("./index");

test("fibIterative function exists", () => {
  expect(fibIterative).toBeDefined();
});

test("fibIterative return index of squence", () => {
  expect(fibIterative(6)).toEqual(8);
});

test("fibRecursion function exists", () => {
  expect(fibRecursion).toBeDefined();
});

test("fibRecursion return index of squence", () => {
  expect(fibRecursion(6)).toEqual(8);
});
