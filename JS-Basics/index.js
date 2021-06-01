// This is my first javascript code
console.log('Hellow World!');


// constants
// When need to reasign a variable use `let` otherwise use `const`
const interestRate = 0.3;
console.log('Interest Rate = ', interestRate);

// _________________________________________________________________________________

// Primitives/valueTypes - String, Number, Boolean, Undefined and Null
let name = 'Douglas'; // String Literal
let age = 24; // Number Literal
let isApproved = true; // Boolean Literal
let FirstName = undefined;
let SecondName = null;
console.log(name, age, isApproved,FirstName, SecondName);

// _________________________________________________________________________________

// Dynamically typing
// open the console and type the following starting with the keyword `typeof` 
// followed by the variable name and see the output
typeof name
"string"
name= 34
34
typeof name
"number"
typeof age
"number"
age = 3.8
3.8
typeof isApproved
"boolean"
isApproved = 'yes is am approved'
"yes is am approved"
typeof isApproved
"string"
typeof FirstName
"undefined"
FirstName = 'Douglas'
"Douglas"
typeof FirstName
"string"
typeof SecondName
"object"

// _________________________________________________________________________________

// Reference Types - Object, Array and Functions
// Object literal
let person = {
    name: 'Douglas',
    age: 24
}; 
console.log(person)

// Dot Notation
person.name = 'Obara'
person.age = 30

// Bracket Notation
person['name'] = 'Phanice'
person['age'] = 22;
console.log(person.name, person.age) 

// Array literal
let selectedColors = ['Blue','Red'];

selectedColors[2] = 'Green'; // add item to the array
selectedColors[3] = 1; // add number to the array
console.log(selectedColors);

// _________________________________________________________________________________

// Functions - block of code that performs a task or calculate a value
function greet(name){
    console.log('Hello ' + name);
}

greet('Douglas'); // calling the function
greet('Benard'); // calling the function
greet('Phanice'); // calling the function
greet('Basil'); // calling the function
// argument is the actual value supplied for that parameter e.g `Douglas` while
// the parameter is the name given at the time of declaration e.g `name`.

// _________________________________________________________________________________

// performing a task
function greetFullNames(firstName,secondName){
    console.log('Hello ' + firstName + ' '+ secondName);
}

greetFullNames('Douglas','Obara');

// _________________________________________________________________________________

// fuction calculate a value and return the value
function square(number){
    return number * number;
}

console.log(square(3)); // calling the function to calculate the square of 3 and print on the console
