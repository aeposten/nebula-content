// Given this array
// We want to append a new list item to a list by looping over this array
// We want to do this only with JavaScript
// YOU SHOULD NOT TOUCH THE HTML FILE

// Steps
// Create a list and append it to the body
// Loop over todos and create a list item for each one and append it to the newly created list with the todo text.
const todos = [
  "Walk the dog",
  "Make Dinner",
  "Do Dishes",
  "Mow Lawn",
  "Make Bed",
];

const toDoList = document.createElement("ul");
const main = document.getElementById("main");

main.append(toDoList)


// for (let i = 0; i < todos.length; i++) {
//     const toDoItem = todos[i];
//     const li = document.createElement("li");

//     li.textContent = toDoItem;
//     toDoList.append(li);
// }

// for (let i = 0; i < todos.length; i++) {
//     const toDoItem = todos[i];
//     toDoList.innerHTML += `<li>${toDoItem}</li>`
// }

todos.map((todo)=> toDoList.innerHTML += `<li>${todo}</li>`)