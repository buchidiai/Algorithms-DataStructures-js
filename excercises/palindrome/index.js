// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//simple
function palindrome(str) {
  let reversed = str.split("").reverse().join("");

  return reversed === str ? true : false;
}

//loop
function palindrome1(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed === str ? true : false;
}

//alternative not ideal solution
function palindrome2(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

module.exports = { palindrome, palindrome1, palindrome2 };
