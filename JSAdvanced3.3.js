/* JS Advanced Lab 3.2 */

/* 
1. makeCounter below is a decorator function which creates and returns a function that
increments a counter.
a) Create a second counter counter2 using the makeCounter function and test to see if
it remains independent to counter1
b) Modify makeCounter so that it takes an argument startFrom specifying where the
counter starts from (instead of always starting from 0)
c) Modify makeCounter to take another argument incrementBy, which specifies how
much each call to counter() should increase the counter value by.*/

/*function makeCounter() {
    let currentCount = 0;

return function() {
    currentCount++;
    console.log(currentCount)
    return currentCount;
    };   
}*/

let counter1 = makeCounter();
let counter2 = makeCounter();

counter1(); // 1
counter1(); // 2
counter2();
counter2();
counter2();


function makeCounter(startFrom = 0, incrementBy = 1) {
    let currentCount = startFrom; 

    return function() {
        currentCount += incrementBy; 
        console.log(currentCount);
        return currentCount;
    };
}

let counter3 = makeCounter(7);
counter3(); //8
counter3(); //9
counter3(); //10

let counter4 = makeCounter(0, 15);
counter4(); //15
counter4(); //30
counter4();// 45
counter4(); //60


/* 2 
The following delayMsg function is intended to be used to delay printing a message until
some time has passed.
a) What order will the four tests below print in? Why? 
Will print 4, 3, 2, and then 1 based on the ms. 


b) Rewrite delayMsg as an arrow function*/
const delayMsg = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`);
};

/*
c) Add a fifth test which uses a large delay time (greater than 10 seconds)
*/
/*
d) Use clearTimeout to prevent the fifth test from printing at all.*/

/*function delayMsg(msg)
{
console.log(`This message will be printed after a delay: ${msg}`)
}*/
let cancelled = setTimeout(delayMsg, 11000, '#5 Delayed by 11 secs');
clearTimeout(cancelled);

setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all');
//setTimeout(delayMsg, 11000, '#5 Delayed by 11 secs');

/*
3. 
a) Create a debounce(func) decorator, which is a wrapper that takes a function func and
suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second
pause, the most recent call to func should be executed and any others ignored.*/
function debounce(func, ms = 1000) {
    let timeout;
    
    return function (...args) {
        clearTimeout(timeout);
        
        timeout = setTimeout(() => {
            func(...args); 
        }, ms);
    };
}
/*
b) Extend the debounce decorator function to take a second argument ms, which defines the
length of the period of inactivity instead of hardcoding to 1000ms

c) Extend debounce to allow the original debounced function printMe to take an argument
msg which is included in the console.log statement.*/ 

function printMe() {
console.log('printing debounced message')
}
printMe = debounce(printMe), 1000; 

//fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
setTimeout( printMe, 100);
setTimeout( printMe, 200);
setTimeout(printMe, 300);

/* 4
The Fibonacci sequence of numbers is a famous pattern where the next number in the
sequence is the sum of the previous 2.
e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.

a) Write a function printFibonacci() using setInterval that outputs a number in
the Fibonacci sequence every second.*/
function printFibonacci(limit) {
    let a = 0;
    let b = 1;
    let count = 0;
    

    const intervalId = setInterval(() => {
        if (count >= limit) {
            clearInterval(intervalId); 
        } else {
            console.log(a); 
            let next = a + b; 
            a = b;
            b = next;
            count++;
        }
    }, 1000); // 1000ms delay (1 second)
}
//printFibonacci(4);

/*
b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
calls to do the same thing*/
function printFibonacciTimeouts(limit, a = 0, b = 1, count = 0) {
    if (count >= limit) return; 
    
    console.log(a);
    
    
    setTimeout(() => {
        printFibonacciTimeouts(limit, b, a + b, count + 1); 
    }, 1000);
}

printFibonacci(7);
/*

c) Extend one of the above functions to accept a limit argument, which tells it how many
numbers to print before stopping.*/


/* The following car object has several properties and a method which uses them to print a
description. When calling the function normally this works as expected, but using it from
within setTimeout fails. Why?*/
let car = {
    make: "Porsche",
    model: '911',
    year: 1964,

    description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
};
car.description(); //works
//setTimeout(car.description, 200); //fails because it's no longer referencing the car object


/*
a) Fix the setTimeout call by wrapping the call to car.description() inside a
function*/
setTimeout(() => car.description(), 200);
/*

b) Change the year for the car by creating a clone of the original and overriding it*/
let carClone = { ...car, year: 2024 };
console.log(carClone);
/*
c) Does the delayed description() call use the original values or the new values from
b)? Why?
It uses the original values because  setTimeout is using the original car object and not the carClone object. 


d) Use bind to fix the description method so that it can be called from within
setTimeout without a wrapper function*/
let boundDescription = car.description.bind(car);
setTimeout(boundDescription, 200);

/*
e) Change another property of the car by creating a clone and overriding it, and test that
setTimeout still uses the bound value from d)*/

let carClone2 = { ...car, model: '112', year: 1994 };
console.log(carClone2);
setTimeout(boundDescription, 200);

/*
6.
Use the Function prototype to add a new delay(ms) function to all functions, which can
be used to delay the call to that function by ms milliseconds.

function multiply(a, b) {
console.log( a * b );
}
multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds*/



/*
a) Use the example multiply function below to test it with, as above, and assume that all
delayed functions will take two parameters*/
Function.prototype.delay = function(ms) {
  
  let func = this;
  return function(...args) {
    setTimeout(() => {
      func.apply(this, args); 
    }, ms);
  };
};

function multiply(a, b) {
console.log( a * b );
}
multiply.delay(500)(5, 5)

/*
b) Use apply to improve your solution so that delayed functions can take any number of
parameters*/


/*
c) Modify multiply to take 4 parameters and multiply all of them, and test that your
delay prototype function still works.*/

function multiply1(a, b, c, d) {
  console.log(a * b * c * d);
}
multiply1.delay(500)(2, 3, 4, 5);


/*
7. 
The following DigitalClock class uses an interval to print the time every second once
started, until stopped.*/

class DigitalClock {
constructor(prefix) {
this.prefix = prefix;
}
display() {
let date = new Date();
//create 3 variables in one go using array destructuring
let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];

if (hours < 10) hours = '0' + hours;
if (mins < 10) mins = '0' + mins;
if (secs < 10) secs = '0' + secs;
console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
}
stop() {
clearInterval(this.timer);
}
start() {
this.display();
this.timer = setInterval(() => this.display(), 1000);
}
}
const myClock = new DigitalClock('my clock:')
//myClock.start()
/*
a) Create a new class PrecisionClock that inherits from DigitalClock and adds the
parameter precision – the number of ms between 'ticks'. This precision parameter
should default to 1 second if not supplied.*/

class PrecisionClock extends DigitalClock {
  constructor(prefix, precision = 1000) {
    super(prefix);
    this.precision = precision;
  }


  start() {
    this.display();
    this.timer = setInterval(() => this.display(), this.precision);
  }
}

// Test the PrecisionClock
const myPrecisionClock = new PrecisionClock('Precision clock:', 500); // ticks every 500ms
//myPrecisionClock.start();


/*
b) Create a new class AlarmClock that inherits from DigitalClock and adds the
parameter wakeupTime in the format hh:mm. When the clock reaches this time, it
should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should
default to 07:00 if not supplied.*/

class AlarmClock extends DigitalClock {
  constructor(prefix, wakeupTime = "07:00") {
    super(prefix); // Call the parent constructor
    this.wakeupTime = wakeupTime;
  }

 
  start() {
    this.display();
    this.timer = setInterval(() => {
      this.display();
      let date = new Date();
      let [hours, mins] = [date.getHours(), date.getMinutes()];
      let currentTime = `${hours < 10 ? '0' + hours : hours}:${mins < 10 ? '0' + mins : mins}`;

      if (currentTime === this.wakeupTime) {
        console.log('Wake Up!');
        this.stop();
      }
    }, 1000);
  }
}

// AlarmClock
const myAlarmClock = new AlarmClock('Alarm clock:', '12:00'); 
//myAlarmClock.start();

/* 8
Using the following starter code, create a decorator function to validate function arguments
as strings. Test it by decorating the given orderItems function below.*/
/*function orderItems(itemName) {
return `Order placed for: ${itemName}`;
}*/
// create a decorated version of the original function
const validatedOrderItem = validateStringArg(orderItems);
//console.log(validatedOrderItem("Apple Watch")); // should run the function
//console.log(validatedOrderItem(123)); // should throw an error

/*
a) Create a decorator function validateStringArg(fn) which will validate an
argument passed to fn to ensure that it is a string, throwing an error if not*/

/*function validateStringArg(fn) {
  return function(...args) {
   
    for (let arg of args) {
      if (typeof arg !== 'string') {
        throw new Error('Argument must be a string');
      }
    }
    return fn(...args);  
  };
}

 
console.log(validatedOrderItem("Apple Watch"));*/

/*
b) Extend orderItems to use the ... rest operator, allowing multiple item name
arguments, and include them all in the returned string*/
function orderItems(...itemNames) {
  return `Order placed for: ${itemNames.join(', ')}`;
}

console.log(validatedOrderItem("Apple Watch", "MacBook Pro", "GalaxyS24"));


/*
c) Extend the decorator function to validate as strings all arguments passed to fn*/

function validateStringArg(fn) {
  return function(...args) {
    
    for (let arg of args) {
      if (typeof arg !== 'string') {
        throw new Error('All arguments must be strings');
      }
    }
    return fn(...args);  
  };
}
console.log(validatedOrderItem("Apple Watch", "MacBook Pro", "iPhone 8"))
/*
d) When testing the decorated function, use try-catch blocks to handle errors thrown for
non-string arguments*/
try {
  console.log(validatedOrderItem("Apple Watch", "MacBook Pro", "iPhone 13")); 
} catch (e) {
  console.error(e.message);
}

// Test 2: Non-string argument
try {
  console.log(validatedOrderItem(123, "MacBook Pro", "iPhone 13")); 
} catch (e) {
  console.error(e.message);  
}

// Test 3: Only non-string argument
try {
    console.log(validatedOrderItem(123));
} catch (e) {
    console.error(e.message);
}

/* 9
We can delay execution of a function using setTimeout, where we need to provide both
the callback function and the delay after which it should execute.

a) Create a promise-based alternative randomDelay() that delays execution for a
random amount of time (between 1 and 20 seconds) and returns a promise we can use
via .then(), as in the starter code below*/




/*
b) If the random delay is even, consider this a successful delay and resolve the promise,
and if the random number is odd, consider this a failure and reject it
c) Update the testing code to catch rejected promises and print a different message
d) Try to update the then and catch messages to include the random delay value*/

function randomDelay() {
  return new Promise((resolve, reject) => {
    
      const delayTime = Math.floor(Math.random() * 20) + 1;
        
      setTimeout(() => {
        if (delayTime % 2 === 0) {
        resolve(delayTime);
      } else {
        reject(delayTime);
      }
    }, delayTime * 1000); 
  });
}

//randomDelay().then(() => console.log('There appears to have been a delay.'));
randomDelay()
  .then((delayTime) => {
    console.log(`There appears to have been a delay of ${delayTime} seconds. Success!`);
  })
    
  .catch((delayTime) => {
    // If the promise is rejected (odd delay)
    console.log(`The delay of ${delayTime} seconds failed.`);
  });

  