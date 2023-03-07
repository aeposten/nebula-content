// Declare an empty array
const emptyArray = [];

console.log(emptyArray);

// Declare an array with all the data types you can think of within it
const dataTypeArray = [true, "string", 22, null, BigInt, undefined]

console.log(dataTypeArray);

// Make a list of classmates names first names in an array
const students = ["Judah", "Abdel", "Asadur", "Matt", "Aulexis", "Dayana", "Juliet", "Donald", "Amy"];

console.log(students);

// Get the length of that previous array
const studentLength = students.length;

console.log(studentLength);

// Check the type of the previous array
const studentsTypeOf = typeof students;

console.log(studentsTypeOf);

// Check if the previous array is an array

const isStudentArray = Array.isArray(students);

console.log(isStudentArray)

// Using indexing, grab your name from that previous array
const myFirstName = students[8];

console.log(myFirstName);

// Use the following variable to get the student at the index from the array of students
let index = 2; 
const thirdName = students[index];

console.log(thirdName)

// Update the array to have each element as a students first and last name : 'firstName lastName'
students[0] = "Judah Belgrave";
students[1] = "Abdel Bessard"
students[2] = "Matt Reilly"
students[3] = "Aulexis Rochell"
students[4] = "Dayana Senat"
students[5] = "Juliet Vorbe"
students[6] = "Donald Williams"
students[7] = "Asadur Rahman"
students[8] = "Amy Posten"

console.log(students);
