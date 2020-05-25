// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    //check if number is a multiple of 3
    //print multiples of 3
    if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      //check if number is a multiple of 3
      //print multiples of 5
      console.log("buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
      //check if number is a multiple of 3 & 5
      //print multiples of 3 & 5
      console.log("fizzbuzz");
    } else {
      //log if its none of the above
      console.log(i);
    }
  }
}

console.log(fizzBuzz(5));

module.exports = fizzBuzz;
