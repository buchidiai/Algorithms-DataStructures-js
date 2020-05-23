const { findFactorialIterative, findFactorialRecursive } = require("./index");

test("findFactorialIterative function exists", () => {
  expect(findFactorialIterative).toBeDefined();
});

test("findFactorialRecursive function exists", () => {
  expect(findFactorialRecursive).toBeDefined();
});

test("findFactorialIterative iterates and returns value", () => {
  expect(findFactorialIterative(5)).toEqual(120);
});

test("findFactorialRecursive iterates and returns value", () => {
  expect(findFactorialRecursive(5)).toEqual(120);
});
