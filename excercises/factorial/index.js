// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  //code here
  if (number <= 2) {
    return number;
  }

  return findFactorialRecursive(number - 1) * number;
}

function findFactorialIterative(number) {
  let answer = 1;

  if (number <= 2) {
    return number;
  }

  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }

  return answer;
}

module.exports = { findFactorialRecursive, findFactorialIterative };
