const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: [" ${actual}] === [" ${expected} "]`);
  } else {
    console.log(`Assertion Failed: [" ${actual}] === [" ${expected} "]`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  let output = {};
  for (let item of allItems) {
    if (itemsToCount[item]) {
      if (output[item]) {
        output[item] += 1;
      } else {
        output[item] = 1;
      }
    }
  }
  return output;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

//countLetters function outputs the number of times a particulat letter appears in the string parameter.
const countLetters = function(string) {
  let output = {};
  for (let letter of string) { 
    if (!output[letter]) { 
      output[letter] = 0;
    } else {
    output[letter]++; 
    }
  }
  return output;
} 

//Test cases
countLetters(Deposit);