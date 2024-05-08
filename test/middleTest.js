// middleTest.js

const assertEqual = require("../assertEqual");
const middle = require("../middle");

// Testing code
assertEqual(middle([5, 6, 7]), 6);
assertEqual(middle(["Hello", "Lighthouse", "Labs"]), "Lighthouse");