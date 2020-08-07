let names = ["salaam", "roosy", "ant", "sanad"];
let others = ["maman", "ashley", "kurt", "toby"];

let lost = [4, 5, 15, 16, 23, 42];
let fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

var combine = lost.concat(fibonacci);
// console.log(combine);
// $ node array_methods
// [ 4, 5, 15, 16, 23, 42, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]

//********************************************* */

// console.log(fibonacci.join("~"));
// $ node array_methods
// 1~1~2~3~5~8~13~21~34~55

//********************************************* */

// push, pop
// a pop that works on the front end.
// console.log(lost.shift());
// console.log(lost);

// lost.unshift(2, 3, 4, 5);
// console.log(lost);
// 4
// [ 5, 15, 16, 23, 42 ]
// [ 2, 3, 4, 5, 5, 15, 16, 23, 42 ]

//********************************************* */

// console.log(names); //original
// console.log(names.reverse()); //shows reverse of original
// console.log(names.sort()); //sorts original by alaphabet or numeric
// $ node array_methods
// [ 'salaam', 'roosy', 'ant', 'sanad' ]
// [ 'sanad', 'ant', 'roosy', 'salaam' ]
// [ 'ant', 'roosy', 'salaam', 'sanad' ]

//********************************************* */

// console.log(others.indexOf("maman"));
// $ node array_methods
// 0

//********************************************* */

// console.log(combine);
// console.log(combine.lastIndexOf(1));
// shows you the last occurance of a specific value, in this case, the last occurence of '1', 0 based

//********************************************* */

// MAP

var filtered = combine.filter(x => {
  if (x <= 15) return x;
});
// console.log(filtered);
// only shows numbers that are less than or equal to 15
// $ node array_methods
// [ 4, 5, 15, 1, 1, 2, 3, 5, 8, 13 ]

//********************************************* */

// names.forEach(name => console.log(`wassup ${name}`));
// $ node array_methods
// wassup salaam
// wassup roosy
// wassup ant
// wassup sanad

//********************************************* */

// console.log(filtered.every(num => num < 10));
// console.log(filtered.every(num => num < 16));
// $ node array_methods
// false
// true

//********************************************* */

// console.log(fibonacci.some(num => num > 50));
// console.log(fibonacci.some(num => num > 100));
// $ node array_methods
// true
// false

//********************************************* */
