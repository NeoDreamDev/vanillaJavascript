let car = {
  make: "jeep ", //property: value
  model: "wrangler",
  year: 2010,
  getPrice: function() {
    // preform some calc
    return 5000;
  },
  printDescription: function() {
    console.log(this.make + "" + this.model);
  }
};
car.printDescription();
console.log(car.year); // USE THIS

// Ways of activating individual property DONT DO USE UNLESS ADVANCED
// console.log(car["year"]);
// console.log(car[1]);

// you can add properties with the '.'
// var anotherCar = {};
// anotherCar.whatever = "salaam";
// console.log(anotherCar.whatever);

// var a = {
//   myProperty: { b: "hi" }
// };
// console.log(a.myProperty.b);
// RESULTS
// $ node object_literals
// hi

// var c = {
//   //an object that has a property that contains an array of objects that have a property
//   something: [{ d: "this" }, { e: "can" }, { f: "get" }, { g: "crazy" }]
// };

let carLot = [
  { year: 2018, make: "ford", model: "fusion" },
  { year: 2016, make: "toyota", model: "camry" },
  { year: 2012, make: "Audi", model: "A6" }
];

let contacts = {
  customers: [
    {
      firstName: "michael",
      lastName: "scott",
      phoneNumber: ["(917) 983-7519"]
    },
    {
      firstName: "jim",
      lastName: "halpert",
      phoneNumber: ["(646) 234-2342", "(718) 413-4193"]
    },
    {
      firstName: "pamela",
      lastName: "halpert",
      phoneNumber: ["(646) 923-2341", "(929) 968-6968"]
    }
  ],
  employees: [
    {
      firstName: "kevin",
      lastName: "malone",
      phoneNumber: ["(646) 111-2211", "(546) 909-9898"]
    },
    {
      firstName: "stanley",
      lastName: "hudson",
      phoneNumber: ["(718) 753-7521"]
    },
    { firstName: "jan ", lastName: "levinson", phoneNumber: ["(726)284-1283"] }
  ]
};

console.log(carLot);
