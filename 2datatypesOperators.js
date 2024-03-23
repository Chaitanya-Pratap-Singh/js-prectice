/** @format */

// A data type, in programming,is a classification that specifies which type of valuea variable has and what type of mathematical, relational or logical operations can be applied to it without causing an error.

// Primitive Data Types
let greeting = "Hello, world!"; // String "double quotes or single quotes are used to declare the string "
let number = 25; // Number
let isstudent = true; // Boolean
let name; // Undefined
let car = null; // Null
const id = Symbol("id"); // Symbol

// Non-primitive Data Types
let person = { name: "John", age: 30 }; // Object
let numbers = [1, 2, 3, 4, 5]; // Array
function add(a, b) {
	return a + b;
} // Function

// typeof age; // this is used to find out the datatype of the variable

/*Important Notes: JavaScript considers 0 as false and all non-zero numbers as true.
And, if true is converted to a number, the result is always 1.
String() takes null and undefined and converts them to string.
In JavaScript, undefined, null, 0,NaN,''converts to false. 
All other values give true.
 */

// Arithmetic Operators
let x = 10;
let y = 5;
console.log(x + y); // Addition: 15
console.log(x - y); // Subtraction: 5
console.log(x * y); // Multiplication: 50
console.log(x / y); // Division: 2
console.log(x % y); // Modulus: 0
console.log(x ** y); // Exponentiation: 100000

// Assignment Operators
let a = 10;
a += 5; // Equivalent to a = a + 5
console.log(a); // Output: 15

// Comparison Operators
let p = 10;
let q = 5;
console.log(p > q); // Greater than: true
console.log(p < q); // Less than: false
console.log(p >= q); // Greater than or equal to: true
console.log(p <= q); // Less than or equal to: false
console.log(p === q); // Equal to: false
console.log(p !== q); // Not equal to: true

// Logical Operators
let isStudent = true;
let isWorker = false;
console.log(isStudent && isWorker); // Logical AND: false
console.log(isStudent || isWorker); // Logical OR: true
console.log(!isStudent); // Logical NOT: false

// Unary Operators
let num = 5;
console.log(-num); // Unary minus: -5
console.log(+num); // Unary plus: 5
console.log(++num); // Increment: 6
console.log(--num); // Decrement: 5

// Conditional (Ternary) Operator
let age = 20;
let status = (age >= 18) ? 'Adult' : 'Minor';
console.log(status); // Output: Adult
