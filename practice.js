//function declaration                      //naming the function
function greet() {                          //every thing in the curly braces will be code that the function runs
    console.log('hello there');             //function is only defined here, has not been called
}

greet();    //using the functiion name and prantheses, calls/invokes the function

// function expression
const speak = function() {                    //const can only be used once and will not change
                                                //the name of the function is now the name of the const
console.log('good day')
};                          //semicolons are only used after function expressions

speak()     //calling the function

// Passing Values to the Function

//const speak2 = function (name) {            //name is a local variabe that can be used in the code block and output it
    //console.log(`good day ${name}`);           //name should be  defined. 

//};
speak2('mario');                            //entering mario, is defining the `name` variable
//mario is an argument/parameter
                                       
// Passing multiple values: 
const hello = function (time, title) {
    console.log(`good ${time} ${title}`);  
};
hello('morning', 'mario');

//using the Return Key

/*const calcArea = function (radius) {
    let area = 3.14 * radius**2;
    console.log(area);                  //when using console.log (area) is just local. we won't be able to call (area) again or do function (area)
};*/


const calcPer = function (l , w) {
    let per = 2 * (l + w); 
    return per;               //instead we should return. In this case, per will be returned to us so that we can use it 'globally'
    }                              //  but we have to take the value and store it in order to use it gobally SO - 
                                                        
const per = calcPer(8, 8);              //SO create const per = the function we're calling; now per is 'global
console.log(per);
                                           

// Let's clean-up the function expression even further. We can replace 'let' with return so that the result returns directly

const calcPer2 = function (l, w) {
    return 2 * (l + w);
}
const per2 = calcPer2(8, 8);
console.log(per2);


// arrow function: 
// -doesn't use the function keyword, set it equal to ()
// () holds the parameters

const calcArea = (radius) => {
return 3.14 * radius**2
};
const area = calcArea(5);
console.log(area)

// Practicing Arrow Functions

//const greet2 = function() {
   // return 'hello, world';
//};

const greet2 = () => {
    return ('hello, world');
};
const result = greet2();
console.log(result);

//Function reads as such: 
// the const (bill) set to a function that takes in 2 parameters. the local variable - total is cycling through products(could be an array). 
    // so for each product were getting a product value and any kind of tax
// then in the end the total will be returned 
        
/*const bill = function (products, tax) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    };
    return total;
};
console.log(bill([10,15,30], 0.2));*/           //for my products I've inserted random prices; and 1 tax 


const bill1 = (products, tax) => {
let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    };
    return total;
};
console.log(bill1([10, 15, 30], 0.2));


//function

const meet = () => 'hello';

let resultONE = meet();
console.log(resultONE);


//Methods

const n = 'Rikki';
let resultTwo = n.toUpperCase();
console.log(resultTwo);



