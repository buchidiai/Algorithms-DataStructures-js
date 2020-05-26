let calculations = 0;
let calculations1 = 0;
let calculations2 = 0;

function fibRecursion(num) {
  calculations++;
  if (num <= 1) return num;

  return fibRecursion(num - 1) + fibRecursion(num - 2);
}

function fibIterative(n) {
  const result = [0, 1];

  for (let i = 2; i <= n; i++) {
    calculations1++;
    const a = result[i - 1];
    const b = result[i - 2];

    result.push(a + b);
  }

  return result[n];
}

//optimization
function fibonacciMaster() {
  //O(n)
  let cache = {};
  return function fib(n) {
    if (cache[n]) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        calculations2++;
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

//conposition
let fasterFib = fibonacciMaster();

console.log("recursion", fibRecursion(35));
console.log("iteration ", fibIterative(20));
console.log("optimized recursion", fasterFib(20));

console.log(calculations);
console.log(calculations1);
console.log(calculations2);

// module.exports = { fibRecursion, fibIterative };
