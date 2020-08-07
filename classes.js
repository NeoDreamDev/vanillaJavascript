// declaration
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  print() {
    console.log(`${this.make} ${this.model} (${this.year})`);
  }
}

let myCar = new Car("jeep", "wrangler", 2010);
myCar.print();

// $ node classes
// jeep wrangler (2010)

// expression
// let car = class {
// }

class SportsCar extends Car {
  revEngine() {
    console.log("vrroom goes the " + this.model);
  }
}
let mySportsCar = new SportsCar("dodge", "viper", 2007);
mySportsCar.print();
mySportsCar.revEngine();
