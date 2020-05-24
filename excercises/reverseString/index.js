// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse1(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

function reverse2(str) {
  return str.split("").reverse().join("");
}

function reverse3(str) {
  let newString = "";
  for (let char of str) {
    return (newString = char + newString);
  }
}

function reverse4(str) {
  let reverse = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reverse.push(str[i]);
  }
  return reverse.join("");
}

function reverse5(str) {
  return str.split("").reverse().join("");
}

function reverse6(str) {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
  /*
  First Part of the recursion method
You need to remember that you won’t have just one call, you’ll have several nested calls

Each call: str === "?"        	                  reverseString(str.subst(1))     + str.charAt(0)
1st call – reverseString("Hello")   will return   reverseString("ello")           + "h"
2nd call – reverseString("ello")    will return   reverseString("llo")            + "e"
3rd call – reverseString("llo")     will return   reverseString("lo")             + "l"
4th call – reverseString("lo")      will return   reverseString("o")              + "l"
5th call – reverseString("o")       will return   reverseString("")               + "o"

Second part of the recursion method
The method hits the if condition and the most highly nested call returns immediately

5th call will return reverseString("") + "o" = "o"
4th call will return reverseString("o") + "l" = "o" + "l"
3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h" 
*/
}

module.exports = { reverse1, reverse2, reverse3, reverse4, reverse5, reverse6 };
