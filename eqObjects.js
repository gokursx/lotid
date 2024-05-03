const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: [" ${actual}] === [" ${expected} "]`);
  } else {
    console.log(`Assertion Failed: [" ${actual}] === [" ${expected} "]`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (keys1.length == keys2.length) {
    for (let item of keys1) {
      if (!keys2.includes(item) || object1[item] !== object2[item]) {
        return false;
  }
}
return true;
  }
  return output;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject, anotherShirtObject); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject, longSleeveShirtObject); // => false
