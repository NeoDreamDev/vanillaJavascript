let pattern = /xyz/;
// console.log(pattern);
// console.log(typeof pattern);

let value = "this is xyz a test.";
// console.log(pattern.test(value));

// console.log(value.replace(pattern, "just"));
// $ node regex
//  this is just a test.

console.log(value.match(pattern));
var match = value.match(pattern);
console.log(match.index);

// if you need help with regex just google what you need and regex and there will usually be a link from stack overflow or mozilla with how to do the code
