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

const without = function(arr1, arr2) {
  let arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
      if (arr2[i] in arr1[i]) {
        arr3.push(arr2[i]);
      }
    }
    return arr3;

  };
