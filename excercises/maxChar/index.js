// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let hash = {};
  let i = 0;
  let max = 0;
  let maxChar = "";

  while (i < str.length) {
    if (hash[str[i]] !== undefined) {
      hash[str[i]]++;
    } else {
      hash[str[i]] = 1;
    }
    i++;
  }

  for (char in hash) {
    if (hash[char] > max) {
      max = hash[char];
      maxChar = char;
    }
  }
  return maxChar;
}

maxChar("abcccggttyytccccddb");
module.exports = maxChar;
