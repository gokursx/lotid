// The second argument/parameter is expected to be a (callback) function
//Ex1: Using for loop to find the name
const findWaldo = function (names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name[i] === "Waldo") {
      found(i); // execute callback
    }
  }
};

//Ex2: For each method replaces the for loop
const findWaldo = function (names, found) {
  names.forEach(function(item, i) {
    if (item === "Waldo") {
      found(i); // execute callback
    }
  }
};

const actionWhenFound = function (i) {
  console.log("Found Waldo at index " + i + "!");
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
