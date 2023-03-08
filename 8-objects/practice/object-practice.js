// 1.   Create an object for a celebrity and save it to a variable
const jeromeBettis = {};

console.log(jeromeBettis);
// 2.   Using dot-notation add 3 key-value pairs to the celebrity
jeromeBettis.sport = "Football";
jeromeBettis.position = "Running back";
jeromeBettis.number = 36;

console.log(jeromeBettis);

// 3.   Using bracket-notation add 3 key-value pairs to the celebrity
jeromeBettis["firstName"] = "Jerome";
jeromeBettis["lastName"] = "Bettis";
jeromeBettis["isRetired"] = true;

console.log(jeromeBettis);
// 4.   Write a function that allows us to add or update 3 properties
function updateJerome(nickName, age, retirementStatus) {
    jeromeBettis["nickName"] = nickName;
    jeromeBettis["age"] = age;
    jeromeBettis["isRetired"] = retirementStatus;
}
updateJerome("The Bus", 51, true)
// 5.   Using a loop - log all the celebrities properties to the console
for (let key in jeromeBettis) {
    console.log(`${key}: ${jeromeBettis[key]}`)
}