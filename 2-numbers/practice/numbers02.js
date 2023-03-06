// For these questions use the Math methods that JavaScript includes
// All Math methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

const e = require("express");

// find the square root of 25
const sqrt = Math.sqrt(25);
console.log(`The square root of 25 is ${sqrt}`);
// find the value of 3 to the power of 5
const pow = Math.pow(3, 5);
console.log(`3 to the power of 5 is ${pow}`);
// find the value of 7.4 rounded
const round = Math.round(7.4);
console.log(`7.4 rounded is ${round}`);
// find the rounded-up value of 7.4
const ceil = Math.ceil(7.4);
console.log(`7.4 rounded up is ${ceil}`);
// find the absoloute value of -13
const abs = Math.abs(-13);
console.log(`The absolute value of -13 is ${abs}`);
// find the minimum value in a set of numbers: 12,13,14,15,2,-1
const findMin = Math.min(12, 13, 14, 15, 2, -1);
console.log(`The minimum is ${findMin}`);
// find the maximum value in a set of numbers: 12,13,14,15,2,-1
const findMax = Math.max(12, 13, 14, 15, 2, -1);
console.log(`The maximum is ${findMax}`);
// create a random number
const randomNum = Math.random(72);
console.log(`Random number between 0 and 72: ${randomNum}`);
// Create a random number between 0-10
const zeroToTen = Math.random(11);
console.log(`Random number between zero and 10 ${zeroToTen}`);
