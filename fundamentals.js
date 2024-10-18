// cmd + right slash auto starts a comment

let one = 1;
let two = 2;
let three = 3;
// standard BODMAS order of operations - use brackets to override
// below is: 1 + 2 - ( (3 * 2) / 1 ) = 3 - 6
console.log(one + two - three * two / one); // -3


// to increment by one (all the same):
one = one + 1; // new value of one is previous value + 1
one += 1; // shorthand - add 1 to previous (also *=)
one++; // increment previous value (by 1)
// to decrement by one (all the same):
two = two - 1; // new value of two is previous value - 1
two -= 1; // shorthand - minus 1 from previous (also /=)
two--; // decrement previous value (by 1)

// Boolean: values of either true or false.

let isChecked = false;
let isToggleOn = true;

// ! means 'not'
isChecked = !isChecked;
console.log(isChecked); // true

/*let location; // no value is assigned with the = operator
console.log(location); // undefined */

// null is equivalent to undefined; but not strictly equal.

let location; // no assigned value, therefore undefined
let age = null; // explicitly assigned null value
console.log(`${location} == ${age} ? ${location == age}`) // true (uses == to check value equivalence)
console.log(`${location} === ${age} ? ${location === age}`) // false (uses === to check type equality)


// Object
const tv = { // object starts here
brand: "Sony Bravia", // key-value pair. brand is the key, "Sony Bravia" is the value
size: "55-inch", // values can be any data type
model: 2023, // multiple key-value pairs are separated by commas
resolution: "4K" // the comma on the last key-value pair can be omitted
} // object ends here. All data is stored in tv variable.

// Data Type 
/* Operators: 
- typeof - returnes the type of argument
    - supports 2 forms of syntax:
        - as an operator typeofx
        as a function typeof(x) */

console.log(typeof undefined); // undefined
console.log(typeof 0); // number
console.log(typeof 10n); // bigint
console.log(typeof true); // boolean
console.log(typeof 'text'); // string
console.log(typeof Symbol('id')) // symbol
console.log(typeof Math); // object
console.log(typeof null); // object
console.log(typeof console.log); // function 


// Conversions
// String Convversion - converting other types of variables to strings happens when we need the string form of a value (words) 

// Explixit
console.log(String(false)) // false - string form of boolean

//Implicit: by concatenating an existing string

console.log( "1" + 2 + 3 ) // 123 - string ‘1’ is concatenated with number 2 then number 3
console.log( 1 + 2 + "3" ) // 33 - number 1 is added to number 2 then concatenated with string ‘3’


// Numeric Conversion
// conversion of other types of variables to numbers happens in mathematical functions and expressions automatically

// Explicit: using the number class function
console.log( Number("      4      ") ) // 4 - trims spaces
console.log( Number(null) ) // 0 - intentionally empty value converts to 0
console.log( Number(undefined) ) // NaN - non-existent value is unknown
console.log( Number(false) ) // 0 - false converts to 0
console.log( Number(true) ) // 1 - true converts to 1
console.log(Number("")) // 0 - empty string converts to 0console.log( Number("not a number") ) // NaN - non-empty strings beginning with chars cannot convert
console.log( Number())// 0 - counts as an empty string

// Implicit: happens when using division, multiplication, subtraction, or plus (/,*,-,+) and JS automatically conversts strings to numbers to perform the operation
console.log("6" / "2") // 3
console.log("6" * "2") // 12
console.log("6" - "2") // 4
console.log(+"6") // 6 // implicit numeric conversion does NOT happen when using + with two or more operands, as JS can (and will) ‘add’ two strings by concatenating them. String concatenation is the operation of joining character strings end-to-end.

// Boolean Conversion: used in logical conditions. Can explicitely convert/create them by using the class function
console.log( Boolean("") ) // false - empty string
console.log( Boolean(0) ) // false - zero value
console.log( Boolean(null) ) // false - no value
console.log( Boolean(undefined) ) // false - unknown value
console.log( Boolean(NaN) ) // false - not a number
console.log( Boolean("false") ) // true - non-empty string
console.log(Boolean(-1)) // true - non-zero number
// Note: Boolean is determining if its true or false based on whether or not the string is more than zero and/or has a 'value'

// Implicit: 
// if condition:
if ("") console.log('empty string is true') // implicit "" conversion to false - won't print msg
if (undefined) console.log('undefined is true') // implicit conversion to false - won't print msg

// conditional statements:
console.log( NaN ? 'NaN is true' : 'NaN is false' ) // NaN is false
console.log( 0 ? 'zero is true' : 'zero is false' ) // zero is false
console.log("hello" ? 'hello is true' : 'hello is false') // hello is true

// Negation:
console.log( !undefined ) // true - convert value to boolean then negate it (opposite)
console.log( !!"" ) // false - convert value to boolean then negate/toggle twice


// String Comparison
/*The algorithm to compare two strings is simple:
1. Compare the first character of both strings.
2. If the first character from the first string is greater (or less) than the other string’s, then the first string is
greater (or less) than the second. We’re done.
3. Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
4. Repeat until the end of either string.
5. If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.
*/

console.log('apple' < 'banana'); // true - because a is less than b (rule 2)
console.log('eat' < 'eaten'); // true - because all characters are the same but eaten is longer (rule 5)

// Comparison of different types: 
console.log("2" > 1) // true - converts to 2 > 1
console.log("2" != 1) // true - converts to 2 is not equal to 1
console.log("02" === 2) // true - converts to 2 == 2
console.log(true == 1) // true - true converts to 1
console.log(false == 0) // true - false converts to 0
/*Replacing the == (equivalence) in the above with === (strict equality) will check
for matching types as well and change the results to false.*/

console.log(false === 0)//false - false is not strictly equal to zero
console.log(0 === 0)//true - 0 is strictly equal to 0 and matches. 

console.log(null == undefined) // true - both convert to 0



// Functions
// 'function' keyword followed by the custom function name, then ()
function helloWorld() // we can include parameters inside the () as function variables
{ // function body is enclosed with curly brackets (braces)

    console.log('hello world'); // can be one or multiple statements inside the function
}
helloWorld(); // once the function is defined, we need to call it to make it run/execute

// Declaration: functions ' return' as a result when called. 

// function checkAge returns a value when called
function checkAge(age) {
if (age >= 18) {
return 'adult'; // if the condition is true, return this string and exit
}
return 'non-adult'; // if the condition was false, return this string and exit
}
console.log( checkAge(21) ) // adult
console.log(checkAge(13)) // non-adult

// Expression: functions can be created as a variable expression; function is assigned to the variable explicitly
const sayHi = function() { // function expression syntax for creating a function
console.log('Hi')
}

// Expression vs Declaration: 
// Expressions can only be access AFTER definition:
// sayHiExpression(); // error - cannot access before initialization

const sayHiExpression = function() {
console.log('Hi');   // definition
}
sayHiExpression()    //expression call

// Declaration can be called earlier than it is defined
sayHiDeclaration(); // works - can be hoisted

function sayHiDeclaration() {
console.log('Hi');  //definition
}


// Arrow Functions: allows you to omit the function keyword
const sayoHiArrow = () => console.log('Hi') // arrow function syntax, more concise

const subtract1 = (a, b) => a - b; // most concise version of the below
const subtract2 = (a, b) => { return a - b }; // does the same thing as above

/*const sayHiExpression = function() {
    console.log('Hi');
    console.log(arguments);
}
function sayHiDeclaration() {
    console.log('Hi');
    console.log(arguments); 
}*/
const sayHiArrow = () => { 
    console.log('Hi'); 
    console.log(arguments);
}
/* sayHiDeclaration() // [Arguments] {}
sayHiExpression() // [Arguments] {}
sayHiArrow() // ReferenceError: arguments is not defined */


// Objects: complex variable whic stores a list of properties used to store keyed collections
// key:value pair, where key is a string (property name) and value can be anything

// Empty Object
const examp = new Object(); // creates a new empty object
const obj = {}; // creates a new empty object

// Object with Properties

const example = { // user object contained within curly braces
name: 'joe', // string property with key 'name' and value 'joe'
age: 20, // numeric property with key 'age' and value 20
'has a dog': true // multi-word property key 'has a dog' with boolean value true
};

// Object with Operations: get, set, or delete the value of a property key

/* console.log(user.name); // get object property called name and log it
let dogOwner = user['has a dog']; // get value of property 'has a dog' and assign to new variable
user.age = 21; // set (or assign) new value to object property called age
user.location = 'NSW'; // create new object property called location and set (assign) a value
delete user.location; // delete property of user object called location
*/

const self = {               //self is the object   
    name: 'Rikki',          //define properties
    age: 30,
    location: "Las Vegas"
};

console.log(self.name);         //call the function with object.property
console.log(self.age);
console.log(self.location);
delete self.location;

let myAge = self.age
console.log(myAge);

// Adding something 