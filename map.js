const words = ["ground", "control", "to", "major", "tom"];

//Map function after refractoring
const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const assertArraysEqual = function(arr1, arr2) {
  if (arr1 === arr2) {
    console.log("Arrays are equal");
  } else {
    console.log("Arrays are not equal");
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1 === arr2) {
    console.log(true);
  } else {
    console.log(false);
  }
};

//Test case for map
const results1 = map(words, (word) => word[0]);
console.log(results1);
