const { COMPARISON_BINARY_OPERATORS } = require("@babel/types");

// Turn the following string into all lowercase letters
const noCaps = "This Should Not Have Capital Letters!";
const lowerCase = noCaps.toLowerCase();

// Turn the following string into all uppercase letters
const loud = "i'm very loud!";
const upperCase = loud.toUpperCase();

// Join the prior two variables together.
const concatted = lowerCase.concat(upperCase);

console.log(concatted);
// Turn the following string into an array of names
const stringOfNames = "Ally Becca Carlos Drake Edgar Felicity Greta Hector";
const arrOfNames = stringOfNames.split(" ");

console.log(arrOfNames);
// Make your own mad-libs using a template literal
const myName = "Amy";
const myVerb =  "likes";
const myAnimal = "cats";

const madLibs = `${myName} ${myVerb} ${myAnimal}.`

console.log(madLibs);
// Given the name Tony Stark, get his initials
const ironMan = "Tony Stark";
ironArray = ironMan.split(" ")
const initials = ironArray[0][0] + ironArray[1][0]

console.log(initials)
// Given the string "Hey now, you're an all-star!" get the string, "all-star" and save it to a new variable
const string = "Hey now, you're an all-star!";
const split = string.split(" ")
const allStar = split[split.length - 1].slice(0, -1);
console.log(allStar)
// Using the string "How are you?" extract the question mark.
const string1 = "How are you?";
const questionMark = string1[string1.length - 1];

console.log(questionMark)
// Given the following variables, add them together to get 15
const ten = "10";
const five = "5";
const sum = parseInt(ten) + parseInt(five);

console.log(sum);
// Given the following sentence, turn it into an array.

const sentence = "Welcome to the jungle!";
const sentArr = sentence.split(" ");

console.log(sentArr);