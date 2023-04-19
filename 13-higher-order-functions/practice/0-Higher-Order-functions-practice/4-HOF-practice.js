// .forEach Practice

/* Question 1
Given an array of numbers, log each number to the console. */

/* Question 2
Given an array of people, log a greeting to the console for each person. */

/* Question 3
Given an array of mixed values, log whether or not each value is undefined. */
const mixed = [1, "hello", undefined, true, null, false, "world", undefined];
// mixed.forEach((item => console.log(item === undefined)))

/* Question 4
Given an array of strings, log the vowel count for each string. */
const arrayOfStrings = [
  "Hi!",
  "🎶",
  "It's",
  "a",
  "beautiful",
  "day",
  "in",
  "the",
  "neighborhood",
  "🎶",
];

function logVowelCount(word) {
  const vowels = "aeiou";
  word = word.toLowerCase();
  let count = 0;
  for (letter in word) {
    if (vowels.includes(word[letter])) {
      count++;
    }
  }
  console.log(count);
}

// arrayOfStrings.forEach((string) => logVowelCount(string));

/* Question 5
Given an array of numbers, double each of them and log them to the console */
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => console.log(number * 2))