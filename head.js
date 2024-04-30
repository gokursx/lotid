
// FUNCTION IMPLEMENTATION
const assertEqual = function(array) {
  if (actual === expected) {
    console.log(`Assertion Passed: [" ${actual}] === [" ${expected} "]`);
  } else {
    console.log(`Assertion Failed: [" ${actual}] === [" ${expected} "]`);
  }
};
let array = [];
const head = function(array) {
  console.log(array[0]);
}

// TEST CODE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");