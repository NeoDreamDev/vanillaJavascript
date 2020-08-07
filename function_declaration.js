// function sayHello() {
//   console.log("--------------");
//   console.log("whats good");
//   console.log("--------------");
// }

// sayHello();

// let a = sayHello;
// a();
// a();
// a();
//  RESULTS
//  $ node function_declaration
//  --------------
//  whats good
//  --------------
//  --------------
//  whats good
//  --------------
//  --------------
//  whats good
//  --------------

// function sayHello(name) {
//   console.log("--------------");
//   console.log("whats good " + name + "!");
//   console.log("--------------");
// }

// sayHello("tracy");
// sayHello("dashaun");
// sayHello("trell");
//  RESULTS
//  $ node function_declaration
// --------------
// whats good tracy!
// --------------
// --------------
// whats good dashaun!
// --------------
// --------------
// whats good trell!
// --------------
function calculateTax(amount) {
  let result = amount * 0.08875;
  return result; //return give you a value back
}

let tax = calculateTax(100);
console.log(tax);
//  RESULTS
// $ node function_declaration
// 8.875
