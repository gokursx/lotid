const assertArraysEqual = function(arr1, arr2) {
  if (arr1 === arr2) {
    console.log("Arrays are equal");
  } else {
    console.log("Arrays are not equal");
  }
};

assertArraysEqual ([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual ([1, 2, 3], [3, 2, 1]); // => false

assertArraysEqual (["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual (["1", "2", "3"], ["1", "2", 3]); // => false

module.exports = assertArraysEqual;
