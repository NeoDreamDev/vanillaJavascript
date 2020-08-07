// let a = 7;
// let b = "6";
// let c = a + b;
// console.log("Answer: " + c);
//  RESULT
// $ node coercion
// Answer: 76

let a = 7;
let b = "6";
b = parseInt(b, 10);
let c = a + b;
console.log("Answer: " + c);
//  RESULT
// $ node coercion
// Answer: 13

let d = parseInt("bob", 10);
let e = isNaN(d);
console.log(d);
console.log(e);
// RESULT
// $ node coercion
// Answer: 13
// NaN
// true
