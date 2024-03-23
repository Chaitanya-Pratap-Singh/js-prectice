/** @format */

// Arrow functions provide a shorter syntax for writing function expressions. They are especially useful for anonymous functions and for functions that do not require a separate this context.

// Arrow function
let add = (a, b) => {
	console.log("sum is :", a + b);
};

add(3, 5); // Output: 8

// A callback is a function passed as an argument to another function.

const calculate = (a, b, operations) => {
	return operations(a, b);
};

const result = calculate(3, 4, function (num1, num2) {
	return num1 + num2;
});

console.log(result);

// The setTimeout function is a built-in JavaScript function used to execute a specified function or code snippet after a specified delay, measured in milliseconds.
console.log("Start");
setTimeout(() => {
	console.log("Delayed message");
}, 2000); // Output: "Delayed message" after 2 seconds
console.log("End");

// Callback hell refers to the situation in JavaScript where multiple nested callbacks are used, resulting in code that is difficult to read, understand, and maintain. This commonly occurs in asynchronous programming when handling multiple asynchronous operations one after another.

function getCheese(callback) {
    setTimeout(() => {
        const cheese = "🧀";
        console.log("here is cheese", cheese);
        callback(cheese);
    }, 2000);
}

function makeDough(cheese, callback) {
    setTimeout(() => {
        const dough = cheese + "🫓";
        console.log("here is the dough", dough);
        callback(dough);
    }, 2000);
}

function bakePizza(dough, callback) {
    setTimeout(() => {
        const pizza = dough + "🍕";
        console.log("here is the pizza", pizza);
        callback(pizza);
    }, 2000);
}

getCheese((cheese) => {
    makeDough(cheese, (dough) => {
        bakePizza(dough, (pizza) => {
            console.log("got my pizza", pizza);
        });
    });
});

// pizza -> dough -> cheese
