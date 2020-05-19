const firstRecurringCharacter = require("./index");

test("firstRecurringCharacter function exists", () => {
  expect(firstRecurringCharacter).toBeDefined();
});

test("firstRecurringCharacter finds recurring character", () => {
  expect(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4])).toEqual(2);
});
