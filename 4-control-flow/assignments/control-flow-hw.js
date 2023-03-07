//1. Write a statement that checks if 2 and 'two' are equal
const twoWord = "two";
const twoNum = 2;
const twoEquality = twoWord === twoNum;

console.log(`Are two and 2 equal? ${twoEquality}`);
//2. Write a statement that checks if '2' and 2 are loosely equal
const twoStr = "2";
const twoLooseEquality = twoStr == twoNum;

console.log(`Are 2 and '2' loosely equal? ${twoLooseEquality}`);
//3. Write a statement that checks if 14 and '14' are strictly equal
const fourteenNum = 14;
const foutreenStr = "14";
const fourteenEquality = fourteenNum === foutreenStr;

console.log(`Are 14 and '14' strictly equal? ${fourteenEquality}`);
//4. Write a statement that checks if 10 is greater than -100
const ten = 10;
const negNum = -100;
const numGreater = ten > negNum;

console.log(`Is 10 greater than -100 ? ${numGreater}`);
//5. Write a statement that checks if 4 is strictly equal to the rounded value of 4.4
const four = 4;
const roundedfour = Math.round(4.4);
const equalFours = four === roundedfour;

console.log(`Is 4 strictly equal to 4.4 rounded? ${equalFours}`);
//6. Write a statement that checks if 10 is greater than or equal to 9.1 rounded up
const nineRounded = Math.ceil(9.1);
const tenEquality = ten >= nineRounded;

console.log(tenEquality);
//7. Write a statement that checks if 10 is greater than 2 and 3 is greater than 4
const three = 3;
let tenStatement = ten > three && three > four;

console.log(tenStatement);
// 7.a Without changing any of the numbers, or their order. How do we make this print true?
tenStatement = ten > three && three < four;

//8. Pick a number between 1-20 and assign it to a variable
// This is the number of watermelons you purchased.
//
const numOfWM = Math.floor(Math.random() * (20 - 1) + 1);

// If your number of watermelons is 1 or 2, console.log 'Looks like you like watermelon'
// If your number of watermelons is more than 2, console.log 'Thats a lot of watermelon'
// If your number of watermelons is more than 5, print, 'Thats too many watermelon!'
// If your number of watermelons is more than 10, print, 'You must be CRAZY for watermelon!'
// If your number of watermelons is more than 15, print, 'Did you have a coupon?'

if (numOfWM === 1 || numOfWM === 2) {
  console.log("Looks like you like watermelon");
} else if (numOfWM > 2 && numOfWM <= 5) {
  console.log("Thats a lot of watermelon");
} else if (numOfWM > 5 && numOfWM <= 10) {
  console.log("Thats too many watermelon!");
} else if (numOfWM > 10 && numOfWM <= 15) {
  console.log("You must be CRAZY for watermelon!");
} else {
  console.log("Did you have a coupon?");
}

// //9. Create a variable that represents your current hunger on a level of 1-10
//   // Using a ternary, if your hunger is greater than 6 print, 'Time to eat!'
//   // Otherwise print. "I'm not hungry"

const hungerLevel = 7;
const hungerStatement =
  hungerLevel > 6 ? console.log("Time to eat") : console.log("I'm not hungry");
// 10. Think of an Magic-8 Ball
// Write a switch statement that works the same way.
// When you run this file you should
// Generate a random number
// And get an out put from your switch statement?
// Ex:
// I update a question variable to say "Will I win the lottery?"
// I run node <FILENAME>
// The console prints out:
// Will I win the lottery? Not Likely.

function magicEightBall(question) {
  const randomNum = Math.ceil(Math.random() * 4);
  let answer = "";

  if (typeof question === "string") {
    answer = question.split(" ")
    for (let i = 0; i < answer.length; i++) {
      if (answer[i] === "I") {
        answer[i] = "you"
      }
    }
    answer = answer.join(" ")
    switch (randomNum) {
      case 1:
        console.log(`${answer}: Not Likely`);
        break;
      case 2:
        console.log(`${answer}: IDK maybe`);
        break;
      case 3:
        console.log(`${answer}: Most likely`);
        break;
      case 4:
        console.log(`${answer}: For sure happening`);
        break;
    }
  }
}

magicEightBall("Will I win the lottery?")
// BONUS:
// On the prior example, try and have the answer print like someone is speaking to you.

// Ex:
//Input:  Will I win the lottery?
//Output: Will you win the lottery? Not likely. <- Notice I has been programmatically changed to you

// Ex2:
// Input: Will I get a new pet this year?
// Output: Will you get a pet this year? It is certain.

// Try and handle many edge cases - can we put in any question and have it spit out a gramatically correct response?
