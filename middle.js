// TEST/ASSERTION FUNCTIONS
const eqArrays = function(arr1, arr2) {
  if (arr1 === arr2) {
    console.log(true);
  } else {
    console.log(false);
  }
};

const assertArraysEqual = function(arr1, arr2) {
  if (arr1 === arr2) {
    console.log("Arrays are equal");
  } else {
    console.log("Arrays are not equal");
  }
};

// ACTUAL FUNCTION
const middle = function(array) {
  let i = 0;
  let arr1 = [];
  if (array.length <= 2) {
    return arr1;
  } else if (array.length % 2 == 1) {
    arr1 += array[(i+1)/2];
    return arr1;
  } else if (array.length % 2 == 0) {
    arr1.push(array[i/2]);
    arr1.push(array[(i+2)+1]);
    return arr1;
  }
}

// TEST CODE
// ...
console.log(middle([2, 3, 4]));