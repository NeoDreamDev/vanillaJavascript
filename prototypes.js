let originalCar = {
  make: "jeep",
  model: "wrangler",
  year: 2009
};

let newCar = Object.create(originalCar);

console.log(newCar.make);
newCar.make = "audi";
console.log(newCar.make);
console.log(newCar.whatever);

console.log(Object.getPrototypeOf(newCar));

let myPrototype = Object.getPrototypeOf(newCar);
console.log(myPrototype.make);
//to add a new property to a object just do ".property"
originalCar.doors = 4;
console.log(newCar.doors);

console.log(originalCar.hasOwnProperty("doors"));
console.log(newCar.hasOwnProperty("doors"));
// $ node prototypes
// jeep
// { make: 'jeep', model: 'wrangler', year: 2009 }
// jeep
// 4
// true
// false
