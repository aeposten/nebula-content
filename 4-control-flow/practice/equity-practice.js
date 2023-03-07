// Create two variables, one equal to '10' and the other equal to 10
const tenString = '10'
const tenNum = 10;

// Comparing the two variables, are they strictly equal?
const tensStrict = (tenString === tenNum);

console.log(`Is "${tenString}" strictly equal to ${tenNum}? ${tensStrict}`);
// Comparing the two variables, are they loosely equal?
const tensLoose = (tenString == tenNum);
console.log(`Is "${tenString}" loosely equal to ${tenNum}? ${tensLoose}`);

// Comparing our two prior variables, in one statement, are they both loosely equal and strictly equal? (Using the && operator)
const andComp = (tensStrict && tensLoose);
console.log(`Are "${tenString}" and ${tenNum} both loosely equal and strictly equal? ${andComp}`);
// Comparing our two prior variables, in one statement, are they either loosely equal or strictly equal? (Using the || operator)
const orComp = (tensStrict || tensLoose);
console.log(`Are "${tenString}" and ${tenNum} loosely equal or strictly equal? ${orComp}`);

// Check if the variable set to 10 is not loosely equal to 'ten' 
const tensNotLoose = (tenString != tenNum);
console.log(`Is "${tenString}" not loosely equal to ${tenNum}? ${tensNotLoose}`);

// Create a variable and initilize it to true, check if it is not strictly equal to 'true' 
const trueVar = true;
const truesEqual = (trueVar !== 'true');
console.log(`is true not strictly equal to '${trueVar}'? ${truesEqual}'`);