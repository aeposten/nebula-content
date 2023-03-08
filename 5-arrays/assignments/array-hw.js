// 1.   Create an array that contains two of your favorite things to do
const favThings = ["read", "color with Helmi"];

console.log(favThings);

// 2.   Using an array method, add another thing you like to do to that list
favThings.push("walk my dog");

console.log(favThings);

// 3.   Reverse the order of the array (remember, if needed use MDN)
favThings.reverse();

console.log(favThings);

//      Use this array for questions 4-11: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const daysArray = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// 4.   log the length of the array
const daysLength = daysArray.length;

console.log(daysLength);

// 5.   log the 4th element in the array
const fourthElement = daysArray[3];

console.log(fourthElement);

// 6.   Remove the first element in the array. Log the new array and the element removed from the array
const removed = daysArray.shift();

console.log(removed, daysArray);

// 7.   Put 'Sunday' back at the beginning of the array and log the new array
daysArray.unshift(removed);

console.log(daysArray);

// 8.   Remove the last element in the array. Log the new array and log the element removed
const lastRemoved = daysArray.pop();

console.log(lastRemoved, daysArray);

// 9.   Add 'Saturday' back to the end of the array and log the new array
daysArray.push(lastRemoved);

console.log(daysArray);

//10.   Replace 'Thursday' with 'Friday Junior'
daysArray[daysArray.indexOf("Thursday")] = "Friday Junior";

console.log(daysArray);

//11.   Extract your favorite day from the array and log the string: 'My favorite day of the week is (day)'
console.log(`My favorite day is ${daysArray[daysArray.indexOf("Saturday")]}`)

//12.   Combine these two arrays together
let phone = ["iphone", "android"];
let laptop = ["MacBook", "HP", "Dell"];

const expensveItems = phone.concat(laptop);

console.log(expensveItems);

//13.   Write a line of code to test if something is an array or not
const isItArray = (Array.isArray(expensveItems));

console.log(isItArray);