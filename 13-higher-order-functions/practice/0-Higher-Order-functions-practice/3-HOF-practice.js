// .map() Practice

/* Question 1
Using .map() create a new array that doubles all the numbers in a given array */
const numbers = [ 1, 2, 3, 4, 5 ]

const doubled = numbers.map((number) => number * 2);

// console.log(doubled);

/* Question 2
Using .map() create a new array that halves all numbers in a given array */
const halved = numbers.map((number) => number / 2);

// console.log(halved);

/* Question 3
Using .map() create a new array that squares all of the numbers in a given array */
const squared = numbers.map((number) => number ** 2);

// console.log(squared);

/* Question 4
Using .map() create a new array of all capital strings from an array of lower case strings */
const lowerCase = ['hello', 'world', 'how', 'are', 'you']

const upperCase = lowerCase.map((word) => word.toUpperCase());

// console.log(upperCase);

/* Question 5
Using .map() create a new array of greeting sentences from an array of given people
  Expected output:
    ['Hello Pamela', 'Hello Michael', 'Hello Angela'] */
const people = ['Pamela', 'Michael', 'Angela']

const helloPeople = people.map((person) => `Hello ${person}`)

console.log(helloPeople);