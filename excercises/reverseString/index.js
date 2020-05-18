// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

//solution 1

// turn string into an array
// call reverse method on array
// join array back to string

//solution 1 ->   return str.split("").reverse().join("");

//solution 2

// use (for of) to loop through character
// concat each character to string

// solution 2 ->
//   let newString = "";
//   for (let char of str) {
//   return  newString = char + newString;
//   }

//solution 3

// push chracters into a array backwards
//and join them  back together

// solution 3 ->
//  let reverse = [];

//  for (let i = str.length - 1; i >= 0; i--) {
//    reverse.push(str[i]);
//  }

//  return reverse.join("");

module.exports = reverse;
