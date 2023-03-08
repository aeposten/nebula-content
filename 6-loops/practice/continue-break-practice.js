const sentence = "The quick brown fox jumpped obver the lazy dog.";
// 1.   Write a for loop that looks for the letter a
//      The loop should log the letter 'a' to the console
//      STOP immediately after finding the letter 'a'
for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] === "a") {
    console.log(sentence[i]);
    break;
  } else {
    console.log("Not a");
  }
}

// 2.   Write a for loop that looks for a number
//      The loop should log 'at index _ there is the number _' to the console
//      Stop immediately after finding that number
//      ex: Input: ['a','b','c', 100,'e']
//          Output: 'at index 3 there is the number 100'

const inputArr = ["a", "b", "c", 100, "e"];

for (let i = 0; i < inputArr.length; i++) {
  if (typeof inputArr[i] === "number") {
    console.log(`at index ${i} there is the number ${inputArr[i]}`);
    break;
  } else {
    console.log("Not a number");
  }
}

// 3.   Using the continue keyword loop over an array of numbers & strings
//      If the current element is a number skip it
//      Otherwise add the element to an array
//      After finishing the loop log the new array to the console
const numsAndStrings = [1, 3, 5, "a", "b", "c", 22, "d", 9];
const stringsArray = [];
for (let i = 0; i < numsAndStrings.length; i++) {
  if (typeof numsAndStrings[i] === "number") {
    continue;
  } else {
    stringsArray.push(numsAndStrings[i]);
  }
}

console.log(stringsArray);
