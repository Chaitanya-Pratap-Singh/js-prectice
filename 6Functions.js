/** @format */

// Function Declaration
function greet(name) {
	console.log("Hello, " + name + "!");
}

// Calling the function
greet("John"); // Output: Hello, John!

// Using Function Parameters and Return Values
function add(a, b) {
	return a + b;
}

let result = add(3, 5);
console.log(result); // Output: 8

// Immediately Invoked Function Expression (IIFE)
(function () {
	let message = "Hello!";
	console.log(message);
})(); // Output: Hello!
