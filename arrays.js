let a = [4, 8, 15, 16, 23, 42];
let b = ["david", "trell", "mike", "tom"];

// console.log(a[0]);
// console.log(a[1]);
// console.log(a);
// RESULT
// $ node arrays
// 4
// 8
// [ 4, 8, 15, 16, 23, 42 ]

// let c = b[1] + "'s" + " favorite number is " + a[3] / 5;
// console.log(c);

a[0] = 7;
console.log(a);
//  RESULT
// $ node arrays
// trell's favorite number is 3.2
// [ 7, 8, 15, 16, 23, 42 ]

// object
// console.log(typeof a);

// let d = [4, "brady", true];
// console.log(d);
//  RESULTS
// $ node arrays
// [ 7, 8, 15, 16, 23, 42 ]
// [ 4, 'brady', true ]

// undefined
// console.log(b[4]);
//  RESULTS
// $ node arrays
// undefined

// console.log(a.length); // actual number, not zero based

// a[10] = 77;
// console.log(a);
// console.log(a.length);
//  RESULTS
//  $ node arrays
// [ 7, 8, 15, 16, 23, 42 ]
// [ 7, 8, 15, 16, 23, 42, <4 empty items>, 77 ]
// 11

a.push(77);
console.log(a);
console.log(a.length);
//  RESULTS
//  $ node arrays
// [ 7, 8, 15, 16, 23, 42 ]
// [ 7, 8, 15, 16, 23, 42, 77 ]
// 7

a.pop();
a.pop();
a.pop();
console.log(a);
console.log(a.length);
//  RESULTS
//  $ node arrays
//  [ 7, 8, 15, 16 ]
// 4
