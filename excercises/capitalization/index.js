// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let string = str.split(" "); // extra space not a string
  let words = [];

  for (let char of string) {
    words.push(char[0].toUpperCase() + char.slice(1));
  }

  return words.join(" ");
}

function capitalize1(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

capitalize("write a function that accepts a string");

module.exports = { capitalize, capitalize1 };
