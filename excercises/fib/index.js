// function fib(num) {
//   console.log(num, "1st so");

//   if (num <= 1) return 1;

//   return fib(num - 1) + fib(num - 2);
// }

// // let fibby = fib(25);

// // console.log(fibby);

// function fibonacci(num) {
//   console.log("start");
//   console.log("a: " + a, "b: " + b, "temp: " + temp, "num: " + num);
//   var a = 1,
//     b = 0,
//     temp;

//   while (num >= 0) {
//     console.log("while");
//     console.log("a: " + a, "b: " + b, "temp: " + temp, "num: " + num);

//     temp = a;
//     a = a + b;
//     b = temp;
//     num--;
//   }

//   console.log(b);
//   return b;
// }

// function fibonacci(number) {

//     var previous_first = 0, previous_second = 1, next = 1;

//     for(var i = 2; i <= number; i++) {
//         next = previous_first + previous_second;
//         previous_first = previous_second;
//         previous_second = next;
//     }
//     return next;
// };

// fibonacci(5);
// // console.log(fibby);

// function fib(n) {
//   const result = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     const a = result[i - 1];
//     const b = result[i - 2];

//     result.push(a + b);
//   }

//   return result[n];
// }
