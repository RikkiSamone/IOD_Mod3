/* JS Intermediate Lab: 3.2 */

/*
1. Create a function that takes a string as a parameter and returns the string with the first
character of each word changed into a capital letter, as in the example below. Test it with
different strings. 
*/

function capitalizeWords(str) {
    return str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

console.log(capitalizeWords("hello world"));
console.log(capitalizeWords("rikki gaddy"));


/*
2. Create a function truncate(str, max) that truncates a given string of text if its total
length is greater than the max length. It should return either the truncated text, with an
ellipsis (...) added to the end if it was too long, or the original text otherwise.

b) Write another variant of the truncate function that uses a conditional operator. */

function truncate(str, max) {
    if (str.length > max) {
        return str.slice(0, max - 3) + "...";
    } else {
        return str;
    }
}
console.log(truncate("Hello World", 8)); //Hello...
console.log(truncate("Rikki", 10)); //Rikki

//With Conditional Operators
function sentence(str, max) {
    return str.length > max ? str.slice(0, max - 3) + "..." : str;
}

console.log(sentence("Rikki", 10)); //Rikki
console.log(sentence("Hello World", 8)); //Hello...

/*
3. Use the following animals array for the below tasks. Test each one by printing the result to
the console. Review the following link for tips:

https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Global_Objects/Array

a) Add 2 new values to the end
b) Add 2 new values to the beginning
c) Sort the values alphabetically
d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
middle of the animals array with newValue
e) Write a function findMatchingAnimals(beginsWith) that returns a new array
containing all the animals that begin with the beginsWith string. Try to make it work
regardless of upper/lower case.
*/

const animals = ['Tiger', 'Giraffe']
animals.push ("Elephant", "Penguin");   //add 2 new values to the end
console.log(animals); //[ 'Tiger', 'Giraffe', 'Elephant', 'Penguin' ]

animals.unshift("Lion", "Ostrich"); //add 2 new values at the bginning
console.log(animals); //[ 'Lion', 'Ostrich', 'Tiger', 'Giraffe', 'Elephant', 'Penguin' ]

animals.sort(); //arrange alphabetically
console.log(animals); //[ 'Elephant', 'Giraffe', 'Lion', 'Ostrich', 'Penguin', 'Tiger' ]

//console.log(animals.fill("Dog", 2, 3)); //uses fiill() to replace Lion with Dog

function replaceMiddleAnimal(newValue) {
    return ((animals.fill(newValue, 2, 3)))
};

replaceMiddleAnimal("Dog");
console.log(replaceMiddleAnimal("Dog"));  //replaces lion with dog [ 'Elephant', 'Giraffe', 'Dog', 'Ostrich', 'Penguin', 'Tiger' ]


function findMatchingAnimals(beginswith) {
    const searchStr = beginswith.toLowerCase();

    return animals.filter(animal => animal.toLowerCase().startsWith(searchStr));
};
console.log(findMatchingAnimals("E"));
console.log(findMatchingAnimals("t"));
console.log(findMatchingAnimals("G"));

/* 4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like
'margin-left' into camel-cased 'marginLeft'.

The function should remove all dashes, and uppercase the first letter of each word after a
dash.

b) Create variants of the camelCase function that use different types of for loops, and
c) with and without the conditional operator.
*/

function camelCase(cssProp) {
    return cssProp
        .split('-') 
        .map((word, index) => 
            index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
        ) 
        .join(''); 
}

console.log(camelCase("margin-left"));    
console.log(camelCase("background-color"));


/* 5 Decimal number operations in JavaScript can lead to unexpected results, as in the
following:*/

let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004

/*
We can sometimes avoid this using the toFixed function to force the number of decimal
places as below, but it’s not always useful:*/

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen) //this is not working because the .toFixed method returns a string NOT a number
/*

a) Explain why the above code returns the wrong answer
b) Create a function currencyAddition(float1, float2) which safely adds the two
decimal numbers float1 and float2 and returns the correct float result. */

function currencyAddition(float1, float2) {         //converting floats to integers by multiplying by 100 and then dividing the result by 100 to return to a decimal number. 
    const precision = 100;   
    const result = (Math.round(float1 * precision) + Math.round(float2 * precision)) / precision;
    return result;
}
console.log(currencyAddition(.5, 1.0)); //1.5
console.log(currencyAddition(3.9, 4.2)); // 8.1
console.log(0.3 == currencyAddition(0.1, 0.2)) // true




/*
c) Create a function currencyOperation(float1, float2, operation) which
safely performs the given operation (either +, -, / or *) on the two numbers and returns
the correct float result. https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Statements/switch may be useful. */

const precise = 100; //global variable for precision

function currencyOperation(float1, float2, operation) {
    switch (operation) {
        case "+" :
            return (Math.round(float1 * precise) + Math.round(float2 * precise)) / precise;
            break;
        case "-":
            return (Math.round(float1 * precise) - Math.round(float2 * precise)) / precise;
            break;
        case "/":
            return (Math.round(float1 * precise) / Math.round(float2 * precise));
            break;
        case "*": 
            return (Math.round(float1 * precise) * Math.round(float2 * precise)) / (precise * precise);
        }
}
console.log(currencyOperation(1.3, 2.1, "+")); //3.4
console.log(currencyOperation(1.3, 2.1, "*")); //2.73
console.log(currencyOperation(1.3, 2.1, "/")); //0.6190476
console.log(currencyOperation(1.3, 2.1, "-")); //-0.8
console.log(0.3 == currencyOperation(0.1, 0.2, '+')) // true

/*
d) (Extension) Extend the above function to include a fourth argument numDecimals
which allows the operation to support different amounts of decimal places from 1 to 10.
HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with
different values as well as the below:*/



function currencyOperation1(float1, float2, operation, numDecimals) {
    if (numDecimals < 1 || numDecimals > 10) {
        throw new Error("numDecimals must be between 1 and 10.");
    }
    const precise1 = Math.pow(10, numDecimals); 
    const a = Math.round(float1 * precise1);
    const b = Math.round(float2 * precise1);

    let result;
    switch (operation) {
        case "+":
            result = (a + b) / precise1;
            break;
        case "-":
            result = (a - b) / precise1;
            break;
        case "/":
            result = (a / b);
            break;
        case "*":
            result = (a * b) / (precise1 * precise1);
            break;
    }
    return parseFloat(result.toFixed(numDecimals));
    
}

console.log(currencyOperation1(12.8759, 2.39681, '*', 3)); //30.864
console.log(currencyOperation1(25.8759, 2.39681, '/', 2)); //10.78


/* 6 Create a function unique(duplicatesArray) which takes an array parameter that may
include duplicates. Your function should return an array containing only the unique values
from duplicatesArray.
Test with the following arrays and create another one of your own.*/

function unique(duplicatesArray) {
    return [...new Set(duplicatesArray)];
}; 
const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]

console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]

const names = ["Michael", "Diane", "Diana", "Daniel", "Michael"]
console.log(unique(names));


/* 7. Use the following array of book objects to practice the array functions for map, find and
filter. Test each of your answers to the below tasks.*/

const books = [
{ id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
{ id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
{ id: 3, title: '1984', author: 'George Orwell', year: 1949 },
{ id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
{ id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

/* a) Write a function getBookTitle(bookId) that uses the find function to return the
title of the book object with the matching id.*/
function getBookTitle(bookID) {
    let book = books.find(books => books.id === bookID);
    return book ? book.title : "Book not found"; 
};
console.log(getBookTitle(3)); //1984


/*
b) Write a function getOldBooks() that uses the filter function to return all book
objects written before 1950.*/
function getOldBooks() {
    return books.filter(books => books.year < 1950);
}

console.log(getOldBooks());

/*
c) Write a function addGenre() that uses the map function to add a new genre property
to all of the above books, with the value ‘classic’.*/
function addGenre() {
    return books.map(books => ({ ...books, genre: "Classic" }));
}
console.log(addGenre());



/*
d) (Extension) Write a function getTitles(authorInitial) that uses map and
filter together to return an array of book titles for books written by authors whose
names start with authorInitial.*/
function getTitles(authorInitial) {
    return books
        .filter(books => books.author.startsWith(authorInitial))
        .map(books => books.title);
}
console.log(getTitles('A'));
console.log(getTitles('J'));

/*
e) (Extension) Write a function latestBook() that uses find and forEach to get the
book with the most recent publication date. */

function latestBook() {
    let latestYear = 0;
    let latestBook = null;
    
    books.forEach(books => {
        if (books.year > latestYear) {
            latestYear = books.year;
            latestBook = books;
        }
    });
    return latestBook;
}
console.log(latestBook());


/*
The following code creates a new Map object for storing names beginning with A, B, or C
with their phone numbers.*/

const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')
/*
a) Create a new phoneBookDEF Map to store names beginning with D, E or F
b) Initialise the contents of phoneBookDEF by passing in an array of keys/values */
const phoneBookDEF = new Map([
    ['Dani', '07658932456'],
    ['Evelyn', '02696772258'],
    ['Fiona', '02199800908'],
]);

/*
c) Update the phone number for Caroline*/
phoneBookABC.set('Caroline', '0123456789')

/*
d) Write a function printPhoneBook(contacts) that prints the names and phone
numbers in the given Map*/
function printPhoneBook(contacts) {
    contacts.forEach((number, name) => {
        console.log(`${name}: ${number}`);
    });
}
console.log(printPhoneBook(phoneBookABC));
console.log(printPhoneBook(phoneBookDEF));


/*
e) Combine the contents of the two individual Maps into a single phoneBook Map*/
const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);


/*
f) Print out the full list of names in the combined phone book*/

console.log(printPhoneBook(phoneBook));


/* 9
Given the below salaries object, perform the following tasks.*/
let salaries = {
    "Timothy" : 35000,
    "David" : 25000,
    "Mary" : 55000,
    "Christina" : 75000,
    "James" : 43000
};
/*
a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries*/
function sumSalaries(salaries) {
    return Object.values(salaries).reduce((total, salary) => total + salary, 0);
}
console.log(sumSalaries(salaries));

/*
b) Write a function topEarner(salaries) that calculates and returns the name of the person
earning the highest salary*/

function topEarner(salaries) {
    let maxSalary = 0;
    let topEarnername = null;

    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > maxSalary) {
            maxSalary = salary;
            topEarnername = name;
        }
    }
    return topEarnername;
}
console.log("TopEarner:", topEarner(salaries));


/* 10. 
The following code uses the Date object to print the current time and the number of hours
that have passed today so far. Extend the code to do the following:*/

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')

/*
a) Print the total number of minutes that have passed so far today */
console.log((today.getHours()  * 60 + today.getMinutes()) + ' minutes have passed so far today');
/*
b) Print the total number of seconds that have passed so far today*/
console.log((today.getHours() * 3600 + today.getMinutes() * 60) + ' seconds have passed so far today');
/*
c) Calculate and print your age as: 'I am x years, y months and z days old'*/
function calcAge(birthday) {
    const today = new Date();
    const birth = new Date(birthday);

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }
    return `I am ${years} years, ${months} months and ${days} days old`;
}
console.log(calcAge('1994-06-19'));

/*
d) Write a function daysInBetween(date1, date2) which calculates and returns the amount
of days in between the two given dates.*/
function daysInBetween(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    
    const timeDiff = d2 - d1; // Difference in milliseconds
    const daysDiff = timeDiff / (1000 * 3600 * 24); // Convert milliseconds to days
    
    return Math.floor(daysDiff);
}

console.log('Days in between:' + daysInBetween('1994-06-19', today));