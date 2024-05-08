const eqArrays = function(arr1, arr2) {
  if (arr1 === arr2) {
    console.log(true);
  } else {
    console.log(false);
  }
};

eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

module.exports = eqArrays;
