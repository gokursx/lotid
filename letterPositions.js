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
      if(results[letter]){
        results[letter].push(i)
      } 
      else{
        results[letter] = [i]
      }
    i++
  }
  return results;
};

// Test Cases
assertEqual(letterPositions("Deposit"){
  d: [0],
  e: [1],
  p: [2],
  o: [3],
  s: [4],
  i: [5],
  t: [6]
});