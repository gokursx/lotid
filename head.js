
// FUNCTION IMPLEMENTATION
const assertEqual = require("./assertEqual");

let array = [];
const head = function(array) {
  return (array[0]);
}

// TEST CODE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = head;