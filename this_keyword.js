// var car = {
//   make: "jeep",
//   model: "wrangler",
//   year: 2010,
//   getPrice: function() {
//     // perform some calculation
//     return 5000;
//   },
//   printDescription: function() {
//     console.log(this.make + " " + this.model);
//   }
// };

// car.printDescription();

// function first() {
//   return this;
// }

// console.log(first() === global);
// this is nodes gloabl Object
// because thats where the first method was called
// $ node this_keywords
// true

// function second() {
//   "use strict";

//   return this;
// }

// console.log(second() === global);
// console.log(second() === undefined);

// thiskeywords deponds on HOW a function is called

// An object can be passed as the first argument to call
// or apply and this will be bound to it

// let myObject = { value: "My object" };

// //this property is set on the global object
// global.value = "Global object";

// function third(name) {
//   // returns something different depending on how we call this method
//   return this.value + name;
// }

// console.log(third());

// // both call and apply allow you to explicitly set
// // what you want to represent 'this'. the difference
// // is in how additional arguments to the function
// // are sent

// console.log(third.call(myObject, "salaam"));
// console.log(third.apply(myObject, ["salaam"]));

function fifth() {
  console.log(this.firstName + " " + this.lastName);
}

let customer1 = {
  firstName: "Salaam",
  lastName: "Williams",
  print: fifth
};

let customer2 = {
  firstName: "Roosevelt",
  lastName: "Hill",
  print: fifth
};

customer1.print();
customer2.print();
