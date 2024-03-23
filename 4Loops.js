/** @format */
// The for loop is used when you know in advance how many times the code should be executed.
for (let i = 0; i <= 5; i++) {
	console.log(i);
}

// The while loop is used when you don't know in advance how many times the code should be executed, but you know the condition under which the loop should continue.
let i = 0;
while (i <= 5) {
	console.log(i);
	i++;
}
// The do...while loop is similar to the while loop, but it always executes the code block at least once before checking the condition.

let j = 0;
do {
	console.log(j);
	j++;
} while (j <= 5);
