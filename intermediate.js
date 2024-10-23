// Primitive Data Types:  a variable that stores a single value
// Number, boolean and string primitives can still use certain special functions    
// (built into their prototypes) in the same way that objects can:
    
const n = 1.23456; // primitive floating point number
console.log(n.toFixed(2)) // 1.23 - fixed to 2 decimal places
console.log(n.toPrecision(10)) // 1.234560000 - fills or rounds to the exact number of digits

const hello = 'hello world' // primitive string
console.log(hello.toUpperCase()) // HELLO WORLD
console.log(hello.endsWith('world')) // true

// Primitive Like Object: 

// String-Like Object: 
    // treating them as strings usually results in the generic [object Object] message. We can override this by creating a custom toString method to specify the string format of our object:

   /* const user = {
    name: 'John', 
}
console.log("User: " + user);  
// User: [object Object] */

const user = {
    name: 'John',
    toString() {
        return this.name; // custom string value
    }
}
console.log("User: " + user); // User: John


// Number-like Object: customise how an object behaves like a number by defining a valueOf method
const apple = {
    name: 'Apple',
    category: 'Granny Smith',
    price: 1.2,
    valueOf() { // without this special function, we can’t multiply the object below
        return this.price; 
    }
}
console.log(apple * 2) // 2.4

// Numbers: 
// Decimal Numbers: variations on syntax for representing very large numbers and very small numbers
    
const billion1 = 1000000000 // 9 zeros - hard to read
const billion2 = 1_000_000_000 // easier to read, underscores ignored
const billion3 = 1e9 // exponential format
console.log(billion1 === billion2) // true
console.log(billion2 === billion3) // true

const microSecs1 = 0.000001 // 6 decimal places - hard to read
const microSecs2 = 0.000_001 // easier to read, underscores ignored
const microSecs3 = 1.e-6 // exponential format
console.log(microSecs1 === microSecs2) // true
console.log(microSecs2 === microSecs3) // true

// Hexadecimal Numbers: use base 16 instead of standard base 10/ Widely used in javascript to represent colors, encode characters, and other many things. Write them ox and then the hexadecimal number

const r = 0xff;
const g = 0xff;
const b = 0xff;
const white = `rgb(${r}, ${g}, ${b})`
console.log(white) // rgb(255, 255, 255)            //I imagine this is cool if you want to make a color pallete generator? 


// Binary and Octal Numbers: 
// Binary (base 2 : 0 and 1) and octal (base 8 : 0-7) numeral systems are rarely used, but are supported using the 0b and 0o prefixes.

/*Note: Any number in JS beginning with a 0 is also interpreted as octal, which
    can lead to issues if treating phone numbers as numbers instead ofstrings: */
 
const mobile = 041234567
console.log(mobile) // 8730999 - decimal equivalent

const binary = 0b11111111 // binary form of 255
const octal = 0o377 // octal form of 255

console.log(binary) // 255
console.log(binary === octal) // true

// Base Conversion
    // toString(base): on numbers returns a string representation in the number system with the given base; default is 10
    // base=16: used for hex colors, 16 possible digits (0-9 and A-F)
    // base=2: mostly used for debugging bitwise operations with 2 possible digits 0 and 1
    // base=36: the maximum with the 36 possible digits (0-9 and A-Z)
        
const ff = 255
const ee = 238
const dd = 221
console.log(ff.toString(16)) // ff
//convert from rgb color code to hexadecimal
console.log(`#${ff.toString(16)}${ee.toString(16)}${dd.toString(16)}`) // #ffeedd



// Imprecise Calcs: 
/*When the number is too big, it overflows the 64-bit storage and cannot be
accurately represented, so it converts to Infinity:*/

const toobig = 1e350 // 1 * 10350 - overflows storage
console.log(toobig) // Infinity
console.log(Number.MAX_VALUE) // 1.7976931348623157e+308

//Because floating point numbers can't be accurately represented in binary, some operations lead to unexpected results: 
const point1 = 0.1; const point2 = 0.2; console.log(`${point1} + ${point2} = ${point1 + point2}`) // 0.1 + 0.2 = 0.30000000000000004

// Precision is also lost when the number of digits reaches 16 or more of for values greater than 2^53. in JS, integer numbers are accurate up to 15 digits

    // Numeric literals with absolute values equal to 2^53 or greater are too large to be represented accurately as integers. Minimum safe Integer: -(2^53 - 1).
console.log(9_999_999_999_999_999) // 16 digits, prints as 10000000000000000
console.log(Number.MAX_SAFE_INTEGER) // 9_007_199_254_740_991

// Tests: isFinite and is NaN
// isNaN(value) converts its argument to a number and then tests it for being NaN. We need to use this because NaN !=NaN; 
    console.log(isNaN(NaN)) // true
console.log(NaN == NaN) // false
    
// isFinite(value) converts its argument to a number and returns true if it is a regular number, not NaN/Infinity/-Infinity
console.log(isFinite(1/3)) // true, regular number
console.log(isFinite("string")) // false, because converts to NaN
console.log(isFinite(Infinity)) // false, because represents infinite number

// parseInt and parseFloat (soft conversion)
// numeric conversion using a unary plus + or Number() is strict. If a value can't be interpreted exactly as a number, it fails and results in NaN:
    console.log(+"100px") // NaN - 100px is not a valid number

// ParseInt and ParseFloat 'read' numbers from a string until they can't. Instead of an error, the total number is returned. The function parseInt returns and integer whilst parseFloat returns a floating point (decimal) number
console.log( parseInt("150px") ) // 150 - stops at 'px'
console.log( parseFloat("2.5em") ) // 2.5 - stops at 'em'
console.log( parseFloat("12.34.56") ) // 12.34 - stops at second invalid decimal
console.log( parseInt("a123") ) // NaN - can't parse the 'a' so stops

// Strings: textual data is stored as strings. uses 16-bit values.
const guestList = `Guests: \n\t- John \n\t- Pete \n\t- Mary`
console.log(guestList)
// Special characters: a backslash preceds a special in character in an 'escape sequence' We can create multiline string by using a newline character, written as \n, which denotes a line break. Use\t for a tab space
     // Guests:
        // - John
        // - Pete
        // - Mary
        

// str.codePointAt(pos) returns the numeric code for the char at the position pos: 
console.log('Z'.codePointAt(0)) // 90

// String.fromCodePoint(code) creates a character by its numeric code: 
console.log(String.fromCodePoint(90)) // Z


// Manipulating Strings:  most used include; checking for length, checking for the existence or location of substrings with the indexOf() or extracting substrings with substring() method.
const string = 'I could be anything you like'
console.log(string.length) // 28 - string is 28 characters long
console.log(string.indexOf('anything')) // 11 - starting at 0 for 'I'
console.log(string.substring(20)) // 'you like' - substring starting at position 20
console.log(string.toUpperCase()) // I COULD BE ANYTHING YOU LIKE
console.log(string + ' plus more') // I could be anything you like plus more

//Other useful strings: 
const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.startsWith('The')) // true - case sensitive
console.log(sentence.endsWith('dog')) // false - needs the full stop (needs to period)
console.log(sentence.split(' ')) // splits into multiple strings using the given separator (the separator " " is space)
// ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.']
console.log(sentence.slice(4, 10)) // quick - gets the section between chars 4 and 10
console.log(sentence.replace('quick', 'slow')) // The slow brown fox jumps over the lazy dog.
console.log(" extra spaces ".trim()) // extra spaces - trims whitespace from start and end


// Arrays: data strucure to store an ordered collections. 
    // Declaration: to crete an array:
        const arr1 = new Array(1,2,3); // constructor, not often used
        const arr2 = [1, 2, 3]; // array literal, much more common
        
console.log(arr1); // [ 1, 2, 3 ] - both do the same
console.log(arr2); // [ 1, 2, 3 ] - both do the same

// Queue: FIFO (first in first out):
// push: appends an element to the end
// shiftL gets an element from the beginning , advancing the queue, so that the second element becomes the first. 
    
// Stack: LIFO (Last in, first out)
// push: adds an element to the end (or top)
// pop: takes an element from the end. 
    
// Pop: extracts the last element and returns it
const fruits = ['Apple', 'Orange', 'Pear']
const lastFruit = fruits.pop() // removes and returns the last item
console.log(lastFruit); // Pear
console.log(fruits); // [ 'Apple', 'Orange' ]

// Push: appends the element to the end
fruits.push('Banana') // adds to the end of the array
console.log(fruits); // [ 'Apple', 'Orange', 'Banana' ]

// Shift: extracts first element of the array and returns it: 
const fruit = ['Apple', 'Orange', 'Pear']
const firstFruit = fruit.shift() // removes and returns the first item
console.log(firstFruit) // Apple
console.log(fruit) // [ 'Orange', 'Pear' ]

//unshift: adds the element to the beginning of an array
fruits.unshift('Banana') // adds to the beginning of the array
console.log(fruits) // [ 'Banana', 'Orange', 'Pear' ]

// Internals: 
const fruits1 = ['Apple', 'Orange', 'Pear']
const fruits2 = fruits1 // refers to same memory location
fruits1.push('Banana') // add new item to the end of fruits1
console.log(fruits2) // [ 'Apple', 'Orange', 'Pear', 'Banana' ]
// fruits2 reflects the same change made to fruits1 since they both reference the same memory location
console.log('fruit at index 0: ' + fruits1[0]) // Apple - accessed using numeric index 0
console.log('fruit at index 1: ' + fruits1[1]) // Orange - accessed using numeric index 1


// Multidimensional Array: 
// store matrices
const matrix = [ // 3x3 matrix
[1, 2, 3], // row 0
[4, 5, 6], // row 1
[7, 8, 9] // row 2
]
console.log(matrix[1][1]) // 5, the value in row 1, column 1
console.log(matrix);

//toString Method: returns a comma separated list
const number1s = [1, 2, 3]
const strings = ["one", "two", "three"]
const empty = []
console.log('Numbers: ' + number1s) // Numbers: 1,2,3
console.log('Strings: ' + strings) // Strings: one,two,three
console.log('Empty: ' + empty) // Empty:
    // Arrays do not have an internal valueOf method, only to String conversion.


// Slice Array: returns new array copying to it all items from index start to end. Neg indexes work backwards from array end
const sliceArray = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
const sliced = sliceArray.slice(0, 3) // start at the beginning, get items up to index 3
const endSliced = sliceArray.slice(-3) // start at the end, get last 3 items

console.log(sliced) // [ 'red', 'orange', 'yellow' ]
console.log(endSliced) // [ 'blue', 'indigo', 'violet' ]console.log(sliceArray) // ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
console.log(sliceArray) // ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']


// Splice: can insert, remove or replace; modifies the original array starting from index start, removes, delet count, then inserts items in their place 
const spliceArray = ["I", "study", "JavaScript", "right", "now"]
const removed = spliceArray.splice(0, 3, "Let's", "dance")

console.log(removed) // [ 'I', 'study', 'JavaScript' ] - 3 elements starting at index 0 are removed
console.log(spliceArray) // [ "Let's", 'dance', 'right', 'now' ] - 2 new elements are inserted

// Concat Method: creates a new array including values from other arrays and additional items
const array1 = [1,2,3]
const array2 = [4,5,6]
const array3 = [7,8,9]
const combined = array1.concat(array2, array3)
console.log(combined) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(combined.concat(10, 11)) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]

// indexOf: looks for item starting index from or 0 if omitted, and returns the index where it was found

const marks = ['A+', 'C+', 'B-', 'D', 'B+', 'C+', 'B-']
let bIndex = marks.indexOf('B-')
let eIndex = marks.indexOf('E')

// first index is always 0
console.log(marks[bIndex] + ' is at index: ' + bIndex) // B- is at index: 2
console.log(eIndex) // -1, since not found

// lastIndexOf: the same as indexOf but it looks from right to left until a match is found
const marks1 = ['A+', 'C+', 'B-', 'D', 'B+', 'C+', 'B-']
let bIndexFirst = marks1.indexOf('B-')
let bIndexLast = marks1.lastIndexOf('B-')

console.log(marks1[bIndexFirst] + ' is first at: ' + bIndexFirst) // B- is first at: 2
console.log(marks1[bIndexLast] + ' is last at: ' + bIndexLast) // B- is last at: 6

// Join Method: returns a string of arr items joined by separator between then. when separator is omitted, defaults to comma
const elements = ['Wind', 'Water', 'Fire', 'Air']

console.log( elements.join() ) // Wind,Water,Fire,Air
console.log( elements.join(' ') ) // Wind Water Fire Air
console.log(elements.join('; ')) // Wind; Water; Fire; Air

//forEach: runs a function for every element of the array. This function can take 3 paraments (named as needed) item, index, and array itself
const hobbits = ['Bilbo', 'Frodo', 'Samwise', 'Merry', 'Pippin']
hobbits.forEach((hobbit, index) => { // usually we use an arrow function here
    console.log(`#${index}: ${hobbit}`) // runs once for every item in array
})

// find method: its arguments can be renames. item is the element; index is its index, array is the array itself. It evaluates a given condition - when true, the matched item is returned
const products = [
    { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' },
    { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' },
    { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants' }
]
// we usually use an arrow function - runs once for each array element until condition is true
let jeans = products.find(product => product.title == 'Denim Jeans') // returns matching item
let shirt = products.find(product => product.category == 'Shirts') // returns matching item
console.log(jeans) // { id: 3, title: 'Denim Jeans', price: 49.95, category: 'Pants' }console.log(shirt) // { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' }

// Filter: returns an array of all matching elements. 
const products2 = [
    { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' },
    { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' },
    { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants' },
    { id: 4, title: "Ladies Tee", price: 25.95, category: 'Shirts' }
]
// we usually use an arrow function - runs once for each element, returns array of matches
let shirts = products2.filter(product => product.category == 'Shirts')
let under50 = products2.filter(product => product.price < 50)
console.log(shirts) // 2 matching items in shirts array
console.log(under50) // 3 matching items in under50 array

// Map: transforms the array by calling the function, which returns a transformation of each item in a new array of results. 
let titles = products.map(product => product.title)
let h2titles = products.map(product => '<h2>'+product.title+'</h2>')
let raisedPrices = products.map(product => ({...product, price: product.price + 5}) )
console.log(titles) // [ 'Sleeveless Tee', "Men's Hoodie", 'Denim Jeans', 'Ladies Tee' ]
console.log(h2titles) // [ '<h2>Sleeveless Tee</h2>', "<h2>Men's Hoodie</h2>", '<h2>Denim Jeans</h2>', '<h2>Ladies Tee</h2>' ]
console.log(raisedPrices) // all prices increased by $5

// Sort: sorts the array in place, changing the element order. Also returns the sorted arrat byt the returned value is usually ignored as arr itself is modified. If compareEn is omitted, elements are sorted as strings
products.sort( (product1, product2) => product1.price - product2.price )
console.log(products) // original array is modified to new low-high price sorting order: 1,4,3,2
products.sort( (p1, p2) => p1.title > p2.title ? 1 : -1 )
console.log(products) // original array is modified to new title sorting order: 3,4,2,1


const numbers = [4, 8, 1, 5, 66, 23, 41]
console.log( numbers.sort() ) // [ 1, 23, 4, 41, 5, 66, 8 ] : string comparisons
console.log( numbers.sort((num1, num2) => num1 - num2) ) // [ 1, 4, 5, 8, 23, 41, 66 ]


/*
const stringNums = ["1", "81", "41", "102", "35", "1004"]
console.log( stringNums.sort() ) // [ '1', '1004', '102', '35', '41', '81' ] : string comparisons
console.log( stringNums.sort((a, b) => a - b) ) // [ '1', '35', '41', '81', '102', '1004' ]

// to keep a sorted array independent to the original we need to clone it first:  
const stringNums = ["1", "81", "41", "102", "35", "1004"]
const sortedNums = [...stringNums].sort()
console.log(stringNums) // [ '1', '81', '41', '102', '35', '1004' ]
console.log(sortedNums) // [ '1', '1004', '102', '35', '41', '81' ]*/

// comparison function provided to sort should take 2 parameters( a and b) and return a positive value if a is greater than b and a neg value of a is less than b. and 0 if they are equal. 
        

// reverse: reverses the order of elements in arr, mutates the arr, and returns a reference to the arr. 
const elements1 = ['Wind', 'Water', 'Fire', 'Air']
const reversed1 = elements1.reverse() // modifies the original
const reversed2 = [...elements1].reverse() // clone first to preserve the original
console.log(elements1) // [ 'Air', 'Fire', 'Water', 'Wind' ]
console.log(reversed2) // [ 'Wind', 'Water', 'Fire', 'Air' ] (reversed twice)


//reduce: when function is applied, the result of the previous function call is passed to the next one as the first argumnet. in the accumulator that stores the combined result of prev. executions. this single aaccumulated value is returned
const products4 = [
    { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts', quantity: 2 },
    { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter', quantity: 3 },
    { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants', quantity: 5 }
]   // initial (below) should be 0 for reliability in calculating totals

const totalPrice = products4.reduce((currentTotal, currentProduct) => currentTotal + currentProduct.price, 0)
const totalQty = products4.reduce((currentQty, currentProduct) => currentQty + currentProduct.quantity, 0)

console.log(totalPrice) // 128.85000000000002
console.log(totalQty) // 10

// chains
const products5 = [
    { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts', quantity: 2 },
    { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter', quantity: 3 },
    { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants', quantity: 5 }
]
// get the titles of all products over $25:
const over25Titles = products5.filter(prod => prod.price > 25).map(prod => prod.title)
console.log(over25Titles) // [ "Men's Hoodie", 'Denim Jeans' ]


// list product ids and titles in descending order of price:
const hiloProducts = [...products5].sort((p1, p2) => p1.price - p2.price).reverse()
                    .map(prod => ({id: prod.id, title: prod.title}))
console.log(hiloProducts)                    
// [ {id: 2, title: "Men's Hoodie"}, {id: 3, title: 'Denim Jeans'}, {id: 1, title: 'Sleeveless Tee'} ]



// iterables objects: special objects (like arrays) which can step through each one in a series of multiple calues in a for..of loop. 
const animalsArr = ['tiger', 'lion', 'elephant', 'giraffe']
for (let animal of animalsArr) { console.log(animal); } // prints each animal in turn

/*const animalObj = { name: 'tiger', genus: 'panthera', class: 'mammal' }
for (let property of animalObj) { console.log(property); } // TypeError: animalObj is not iterable*/

// String, array, map of set, are all built in iterables, so they can be used in a  for of loop
// standard objects are not iterable; custom objects can be made iterable
    

// static method: conversion from array like object or iterable to array (creates a shallow copy)
console.log( Array.from("string") ) // [ 's', 't', 'r', 'i', 'n', 'g' ]
console.log( Array.from(new Set(['cat', 'bat', 'sat', 'cat', 'bat'])) ) // [ 'cat', 'bat', 'sat' ]; set is only unique items
console.log( Array.from(new Map([[1, 'one'], [2, 'two'], [3, 'three']])) ) 
// [ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ]

function makeArray() {
    return Array.from(arguments);
}
console.log( makeArray(1, 2, 3) ); // [ 1, 2, 3 ]




// map: a collection of keyed data items. Very much like an object, objects use only string keys, but a Map allows keys and values of any type. 
// newMap() creates the map
// map.set(key,value) stores the value by the key andreturns the map itself
// map.size: returns the current element count

const exampleMap = new Map() // create new empty map object
    exampleMap.set(1, 'number one') // 'set' adds a new key-value pair to the map
    exampleMap.set('1', 'string one') // maps support keys of different types
    exampleMap.set(true, 'true') // can have boolean keys
    exampleMap.set({name: 'John'}, {phone: '0412345678'}) // object keys also valid
    exampleMap.set('1', 'second string one') // overwrites previous value if key exists

console.log(exampleMap.size) // 4 - number of items in the map
console.log(exampleMap)
// Map(4) { 1 => 'number one', '1' => 'second string one', true => 'true', { name: 'John' } => { phone: '0412345678' } }
          


// map.get(key): returns the value with the matching key
// map.has(key): returns true if key exists
// map.delete(key): removes the value with matching key
// map.clear() removes everything from the map
    





// map.keys(): returns an iterable for keys
// map.values(): returns an iterable for values
// map.entries(): return an iterable for entries (key, value). used by default in for...of loops. 