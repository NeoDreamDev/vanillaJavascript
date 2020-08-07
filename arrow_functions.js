// let hi = () => {
//   console.log("wassup");
// };

// hi();
// $ node arrow_functions
// wassup

// **********************************

// let hi = name => {
//   console.log(`wassup ${name}`);
// };
// hi("salaam");
// $ node arrow_functions
// wassup salaam

// **********************************

// let add = (a, b) => {
//   return a + b;
// };
// console.log(add(7, 3));
// $ node arrow_functions
// 10

// *********************************

// let names = ["salaam", "roosy", "ant", "sanad"];
// names.map(names => {
//   console.log(`wassup ${names}!`);
// });
// $ node arrow_functions
// wassup salaam!
// wassup roosy!
// wassup ant!
// wassup sanad!

// *********************************

// let names = ["salaam", "roosy", "ant", "sanad"];
// let i = 0;
// names.map(name => {
//   i++;
//   console.log(`wassup ${name} ${1}!`);
// });
// $ node arrow_functions
// wassup salaam 1!
// wassup roosy 1!
// wassup ant 1!
// wassup sanad 1!

// *********************************

let names = ["salaam", "ant", "roosy", "sanad"];
var transformed = names.map(name => {
  return `wassup ${name}!`;
});
console.log(transformed);
