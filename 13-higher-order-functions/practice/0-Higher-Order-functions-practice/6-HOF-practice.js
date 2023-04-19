// .reduce() Practice

/* Question 1
Write a HOF to reduce an array of numbers to all the numbers added up */
const nums = [1, 2, 3, 1054, 4, 5, 6, 7, 8, 750, 9, 10];

const sum = nums.reduce((a, b) => a + b);
// console.log(sum);
/* Question 2
Write a HOF to reduce all numbers in an array to all numbers multiplied together */

const product = nums.reduce((a, b) => a * b);

// console.log(product);

/* Question 3
Write a HOF to reduce all numbers in an array to the largest number */
const largest = nums.reduce((a, b) => {
  if (b > a) {
    return b;
  }

  return a;
  //  return Math.max(a, b);
});

// console.log(largest);

/* Question 4
Write a HOF to find the oldest person in a group */
const partyPeople = [
  { name: "John", age: 25 },
  { name: "Jordan", age: 18 },
  { name: "Frank", age: 50 },
  { name: "Anna", age: 12 },
];


const oldest = partyPeople.reduce((a, b) => {
    if (b.age > a.age) {
        return b
    }
    return a;
    //  return Math.max(a.age, b.age);
  });

  console.log(oldest)