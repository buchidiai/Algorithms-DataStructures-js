const mergeSortedArrays = require("./index");

test("mergeSortedArrays function exists", () => {
  expect(mergeSortedArrays).toBeDefined();
});

test("mergeSortedArrays marges 2 arrays", () => {
  expect(mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30])).toEqual([
    0,
    3,
    3,
    4,
    4,
    6,
    30,
    31,
  ]);
});
