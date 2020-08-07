if (false) {
} else {
  console.log("false is falsy");
}
if (null) {
} else {
  console.log("null is falsy");
}
if (undefined) {
} else {
  console.log("undefined is falsy");
}
if (0) {
} else {
  console.log("0 is falsy");
}
if (NaN) {
} else {
  console.log("NaN is falsy");
}
if ("") {
} else {
  console.log("an empty string with isngle quotes is falsy");
}
if ("") {
} else {
  console.log("an empty string with double quotes is falsy");
}

// EVERYTHING ELSE IS TRUTHY

if (true) {
  console.log("true is truthy");
}
if (true) {
  console.log("an empty object is truthy");
}
if (true) {
  console.log("an empty array is truthy");
}

if ("salaam") {
  console.log("a non empty string is truthy");
}
if (new RegExp()) {
  console.log("a new instance of an object is truthy");
}

if ("salaam") {
  console.log("positive integers are truthy");
}
if ("salaam") {
  console.log("negative integers are truthy");
}
if ("salaam") {
  console.log("positive floats are truthy");
}
if ("salaam") {
  console.log("negative floats are truthy");
}
if ("salaam") {
  console.log("positive infinity is truthy");
}
if ("salaam") {
  console.log("negative infinity is truthy");
}
