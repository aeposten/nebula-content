// Declare a variable and assign it to a numeric value
// Half that value and re-assign it to the previous variable
let myVar = 12;
console.log(`Number: ${myVar}`);

myVar = 6;
console.log(`Number reassigned: ${myVar}`);

// Create two negative numbers, assign them to variables and subtract one from the other together
const neg1 = -6;
const neg2 = -12;
const difference = neg1 - neg2;

console.log(`Difference between ${neg1} and ${neg2} is ${difference}`);
// Create three numbers, assign them to variables and multiply them together
const num1 = 2;
const num2 = 4;
const num3 = 6;
const multiplied = num1 * num2 * num2;

console.log(
  `${num1} multiplied by ${num2} multiplied by ${num3} is ${multiplied}.`
);
// Create two even numbers, assign them to variables and divide one from the other
const even1 = 24;
const even2 = 12;
const dividedEven = even1 / even2;

console.log(`${even1} divided by ${even2} is ${dividedEven}.`);
// Create two odd numbers, assign them to variables and find the remainder of dividing one by the other
const odd1 = 9;
const odd2 = 3;
const dividedOdd = odd1 / odd2;

console.log(`${odd1} divided by ${odd2} is ${dividedOdd}`);
// find the minimum value in a set of numbers: 10,20,30,40,50
const posArr = [10, 20, 30, 40, 50];
const arrMin = Math.min(posArr);

console.log(`The minimum  number in ${posArr} is ${arrMin}`);
// find the maximum value in a set of numbers: -1,-2,-3,-4,-5
const negArr = [-1, -2, -3, -4, -5];
const arrMax = Math.max(negArr);

console.log(`The minimum  number in ${negArr} is ${arrMax}`);
// Create a variable and find it's remainder, if divided by 2
const myVar2 = 79;
const remainder = myVar2 % 2;

console.log(`The remainder of ${myVar2} divided by 2 is ${remainder}`);
// find the square root of 144
const squareRoot = Math.sqrt(144);

console.log(`The square root of 144 is ${squareRoot}`);
// find the value of 3 to the power of 7
const threeToSeven = Math.pow(3, 7);

console.log(`3 to the power of 7 is ${threeToSeven}`);
// find the value of 73.2 rounded
const rounded = Math.round(73.2);

console.log(`73.2 rounded is ${rounded}`);
// find the rounded-down value of 9.9
const roundedDown = Math.floor(9.9);
console.log(`9.9 rounded down is ${roundedDown}`);

// find the absolute value of -1231
const absVal = Math.abs(-1231);
console.log(`The absolute value of -1231 is ${absVal}`);
