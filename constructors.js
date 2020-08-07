import { callbackify } from "util";

// let car = {
//     make: 'bmw',
//     model: '745li',
//     year: 2010
// };

// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }

// let myCar = new Car("bmw", "745li", 2010);

// console.log(myCar);
// $ node constructors
// Car { make: 'bmw', model: '745li', year: 2010 }

// the new keyword in front of any function that makes it a constructor
// it creates a new empty object
// this is bound to the new empty object

function myFunction() {
  console.log("i am a simple function");
}

var myFunction = new myFunction();

console.log(typeof myFunction);

// cant do anything with this particular object
// its certainly not a function
// reference anymore!
// myFunction();
