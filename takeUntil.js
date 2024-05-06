const takeUntil = function(array, callback) {
<<<<<<< HEAD
  // ...
}

=======
  let arr1 = [];
  for (let item of array) {
    if (!callback(item)) {
      arr1.push(item);
    }
    return arr1;
  } 
};
>>>>>>> 42905b198bbb14bc0e367bd793b258152077dd2e

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
<<<<<<< HEAD
console.log(results2);
=======
console.log(results2);
>>>>>>> 42905b198bbb14bc0e367bd793b258152077dd2e
