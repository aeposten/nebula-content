// 1. Write a function that takes in 1 number and returns that number + 1
function addOne(number) {
  const plusOne = number + 1;

  return plusOne;
}

// console.log(addOne(7));

// 2. Write a function that takes in a name and outputs a sentence saying goodnight to that name.
function sayGoodnight(name) {
  const goodNight = `Goodnight ${name}!`;

  return goodNight;
}

// console.log(sayGoodnight("John Boy"));

// 3. Write a function that takes in an array of numbers. If that array includes the number 0 return 'This array has the number zero in it'

function includesZero(numArray) {
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] === 0) {
      return "This array contains the number 0";
      break;
    } else {
      return "This array does not contain the number 0";
    }
  }
}

// console.log(includesZero([1, 2, 3, 7]));

// 4. Write a function that console logs 'hello world' 10 times to the console.
function logHelloWorld() {
    for (let i = 0; i < 10; i++) {
        console.log("Hello World!")
    }
}

logHelloWorld();
// 5. Write the prior function utilizing a 'fat arrow' function
