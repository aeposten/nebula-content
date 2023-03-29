// Connect your JS file to your HTML file

// Select the <h1> element using querySelector() and log it to the console
const h1 = document.querySelector("h1");
console.log(h1);

// Select the <p> element using querySelector() and log it to the console
const p = document.querySelector("p");
console.log(p);

// Select the <ul> element using getElementById() and log it to the console
const ul = document.getElementById("my-list");
console.log(ul);

// Select the first <li> element using querySelector() and log it to the console
const firstLi = document.querySelector("li");
console.log(firstLi);

// Select the second <li> element using querySelectorAll() and array indexing, and log it to the console
const secondLi = document.querySelectorAll("li")[1];
console.log(secondLi);

// Select all <li> elements using getElementsByClassName() and log them to the console
const allListItems = document.getElementsByClassName("item");
console.log(allListItems);

// Select the <ul> and create a new <li> and add it to the list
const newLi = document.createElement("li");

newLi.textContent = "Item 4";

ul.append(newLi);
