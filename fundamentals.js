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


// Objects: complex variable which stores a list of properties used to store keyed collections
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

// Property Name Limitation:
// note that property name keys are automatically coverted to strings
    const object = {
    2: 'value of numeric property',
    '2': 'value of string property'
}
console.log(object) // { '2': 'value of string property' } since 2 and


// Propert Existence Test

/*const phone = {
    model: 'iPhone 11',
    color: 'black'
                            // didn't include the storage property here
}
if (phone.color) console.log(`My ${phone.model} is ${phone.color}`) // prints message
if (phone.storage) { // undefined counts as false, so the below won't print
    console.log(`My ${phone.model} has ${phone.storage}GB`);
} */

// Iteration:
// having multiple thing stored in a single variable, it is commom to  loop over each one of them  and perform the same operation
        
// For Loop:
let goal = 5;
for (let i = 0; i < goal; i++) {                //++: increment it and then use it
    console.log(`Iteration ${i} of ${goal}`)
}

const phone = {
    model: 'iPhone 11',             //key: property (model, color, storage)
    color: 'black',
    storage: 64
}
for (let key in phone) { // iterates over each property in the phone object, stores in ‘key’ variable
console.log('key: ' + key); // prints each object property name (key) in turn
console.log('value: ' + phone[key]); // prints each object value in turn
}






// References: objects are stored and copied by reference whereas primitive values: strings, numbers, boolean, etc/ are always copied as a whole value. 
// A variable assigned to an object stores not the object itself, but its address in memory[in other words a reference to it]
        
let person1 = { name: 'Anna' }; // object - stored by reference
let person2 = person1; // person2 points to same memory location as person1
person1.name = 'Brian';
console.log(person2.name); // Brian, even though we changed person1.name
let person3 = 'Carly'; // string - stored by value
let person4 = person3; // person4 points to separate memory location than person3, but both store same value
person3 = 'David';      //note that you can't re-declare person4 with davud since it's already been decalred as equal to person3
console.log(person4); // still Carly, since person3 and person4 are string primitives and store independent values
let person5 = 'David';
console.log(person5);

// Shallow Copy - creates a new object and replicates teh structure of the existing one by iterating over its properties and copying on a primitive level

const user = { name: 'Elliot', age: 27 };
const userClone = {}; // empty object, refers to different memory location
for (let key in user) { // iterate over user properties
    userClone[key] = user[key]; // re-create them in userClone
}
console.log(userClone); // { name: 'Elliot', age: 27 }

// Shallow Copy with Object Spread

// simpler way to create a shallow copy with spread syntax [...]
const userClone2 = {...user}; // spread or unpack user properties into new object
console.log(userClone2); // { name: 'Elliot', age: 27 }

//override values or add in new properties
const userClone3 = {...user, age: 28, location: 'New Zealand'};
console.log(userClone3); // { name: 'Elliot', age: 28, location: 'New Zealand' }

// merge multiple objects into a single new object
const vehicle = { make: 'Toyota', model: 'Camry'};
const mergedUser = {...user, ...vehicle};
console.log(mergedUser); // { name: 'Elliot', age: 27, make: 'Toyota', model: 'Camry' }


// Deep Clone: clones all levels of an object
const box1 = {
weight: '20kg',
dimensions: { // nested object property
width: '30cm',
height: '10cm'
}
}
const box2 = {...box1}; // shallow clone
box1.dimensions.height = '12cm'; // change box1 nested object property
console.log(box2); // box2 references box1 dimensions and picks up height change from 10cm to 12cm

// Method
// a function that is a property of an object

const user4 = {
    name: 'Bilbo Baggins',
    sing: function() { // method of user object
        console.log('Roads go ever ever on');
},
    sing2() { // shorthand method syntax, does same as above
        console.log('Over rock and under tree');
}
}
user4.sing(); // Roads go ever ever on
user4.sing2(); // Over rock and under tree


// Methods with Context: obkect method needs to access the information stored in the object to do its job. To access the object, methods can use the this keyword. 
    //the value of this is the object before the dot, the one used to call the method
const user5 = {
    name: 'Bilbo Baggins',
    printGreeting() {
        console.log(`Hello, I'm ${this.name}`) // 'this' is the current object
    }
}
// 'user5' is before the dot, provides the context where 'this' comes from
user5.printGreeting(); // Hello, I'm Bilbo Baggins

// this behavior

const user6 = {
    name: 'Bilbo Baggins',
    printThis() {
        console.log(this); // 'this' is the current object
        return this; // if we return it, we can 'chain' object methods together
    },
    printGreeting() {
        console.log(`Hello, I'm ${this.name}`); // 'this' is the current object
    }
}
user6.printThis().printGreeting(); // methods chained together, works because printThis returns this

//Constructor Function
function User(first, last) { // constructor function
    this.first = first;
    this.last = last;
    this.hasShortName = () => this.first.length <= 3;
}
// we can create multiple users with different names
let user1 = new User('Tim', 'Smith'); // need to use 'new'
console.log(user1); // User { first: 'Tim', last: 'Smith' }console.log(user1.hasShortName()); // true

// Object generations with new
function User(first, last) { // constructor function
//this = {}; // implicitly
this.first = first;
this.last = last;
this.hasShortName = () => this.first.length <= 3;
//return this; // implicitly
}


class User8 {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    hasShortName() {
        return this.first.length >= 3
    }
}
let user2 = new User8('Tina', 'Smith') // need to use 'new'
console.log(user2) // User { first: 'Tina', last: 'Smith' }
console.log(user2.hasShortName()) // false