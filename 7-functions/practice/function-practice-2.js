// 1. Write a function that multiplies 3 input numbers together.
function multiplyThree(num1, num2, num3) {
  const multiplied = num1 * num2 * num3;

  return multiplied;
}

// console.log(multiplyThree(10, 20, 30));

// 2. Write a function that takes in a number and logs all odd numbers leading up to that number
function logOdds(number) {
  for (let i = 0; i < number; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

// logOdds(10);

// 3. Write a function that takes in a list of names and returns a list of initials. The names will be formatted: 'Peter Parker'.

function returnInitials(nameArray) {
  const initialsArray = [];
  for (let i = 0; i < nameArray.length; i++) {
    const name = nameArray[i].split(" ");
    let initials = "";
    for (let j = 0; j < name.length; j++) {
      initials += name[j][0];
    }
    initialsArray.push(initials);
  }

  return initialsArray;
}

console.log(returnInitials(["Tim Smith", "Bob Jones", "Jane Doe"]));

// 4. Write a function which takes in two numbers and a mathematical operator and performs Math on those two numbers utilizing that operator
function performOperation(num1, num2, operator) {
  let output = 0;
  switch (operator) {
    case "+":
      output = num1 + num2;
      break;

    case "*":
      output = num1 * num2;
      break;

    case "-":
      output = num1 - num2;
      break;

    case "/":
      if (num === 0) {
        return "Can't divide by 0!";
      } else {
        output = num1 / num2;
      }
      break;
  }
  return output;
}

// console.log(performOperation(1, 2, "+"))

// 5. Write a function which takes in two arrays and returns those arrays combined together.
function combineArrays(arr1, arr2) {
  const combinedArray = arr1.concat(arr2);

  return combinedArray;
}

// console.log(combineArrays([1, 2, 3], [4, 5, 6]));
