/* Question 1
Write a higher-order function which takes in two numbers and performs a calculation with them
Write the callback functions separately
  Example:
    calculate(multiply, 2,4) => 8
    calculate(subtract, 2,4) => -2
    calculate(exponent, 2,4) => 16   */

function multiply(num1, num2) {
  return num1 * num2;
}

function add(num1, num2) {
  return num1 + num2;
}

function calculate(operator, num1, num2) {
  return operator(num1, num2);
}

/* Question 2
Write a function that takes in any number of numbers and performs calculations on them
console.log(arguments) inside of a function to visualize your arguments
Write the callback functions separately
  Example:
    calculateAll(multiply, 1,4,1,231,5) => 4620
    calculateAll(subtract, 2,4,5,7) => -14
*/

// function calculateAll(operator, arr) {
//   let total = 0;
//   for (let i = 0; i < arr.lenght; i++) {
//     total = operator(total, arr[i]);
//   }
//   return total;
// }

function calculateAll(operation, array) {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total = operation(total, array[i]);
  }

  return total;
}


console.log(calculateAll(add, [2,4,5,7]))

/* Question 3
Write a function that takes in a string and performs some form of manipulation on it
  Example:
    modify(yeller, 'I need a nap') => I NEED A NAP!!!
    modify(sarcastic, 'I really like running') => I ReAlLy lIkE RuNnIng
    modify(code, 'There is no cake') => Th-r- -s n- c-k-
*/

function yeller(string) {
  return string.toUpperCase();
}

function sarcastic(string) {
  let newStr = "";

  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      newStr += string[i].toUpperCase();
    } else {
      newStr += string[i].toLowerCase();
    }
  }
  return newStr;
}

function code(string) {
  const vowels = "aeiou"
  let newStr = "";

  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      newStr += "-";
    } else {
      newStr += string[i];
    }
  }
  return newStr;
} 

function modify(manipulation, string) {
  return manipulation(string);
}

// console.log(modify(yeller, "I need a nap"));
// console.log(modify(sarcastic, "I really like running"));
// console.log(modify(code, 'There is no cake'))

/* Question 4
Write a function that takes in an array filled with different data types and returns each data type
  Examples:
    oneType(strings, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) 
    =>
    ['I love coding, 'goosfraba']

    oneType(arrays, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) 
    =>
    ['Nested Array!']

    oneType(nums, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) 
    =>
    [10, Infinity]
*/

function checkType(item) {
  let type = null;
  if (Array.isArray(item)) {
    type = "array";
  } else {
    type = typeof item
  } return type
}

function oneType(type, arr) {
  let typeArray = [];

  for (let i=0; i < arr.length; i++) {
    if (type === checkType(arr[i])) {
      typeArray.push(arr[i])
    }
  }
  return typeArray
}

console.log(oneType("number", ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]))
