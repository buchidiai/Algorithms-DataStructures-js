// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//iterative
function vowels(str) {
  let count = 0;
  let checker = ["a", "e", "i", "o", "u"];

  for (const word of str.toLowerCase().split("")) {
    if (checker.includes(word)) {
      count++;
    }
  }

  return console.log(count);
}

//regex
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);

  matches ? matches.length : 0;
  return console.log(matches);
}

vowels("Hi There!");

module.exports = vowels;
