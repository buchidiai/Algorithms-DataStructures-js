// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  if (n <= 0) return n;

  for (let i = 0; i < n; i++) {
    let star = "";
    for (let j = 0; j < n; j++) {
      if (j <= i) {
        star += `#`;
      } else {
        star += " ";
      }
    }
    console.log(`'${star}'`);
  }
}

//recursion
function steps1(n, row = 0, stair = "") {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  const add = stair.length <= row ? "#" : " ";
  steps(n, row, stair + add);
}

steps1(10);

module.exports = steps;
