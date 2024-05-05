const findWaldo = function (names, found) {
  names.forEach(function(item, i) {
    if (item === "Waldo") {
      found(i); // execute callback
    }
  });
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function (i) {
  console.log("Found Waldo at index " + i + "!");
});
