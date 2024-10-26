// What are the results of these expressions? (answer first, then use console.log() to check)
    //Note: My original answer is teh first comment, the console log: [result] is the answer after running the expressions
        
"" + 1 + 0 // 1  //console log: 10
console.log("" + 1 + 0);

"" - 1 + 0 // -1// console log: -1
console.log("" - 1 + 0);

true + false // undefined// console log: 1
console.log(true + false);

!true //false //console log: false
console.log(!true);

6 / "3" // 2 // console log: 2
console.log(6 / "3");

"2" * "3" // 6 // console log: 6
console.log("2" * "3");

4 + 5 + "px" // 9px // console log: 9px
console.log(4 + 5 + "px");

"$" + 4 + 5 // $45 // console log: $45
console.log("$" + 4 + 5);

"4" - 2 // 2 // console log: 2
console.log("4" - 2);

"4px" - 2 // null - 2// console log: NaN
console.log("4px" - 2);

" -9 " + 5 // -4// console log: -95
console.log("-9" + 5);

" -9 " - 5 // -14 // console log: -14
console.log("-9" - 5);

null + 1 // 1 // console log: 1
console.log(null + 1);

undefined + 1 // NaN// console log: NaN
console.log(undefined + 1);

undefined == null // true // console log: true
console.log(undefined == null);

undefined === null //false // console log: false
console.log(undefined === null);

" \t \n" - 2 // \t\n-2 // console log: -2
console.log("\t \n" - 2);

// 2. Which of the below are not giving the right answer? Why are they not correct? How can we fix them?

let three = "3"
let four = "4"
let thirty = "30" 

//what is the value of the following expressions?
let addition = three + four //this is not giving the right answer because Js automatically concatenates two strings when they're added. 
                            //should instead let three = 3 and four = 4 or can do console.log(addition - 27)
console.log(addition -27);
let multiplication = three * four
console.log(multiplication);
let division = three / four
console.log(division);
let subtraction = three - four
console.log(subtraction);
let lessThan1 = three < four
console.log(lessThan1);
let lessThan2 = thirty < four //this is not giving the right answer; change to four < thirty
console.log(lessThan2);

// 3. Which of the following console.log messages will print? Why?

if (0) console.log('#1 zero is true')   //doesn't print because zero reads as false - the string has no value
if ("0") console.log('#2 zero is true')  // prints because it's true and is a non-empty string
if (null) console.log('null is true')   // doesn't print because null reads as false -  no value entered
if (-1) console.log('negative is true') //prints because true; non-zero value
if (1) console.log('positive is true') //prints becuase  true; non-zero value

//4. Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?
let a = 4, b = 7;
let result = `${a} + ${b} is `;
result += (a + b < 10) ? 'less than 10' : 'greater than 10';    //+= is a shorthand for addition or string concatenation -
                                                                // takes the current value and add or appends a new value to it 
console.log(result);

/*if (a + b < 10) {
    result += 'less than 10';
} else {
    result += 'greater than 10'; 
} */


//5. Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. Test each version to make sure they work the same.

/*function getGreeting(name) {
    return 'Hello ' + name + '!';
    
}*/

//Expression Syntax: 

const getGreeting = function (name) {
    return 'Hello ' + name + "!";
};
console.log(getGreeting("Rikki"));

//Arrow Syntax

const getGreeting2 = name => `Hello ${name}!`;
console.log(getGreeting2('Rikki'));

/* 6. a) Complete the inigo object by adding a lastName property and including it in the greeting.
      b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead prints his famous catch phrase to the console. HINT: see
            https://www.imdb.com/title/tt0093779/characters/nm0001597.
      c) Update getCatchPhrase to use arrow function syntax and a conditional operator. */
      
const westley = {
    name: 'Westley',
    numFingers: 5
}

const rugen = {
    name: 'Count Rugen',
    numFingers: 6
}

const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',

    greeting(person) {
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;

        console.log(greeting + this.getCatchPhrase(person));
    },
    
    getCatchPhrase:person => person.numFingers === 5
            ? 'Nice to meet you.'
            :'YOU KILLED MY FATHER! PREPARE TO DIE!'
        }
    

inigo.greeting(westley)
inigo.greeting(rugen)



/*7. The following object represents a basketball game and keeps track of the score as the
game progresses.
a) Modify each of the methods so that they can be ‘chained’ together and the last line of
the example code works//



b) Add a new method to print the full time final score
c) Add a new object property to keep track of the number of fouls and a method to
increment it, similar but separate to the score. Include the foul count in the half time and
full time console messages
d) Test your object by chaining all the method calls together in different combinations.*/

//a:


const basketballGame = {
    score: 0,
    freeThrow() {
        this.score++;
    },

basket() {
    this.score += 2;
    },

threePointer() {
    this.score += 3;
    },

halfTime() {
        console.log('Halftime score is '+this.score);
    }
}

printThis(){
    console.log(this);
    return this; 
}

printScore() {
    console.log($(this.score}))



//modify each of the above object methods to enable function chaining as below:
basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();
