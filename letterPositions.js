const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: [" ${actual}] === [" ${expected} "]`);
  } else {
    console.log(`Assertion Failed: [" ${actual}] === [" ${expected} "]`);
  }
};

const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  let i =0;
    for(let letter of sentence){
  if(letter !== ' '){
    if(results[letter]){
      results[letter].push(i)
    } 
    else{
      results[letter] = [i]
    }
  }
  i++
}
  return results;
};

// Test Cases
const result = letterPositions("Deposit");
assertArraysEqual(result['d'], [0]);
assertArraysEqual(result['e'], [1]);
