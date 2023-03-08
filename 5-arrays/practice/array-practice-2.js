// Given the following list:
// Change the element at index zero to equal itself times 10
let numArr = [1, 2, 3, 4, 5];

numArr[0] = numArr[0] * 10;

console.log(numArr);

// Add an additional element to the prior array
numArr.push(143);

console.log(numArr);

// In one line, remove the last element from the prior array and set that element to a variable called 'removedItem'
const removedItem = numArr.pop();

console.log(removedItem);

// Check if the prior array contains the number 1
//   If it does, log true, if it doesnt, log false
const doesContainOne = numArr.includes(1);

console.log(doesContainOne);

// Remove the first element from the prior array and set that element to a variable called 'removedFirstItem'
const removedFirstItem = numArr.shift();
console.log(removedFirstItem);

console.log(numArr);

// Add that item back
numArr.unshift(removedFirstItem);

console.log(numArr);

// Given the following array, sort it using an array method
let sortThis = ["dairy", "banana", "cherry", "apple", "eel"];
sortThis.sort();

console.log(sortThis);

// Now reverse the prior array
sortThis.reverse();

console.log(sortThis);

// Write a string stating your favorite 3 foods.
//  Ex: 'My favorite foods are za, pineapple, hawaiian-pizza'
const foodString = "My favorite foods are pizza, fried rice, and kale."

console.log(foodString);

// Convert the prior string into an array of words (don't worry about where punctuation lands).
//  Ex: ['My', 'favorite', 'foods', 'are', 'za,', 'pineapple,', 'hawaiian-pizza']

const foodArr = foodString.split(" ");

console.log(foodArr);

// Convert the output from the prior example back into a string, but with dashes between the words.
//  Ex: 'My-favorite-foods-are,-za,-pineapple,-hawaiian-pizza'
const backToString = foodArr.join("-");

console.log(backToString);

// Given the following array: [1,2,3,4,5,7,8,9,10]
// insert the number 6 into its logical location
const numberArray = [1,2,3,4,5,7,8,9,10];

numberArray.splice(5, 0, 6);

console.log(numberArray);

// Create two arrays and, using JavaScript join them together
const arr1 = [1, 2, 3];
const arr2 = [7, 8, 9];

const joinedArray = arr1.concat(arr2);

console.log(joinedArray);

// Create a multi-dimensional array
const multiDimensional = [["magnus", "dog"], ["gilgamesh", "cat"]];

console.log(multiDimensional);
