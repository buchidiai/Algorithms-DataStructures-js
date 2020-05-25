const {
  reverse1,
  reverse2,
  reverse3,
  reverse4,
  reverse5,
  reverse6,
  reverse7,
} = require("./index");

test("Reverse function exists", () => {
  expect(reverse1).toBeDefined();
  expect(reverse2).toBeDefined();
  expect(reverse3).toBeDefined();
  expect(reverse4).toBeDefined();
  expect(reverse5).toBeDefined();
  expect(reverse6).toBeDefined();
  expect(reverse7).toBeDefined();
});

test("Reverse reverses a string", () => {
  expect(reverse1("abcd")).toEqual("dcba");
  expect(reverse2("abcd")).toEqual("dcba");
  expect(reverse3("abcd")).toEqual("dcba");
  expect(reverse4("abcd")).toEqual("dcba");
  expect(reverse5("abcd")).toEqual("dcba");
  expect(reverse6("abcd")).toEqual("dcba");
  expect(reverse7("abcd")).toEqual("dcba");
});
