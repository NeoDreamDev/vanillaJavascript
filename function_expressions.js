// setTimeout(function() {
//   console.log("I waited 20 seconds");
// }, 20000);

// let counter = 0;
// function timeout() {
//   setTimeout(function() {
//     console.log("wassup " + counter++);
//     timeout();
//   }, 1000);
// }
// timeout();
// //  ctrl + c to stop console

(function() {
  console.log("immediately invoked function expression or (IIFE)");
})();
//  RESULTS
//  $ node function_expressions
// immediately invoked function expression or (IIFE)
