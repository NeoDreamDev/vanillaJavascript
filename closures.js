function sayHello(name) {
  //
  return function() {
    console.log("wassup " + name);
  };
}

let salaam = sayHello("salaam");
let ant = sayHello("ant");
let roosy = sayHello("roosy");

salaam();
ant();
roosy();

// each closure creates its own lexical environment
// if you define a variable outside the function its available inside the function
// lexical scoping uses the location where a variable is declared within the source code
// to determine where that variable is available
