// .filter() Practice

/* Question 1
Write a function to filter an array for all the numbers greater than 5 */
const q1Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const greaterThanFive = q1Array.filter((number) => number > 5);

// console.log(greaterThanFive);

/* Question 2
Write a function to filter an array for all the even numbers */
const q2Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evens = q2Array.filter((number) => {
  return number % 2 === 0;
});

// console.log(evens)

/* Question 3
Write a function to filter an array for all the non number item */
const q3Array = [1, "a", "b", 2, {}, []];

const notNumbers = q3Array.filter((item) => typeof item !== "number");

// console.log(notNumbers);

/* Question 4
Write a function to filter an array of objects for people over the age of 21 */
const partyPeople = [
  { name: "John", age: 25 },
  { name: "Jordan", age: 18 },
  { name: "Frank", age: 50 },
  { name: "Anna", age: 12 },
];

const canDrink = partyPeople.filter((person) => person.age >= 21);

// console.log(canDrink)

/* Question 5
Write a function to filter out all letters from a string
  Hint: filter doesn't work on strings.. */
function filterLetters(string) {
  const split = string.split("");

  let letters = split.filter((character) => {
    const alpha = "abcdefghijklmnopqrstuvwxyz"
    if (alpha.includes(character.toLowerCase())) {
      return character
    }
  })
  return letters;
}

console.log(filterLetters("R2D2"))