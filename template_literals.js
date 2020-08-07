// let name = "salaam";
// console.log(`hey ${name}`);

// let sentence =
//   "this is really a convenience. you probably      will never want to do something quite like this. you might choose to put long           passages of text into an external file and load it in somehow";
// console.log(sentence);

function getReasonCount() {
  return 2;
}

let interpolation = `give me ${
  getReasonCount() == 1 ? "one good reason" : "a few reasons"
} to try this.`;

console.log(interpolation);
