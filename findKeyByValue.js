const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: [" ${actual}] === [" ${expected} "]`);
  } else {
    console.log(`Assertion Failed: [" ${actual}] === [" ${expected} "]`);
  }
};


const findKeyByValue = function(obj, value){
  let keys = Object.keys(bestTVShowsByGenre);//genres

  let answer;
  for (const key of keys) {//key within genres
    if (value === obj[key]) {
      answer = key;
    }
  }
  return answer
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);