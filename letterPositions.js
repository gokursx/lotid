const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  for (const letter of sentence) {
    // inside the loop:
   
    if (results[letter]) {
      results[letter] += sentence[letter];
    } else {
      results[letter] = sentence[letter];
    }
  }
  return results;
};
