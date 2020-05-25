const { palindrome, palindrome1, palindrome2 } = require("./index");

test("palindrome function is defined", () => {
  expect(typeof palindrome).toEqual("function");
  expect(typeof palindrome1).toEqual("function");
  expect(typeof palindrome2).toEqual("function");
});

test('"aba" is a palindrome', () => {
  expect(palindrome("aba")).toBeTruthy();
  expect(palindrome1("aba")).toBeTruthy();
  expect(palindrome2("aba")).toBeTruthy();
});

test('" aba" is not a palindrome', () => {
  expect(palindrome(" aba")).toBeFalsy();
  expect(palindrome1(" aba")).toBeFalsy();
  expect(palindrome2(" aba")).toBeFalsy();
});

test('"aba " is not a palindrome', () => {
  expect(palindrome("aba ")).toBeFalsy();
  expect(palindrome1("aba ")).toBeFalsy();
  expect(palindrome2("aba ")).toBeFalsy();
});

test('"greetings" is not a palindrome', () => {
  expect(palindrome("greetings")).toBeFalsy();
  expect(palindrome1("aba ")).toBeFalsy();
  expect(palindrome2("aba ")).toBeFalsy();
});

test('"1000000001" a palindrome', () => {
  expect(palindrome("1000000001")).toBeTruthy();
  expect(palindrome1("aba ")).toBeFalsy();
  expect(palindrome2("aba ")).toBeFalsy();
});

test('"Fish hsif" is not a palindrome', () => {
  expect(palindrome("Fish hsif")).toBeFalsy();
  expect(palindrome1("Fish hsif")).toBeFalsy();
  expect(palindrome2("Fish hsif")).toBeFalsy();
});

test('"pennep" a palindrome', () => {
  expect(palindrome("pennep")).toBeTruthy();
  expect(palindrome1("Fish hsif")).toBeFalsy();
  expect(palindrome2("Fish hsif")).toBeFalsy();
});
