// tailTest.js

//Importing chai 
const assert = require('chai').assert;
const tail = require('../tail');

//Uses deepEqual from Chai library
describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
})

// const assertEqual = require("../assertEqual");
//const tail = require("../tail");

// Testing code
//assertEqual(tail([5, 6, 7]), 5);
//assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
