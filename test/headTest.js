// test/headTest.js
const assertEqual = require("../assertEqual");
const head = require("../head");


let array = [];

// TEST CODE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");