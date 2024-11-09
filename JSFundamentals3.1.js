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
the example code works

b) Add a new method to print the full time final score

c) Add a new object property to keep track of the number of fouls and a method to
increment it, similar but separate to the score. Include the foul count in the half time and
full time console messages

d) Test your object by chaining all the method calls together in different combinations.*/


const basketballGame = {
    score: 0,
    fouls: 0,       //adding foul property

    freeThrow() {
        this.score++;       //increments the score by 1 for a free throw
        return this;
    },

    basket() {
        this.score += 2;       //increments the score by 2 for a basket
        return this;
    },

    threePointer() {
        this.score += 3;          //increments by 3 for a threepointer
        return this;
    },

    foul() {
        this.fouls++;           //increments the foul count by 1
        return this;
    },

    printhalfTime() {                    //half-time score
        console.log(`Halftime score is ${this.score}. Fouls: ${this.fouls}`);
        return this;
    },


    printFinalScore() {                         //final score
        console.log(`Final Score is ${this.score}. Total fouls: ${this.fouls}`);
        return this;
    },

    printThis() {   //debugs
        console.log(this);
        return this;
    },
};
     


//modify each of the above object methods to enable function chaining as below:
basketballGame
//original chain in the problem
    .basket()
    .freeThrow()
    .freeThrow()
    .basket()
    .threePointer()
    .printhalfTime()
//added elements to the original chain
    .foul()
    .basket()
    .threePointer()
    .foul()
    .threePointer()
    .printFinalScore();


/* 8 The object below represents a single city.
a) Write a function that takes an object as an argument and uses a for...in loop to access
and print to the console each of those object properties and their values. Test it using
the sydney object below.

b) Create a new object for a different city with different properties and call your function
again with the new object.*/

const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
};
for (let key in sydney) {
    console.log(key + ": " + sydney[key])
}


const kdrama = {
    name: 'Something in the Rain',
    released: 2018,
    genre: "Romance",
    lead_male: "Jung Hae-in",
    lead_female: "Son Ye-jin",
    rating: "9.8/10"
}
for (let key in kdrama) {
    console.log("key: " + key); //prints the key properties
    console.log("value: " + kdrama[key]); //prints just the values
    console.log(key + ": " + kdrama[key]) //prints the key:value pair 
}

/* 9
Use the following variables to understand how JavaScript stores objects by reference.
a) Create a new moreSports variable equal to teamSports and add some new sport
values to it (using push and unshift)

b) Create a new dog2 variable equal to dog1 and give it a new value

c) Create a new cat2 variable equal to cat1 and change its name property
*/

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let moreSports = teamSports;  //new moreSports variable
moreSports.push('Soccer'); //pushing a new sports to the end of the team sports object
moreSports.unshift("Basketball"); //adding a new sport to the beginning 
console.log(moreSports);//[ 'Basketball', 'Hockey', 'Cricket', 'Volleyball', 'Soccer' ]
console.log(teamSports); //[ 'Basketball', 'Hockey', 'Cricket', 'Volleyball', 'Soccer' ]


let dog1 = 'Bingo';
let dog2 = dog1;
dog2 = 'Max'; //adding new value
console.log(dog1); // Bingo
console.log(dog2);// Max

let cat1 = { name: 'Fluffy', breed: 'Siberian' };
let cat2 = cat1;
//cat2.name = 'Snickers';
console.log(cat2); //{ name: 'Snickers', breed: 'Siberian' }

//d) Print the original teamSports, dog1 and cat1 variables to the console. Have they changed? Why?

console.log(teamSports);//[ 'Basketball', 'Hockey', 'Cricket', 'Volleyball', 'Soccer' ]; changed since I pushed and unshifted into the object
console.log(dog1); //Bingo doesn't change because the string is stored by value and is primitive. When values are primitive, they are stored independently
console.log(cat1); //{ name: 'Snickers', breed: 'Siberian' } It changes because cat1 points to the same memory location as cat2 and the object reference was reassigned. 

//e) Change the way the moreSports and cat2 variables are created to ensure the originals remain independent 
let teamSports2 = ['Hockey', 'Cricket', 'Volleyball'];
let moreSports2 = teamSports2;
moreSports2 = ['Basketball', 'Hockey', 'Cricket', 'Volleyball', 'Soccer'];
console.log(moreSports2); //[ 'Basketball', 'Hockey', 'Cricket', 'Volleyball', 'Soccer' ]
console.log(teamSports2); //[ 'Hockey', 'Cricket', 'Volleyball' ]

cat2 = "River";
console.log(cat2); //River
console.log(cat1); //{ name: 'Fluffy', breed: 'Siberian' }

/* 10 The following constructor function creates a new Person object with the given name and
age values.
a) Create a new person using the constructor function and store it in a variable

b) Create a second person using different name and age values and store it in a separate
variable

c) Print out the properties of each person object to the console

d) Rewrite the constructor function as a class called PersonClass and use it to create a
third person using different name and age values. Print it to the console as well.

e) Add a canDrive method to both the constructor function and the class that returns true
if the person is old enough to drive. */

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive = this.age >= 16;     //adding canDrive method
    return this;
}


const person1 = new Person('Rikki', 30);
console.log(person1);
console.log("Person 1:", person1); //printing the properties

const person2 = new Person('Xander', 12);
console.log(person2);
console.log("Person 2:", person2); //printing the properties


class PersonClass{
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
        this.canDrive = this.age >= 16;     //added CanDrivemethod
        return this;
    }
}

let person3 = new PersonClass('Batman', 45);
console.log(person3);
