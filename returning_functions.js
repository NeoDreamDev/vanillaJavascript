// DONT DO THIS
// var myVariables = "I am the global scope";
// DONT DO THIS
// var myFunction = function() {
//   console.log("me too!");
// };

function one() {
  return "one";
}

// let value = one();
// console.log(value);
// // console.log(one());

// let value = one;
// // console.log(typeof value);
// // console.log(typeof one);
// console.log(value());

// String
// Number
// boolean
// undefined
// function

// function two() {
//   return function() {
//     console.log("two");
//   };
// }

// let myFunction = two();
// myFunction();
// RESULTS
// $ node returning_functions
// two

// function three() {
//   return function() {
//     return "three";
//   };
// }

// console.log(three()());
// RESULTS
// $ node returning_functions
// three
