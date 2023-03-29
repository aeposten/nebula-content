// Grab the elements and log them to the console

// Q1:  Attach this document to the index.html

// Q2:  Grab the second element that has the text Hello
const secondElement = document.getElementById("second");
console.log(secondElement);

// Q3:  Grab the text in the h1 that says 'Good Afternoon'
const allH1s = document.getElementsByTagName("h1");
let goodAfternoon;

for (let i = 0; i < allH1s.length; i++) {
  if (allH1s[i].textContent === "Good Afternoon") {
    goodAfternoon = allH1s[i];
  }
}

console.log(goodAfternoon);

// Q4:  Grab the h1 with the text that says "Catch me if you can"
function grabElementByText(desiredText) {
  for (let i = 0; i < allH1s.length; i++) {
    if (allH1s[i].textContent === desiredText) {
      return allH1s[i];
    }
  }
  return "Text not found in h1";
}

console.log(grabElementByText("CATCH ME IF YOU CAN"));
// Q5:  Grab the span element and change the text to "Got ya"
