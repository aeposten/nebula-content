// https://www.codewars.com/kata/5168bb5dfe9a00b126000018
function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e
function repeatStr(n, s) {
  let repeatedStr = "";
  let i = 0;
  t;
  while (i < n) {
    repeatedStr += s;
    i++;
  }
  return repeatedStr;
}

// https://www.codewars.com/kata/55a2d7ebe362935a210000b2
function findSmallestInt(args) {
  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < args.length - i - 1; j++) {
      if (args[j] > args[j + 1]) {
        let smallest = args[j];
        args[j] = args[j + 1];
        args[j + 1] = smallest;
      }
    }
  }
  return args[0];
}

// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

function arrayPlusArray(arr1, arr2) {
  const sum1 = arr1.reduce((a, b) => a + b);
  const sum2 = arr2.reduce((a, b) => a + b);

  return sum1 + sum2;
}
// https://www.codewars.com/kata/544675c6f971f7399a000e79
function stringToNumber(str){
    let num = parseInt(str)
    
    return num;
  }