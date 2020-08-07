// let chickenWing = (7 * undefined) / "columbia";
// console.log(chickenWing);
// // $ node handling_errors
// // NaN

// function beforeTryCatch() {
//   let obd = undefined;
//   console.log(obd.b);
//   console.log(
//     "if the previous line of code throws an exception you'll never see this."
//   );
// }
// // beforeTryCatch();

// function afterTryCatch() {
//   try {
//     let obd = undefined;
//     console.log(odb.b);
//     console.log(
//       "if the previous line of code throws an exception you'll never see this."
//     );
//   } catch (error) {
//     console.log("i caught an exception: " + error.message);
//   } finally {
//     console.log("this will happen no matter what.");
//   }

//   console.log("my app is still running!");
// }
// afterTryCatch();
// $ node handling_errors
// NaN
// i caught an exception: odb is not defined
// this will happen no matter what.
// my app is still running!

// ***************************************************

function performCalculation(odb) {
  if (!odb.hasOwnProperty("b")) {
    throw new Error("object is missing property");
  }
  return 6;
}

function performHigherLevelOperation() {
  let odb = {};
  let value = 0;
  try {
    value = performCalculation(odb);
  } catch (error) {
    console.log(error.message);
  }

  if (value == 0) {
    //contingency
    // retry logic
  }
}

performHigherLevelOperation();
