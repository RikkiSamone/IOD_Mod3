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
console.log(fixedTwenty + fixedTen) //this is not working because the .toFixed method returns a string NOt a number
/*

a) Explain why the above code returns the wrong answer
b) Create a function currencyAddition(float1, float2) which safely adds the two
decimal numbers float1 and float2 and returns the correct float result. */

function currencyAddition(float1, float2) {
    return (float1 + float2);
}
console.log(currencyAddition(.5, 1.0)); //1.5


/*
c) Create a function currencyOperation(float1, float2, operation) which
safely performs the given operation (either +, -, / or *) on the two numbers and returns
the correct float result. https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Statements/switch may be useful. */

function currencyOperation(float1, float2, operation) {
    
}

/*
d) (Extension) Extend the above function to include a fourth argument numDecimals
which allows the operation to support different amounts of decimal places from 1 to 10.
HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with
different values as well as the below:*/

//console.log(0.3 == currencyAddition(0.1, 0.2)) // true
//console.log(0.3 == currencyOperation(0.1, 0.2, '+')) // true