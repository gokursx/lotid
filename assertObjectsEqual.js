const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  
};

const eqObjects = function (object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (keys1.length == keys2.length) {
    keys1.forEach(item => {
      if (keys2.includes(item) && object1[item] === object2[item]) {
        output = true;
      } else {
        output = false;
      }
    });
  }
  return output;
};

//Test cases for inspect(actual) and assertObjectsEqual

console.log(`Example label: ${inspect(actual)}`);

assertObjectsEqual({a: '1', b: 2}, {b: 2, a: '1'});
