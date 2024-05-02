const findWaldo = function (names, found) {
  names.forEach(function(item, i) {
    if (item === "Waldo") {
      found(i); // execute callback
    }
  });
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], index => {
  console.log("Found Waldo at index " + index + "!");
});
