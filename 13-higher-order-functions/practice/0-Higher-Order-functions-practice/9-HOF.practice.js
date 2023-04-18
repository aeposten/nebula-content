/* Cumulative Practice
During this practice you will be honing your skills with higher order functions by making a choice of which higher order function to use for each problem. */

/* Question 1
Write a hof function which returns the first number larger than 100 */
const nums = [23,89,300,45,2,120]

/* Question 2
Write a hof which lists a set of people based on their birth year */
const people = [
    { name: "Dan", birthYear: 1981 },
    { name: "Joe", birthYear: 2005 },
    { name: "Samantha", birthYear: 2000 },
    { name: "Jocelyn", birthYear: 1995 },
    { name: "Sasha", birthYear: 1997 },
    { name: "Tim", birthYear: 2003 },
];

/* Question 3
Given an array of cars only list cars that are build pre-2000 */
const cars = [{model: "Dodge", make: 2001},{model:"Ford", make:2012},{model:"Honda", make:1989},{model:"Hondi",make:1990}]


/* Question 4
Given an array of phone numbers return an array of protected phone numbers so that it has this structure: 
[
    input: 555-555-5555,
    output: 5##-###-#555
]                                       */
const phoneNums = [
    "718-647-9876",
    "516-722-3845",
    "631-477-9988",
    "917-987-2125",
    "347-123-4567",
    ];

/* Question 5
Given an array of numbers write a HOF that logs to the console:
    `Thats a big number!` if it's larger than 1000 or
    `This number isnt so big...` if its smaller than or equal to 1000 */
const nums1 = [345,57,765,2345,1098,32,9876]

/* Question 6
Given an array of people's names write a hof that returns only people with names longer than 5 characters
    Example
      ["Dan", "Joe", "Samantha", "Jocelyn", "Sasha", "Tim"] => ["Samantha", "Jocelyn", "Sasha"] */
const peopleArray = ["Dan", "Joe", "Samantha", "Jocelyn", "Sasha", "Tim"]

/* Question 7
Given a list of people (all objects) list people over the age of 20 and under the age of 35 in order of youngest to oldest */
const people1 = [
    { name: "Dan", age: 12 },
    { name: "Joe", age: 33 },
    { name: "Samantha", age: 67 },
    { name: "Jocelyn", age: 23 },
    { name: "Sasha", age: 65 },
    { name: "Tim", age: 25 },
];

/* Question 8
Given an array of objects, each object is representing food. The objects are structured like this:
    {name: 'banana', expiration: "Dec 21, 2022"}

Write a hof that will return the object representing the food item that will expire soonest
    Example:
        let food = [
            {name: 'banana', expiration: "Dec 21, 2022"},
            {name: 'steak', expiration: "Jan 5, 2022"},
            {name: 'milk', expiration: "Jan 8, 2022"},
        ]
        youHOF(food) => {name: 'steak', expiration: "Jan 5, 2022"}

    hint: JavaScript Date object may be helpful
        new Date(year, monthIndex, day)
        const d1 = new Date(2010, 3, 28) => April, 28, 2010
        You can compare dates using the > and < operators */
const food = [
    { name: "Banana", exp: new Date(2023, 3, 21) },
    { name: "Steak", exp: new Date(2024, 0, 5) },
    { name: "Milk", exp: new Date(2024, 0, 8) },
    { name: "Eggs", exp: new Date(2023, 1, 28) },
    { name: "Bread", exp: new Date(2023, 11, 20) },
];