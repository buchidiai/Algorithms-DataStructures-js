// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function anagrams1(stringA, stringB) {
  aStringMap = buildCharMap(stringA);
  bStringMap = buildCharMap(stringB);

  //check if the length of the keys are not the same
  //if so return false
  if (Object.keys(aStringMap).length !== Object.keys(bStringMap).length) {
    return false;
  }

  //theobjects length are the same
  //check if the keys are not the same
  //if so return false
  for (const key in aStringMap) {
    if (aStringMap.hasOwnProperty(key) !== bStringMap.hasOwnProperty(key)) {
      return false;
    }
  }
  //return true because it matches
  return true;
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

function buildCharMap(str) {
  let charMap = {};

  for (const item of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[item] = charMap[item] + 1 || 1;
  }

  return charMap;
}

console.log(anagrams("rail safety", "fairy tales"));
console.log(anagrams1("rail safety", "fairy tales"));
module.exports = anagrams;
