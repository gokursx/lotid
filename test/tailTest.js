// tailTest.js

const assertEqual = require("../assertEqual");
const tail = require("../tail");

// Testing code
assertEqual(tail([5, 6, 7]), 5);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
