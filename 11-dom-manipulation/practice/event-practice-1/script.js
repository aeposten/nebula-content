// COUNTER EXERCISE

// Select the body element from index.html
const body = document.body;

// Set an attribute of 'style' to the body tag and add a background color of anything other than white
body.style.backgroundColor = "#e9c46a";

/* -------------------------------------------------------------------------- */

// Create an h1 element
const newH1 = document.createElement("h1");

// Append a new h1 element to the body element as a child
body.append(newH1);

// Add text to the h1 element
newH1.textContent = "Hooray!";

// Assign the background color of this element to something unique
newH1.style.backgroundColor = "#264653";

// Set a new style attribute to the h1 element
newH1.style.color = "#e9c46a";
newH1.style.fontFamily = "Trebuchet MS";
newH1.style.textAlign = "center";
newH1.style.padding = "0.5em";
newH1.style.borderRadius = "0.5em";

// Add font size to the h1Element
newH1.style.fontSize = "3rem";

// Set the default text to the number zero
newH1.textContent = 0;

/* -------------------------------------------------------------------------- */

// Create a button element to increment the h1 text
const buttonOne = document.createElement("button");

// Append the button element to the body element
body.appendChild(buttonOne);

// Add text to the button that says "Add One"
buttonOne.textContent = "Add One";

// Add a class attribute to boxButton
buttonOne.className = "button";
/* -------------------------------------------------------------------------- */

// Create another button element to decrement the h1 text
const buttonTwo = document.createElement("button");

// Add the button element to the body element
body.appendChild(buttonTwo);

// Add text to the button element that says "Subtract One"
buttonTwo.textContent = "Subtract One";

// Add a class attribute of style to the button element
buttonTwo.className = "button";

/* -------------------------------------------------------------------------- */
// Increment BUTTON FUNTION
// Create functionality that, when you click this button it increases the h1 value
let count = 0;
newH1.textContent = count;
// function incrementCount() {
//   count++;
//   newH1.textContent = count;
// }

function incrementDecrement(operation) {
  operation === "increment" ? count++ : count--;

  newH1.textContent = count;
}

buttonOne.addEventListener("click", () => {
    incrementDecrement("increment");
});

/* -------------------------------------------------------------------------- */
// Decrement BUTTON FUNCTION
// Create functionality that, when you click this button it decreases the h1 value

function decrementCount() {
  count--;
  newH1.textContent = count;
}

buttonTwo.addEventListener("click", () => {
    incrementDecrement("decrement");
});
