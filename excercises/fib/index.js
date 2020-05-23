function fibRecursion(num) {
  if (num <= 1) return num;

  return fibRecursion(num - 1) + fibRecursion(num - 2);
}

function fibIterative(n) {
  const result = [0, 1];

  for (let i = 2; i <= n; i++) {
    const a = result[i - 1];
    const b = result[i - 2];

    result.push(a + b);
  }

  return result[n];
}

console.log(fibRecursion(6));
console.log(fibIterative(6));

module.exports = { fibRecursion, fibIterative };
