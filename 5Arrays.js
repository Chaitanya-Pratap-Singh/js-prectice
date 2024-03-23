// Creating arrays
let fruits = ['apple', 'banana', 'orange'];
let colors = new Array('red', 'green', 'blue');
let numbers = [];
numbers.push(1);
numbers.push(2);
numbers.push(3);

// Accessing array elements
console.log(fruits[0]); // Output: 'apple'
console.log(fruits[1]); // Output: 'banana'

// Modifying array elements
fruits[1] = 'grapes';
console.log(fruits); // Output: ['apple', 'grapes', 'orange']

// Array methods
numbers.pop(); // Remove element from the end
numbers.unshift(0); // Add element to the beginning
numbers.shift(); // Remove element from the beginning
numbers.splice(2, 1); // Remove one element at index 2
numbers.forEach(num => console.log(num)); // Iterate over elements
let doubledNumbers = numbers.map(num => num * 2); // Create a new array by doubling each element
let filteredNumbers = numbers.filter(num => num > 3); // Create a new array with elements greater than 3

// Array length
console.log(fruits.length); // Output: 3
