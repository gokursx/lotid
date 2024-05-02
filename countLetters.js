const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: [" ${actual}] === [" ${expected} "]`);
  } else {
    console.log(`Assertion Failed: [" ${actual}] === [" ${expected} "]`);
  }
};



//countLetters function outputs the number of times a particulat letter appears in the string parameter.
const countLetters = function(string) {
  let output = {};
  for (let letter of string) { 
    if (!output[letter]) { 
      output[letter] = 1;
    } else {
    output[letter]++; 
    }
  }
  return output;
} 

//Test cases
let result = countLetters('Deposit');
assertEqual(result['D'], 1);
assertEqual(result['e'], 1);
assertEqual(result['s'], 1);



