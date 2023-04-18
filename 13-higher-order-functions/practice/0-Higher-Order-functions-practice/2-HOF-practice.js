/* Question 1
Write a higher order function to manipulate numbers in an array
  Examples:
    changeNums([1,2,3,4,5], doubler) => [2,4,6,8,10]
    changeNums([1,2,3,4,5], halves) => [.5,1,1.5,2,2.5]
    changeNums([1,2,3,4,5], pow) => [1,4,9,16,25]            */

const { count } = require("console");

function doubler(num) {
  return num * 2;
}

function halves(num) {
  return num / 2;
}

function pow(num) {
  return num ** 2;
}

function changeNums(arr, manipulation) {
  let manipulated = [];
  for (let i = 0; i < arr.length; i++) {
    manipulated.push(manipulation(arr[i]));
  }
  return manipulated;
}

// console.log(changeNums([1, 2, 3, 4, 5], doubler));
// console.log(changeNums([1, 2, 3, 4, 5], halves));
// console.log(changeNums([1, 2, 3, 4, 5], pow));
/* Question 2
Write a higher order function that calculates some features of a string
    Example:
    stringInfo(length, 'Howdy Partner!') => 14
    stringInfo(vowels, 'Howdy Partner!') => 3
    stringInfo(capitals, 'Howdy Partner!') => 2
    stringInfo(nonLetters, 'Howdy Partner!') => 2                    */

function length(letter) {
  return true;
}

function vowels(letter) {
  const vowels = "aeiou";

  return vowels.includes(letter);
}

function capitals(letter) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  return((letter === letter.toUpperCase()) && (letters.includes(letter.toLowerCase())));
}

function nonLetters(letter) {
  const letters = "abcdefghijklmnopqrstuvwxyz";

  return !letters.includes(letter.toLowerCase());
}

function stringInfo(calculation, string) {
  let result = 0;

  for (let i = 0; i < string.length; i++) {
    if (calculation(string[i]) === true) {
      result++;
    }
  }
  return result;
}

console.log(stringInfo(length, "Howdy Partner!"));
console.log(stringInfo(vowels, "Howdy Partner!"));
console.log(stringInfo(capitals, "Howdy Partner!"));
console.log(stringInfo(nonLetters, "Howdy Partner!"));

/* Question 3
Write a higher order function that minimizes a given list of numbers into one number
    Example:
    minimizeNums(add, [2,3,5,8]) => 18                            */
