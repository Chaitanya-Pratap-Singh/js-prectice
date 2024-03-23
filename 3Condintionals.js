/** @format */

// he if statement evaluates a condition and executes a block of code if the condition is true. You can also include an else statement to execute a different block of code if the condition is false.

let age = 20;

if (age >= 18) {
	console.log("You are an adult.");
} else {
	console.log("You are a minor.");
}

// The if-else-if statement allows you to check multiple conditions sequentially. If the first condition is false, it checks the next condition, and so on.
let num = 10;

if (num > 0) {
	console.log("Number is positive.");
} else if (num < 0) {
	console.log("Number is negative.");
} else {
	console.log("Number is zero.");
}

// Nested if statements allow you to place one if statement inside another if statement. This is useful for more complex decision-making scenarios.
let x = 10;
let y = 5;

if (x > 0) {
	if (y > 0) {
		console.log("Both x and y are positive.");
	} else {
		console.log("x is positive, but y is not.");
	}
} else {
	console.log("x is not positive.");
}

// The switch statement evaluates an expression and executes a block of code associated with a matching case label. It provides an alternative way to structure multiple if...else statements.

let day = "Monday";

switch (day) {
	case "Monday":
		console.log("Today is Monday.");
		break;
	case "Tuesday":
		console.log("Today is Tuesday.");
		break;
	// More cases...
	default:
		console.log("Today is not Monday or Tuesday.");
}

// The ternary operator, also known as the conditional operator, provides a concise way to write conditional statements in JavaScript. It's often used as a shorthand for simple if...else statements.

let Age = 20;
let status = (age >= 18) ? 'Adult' : 'Minor';

console.log(status); // Output: Adult
