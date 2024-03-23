<!-- @format -->

## Intro TO JS

JavaScript is a scripting language that enables you to create dynamically
updated content, control multimedia, animate images, and much more.

In HTML, JavaScript code is inserted between <script> and </script> tags.

or additional files are added through the script tag only

```javascript
<script src="path/to/your/script.js"></script>
```

### Printing in js

```javascript
console.log("anything you want to print");
```

### Variables

Variables are containers for storing data (storing data values). We can declare
a variable by using these keywords

There are 3 types of variables in JS

- let
- var
- const

| Feature      | var      | let   | const          |
| ------------ | -------- | ----- | -------------- |
| Scope        | Function | Block | Block          |
| Hoisting     | Yes      | No    | No             |
| Reassignable | Yes      | Yes   | No (immutable) |

Scope of a Variable: Scope refers to the visibility and accessibility of
variables in different parts of your code. It determines where in your code you
can access a particular variable.

> **Hoisting**: Before running it, JavaScript quickly rearranges things. It
> moves variable and function declarations to the top, like you've written them
> first. So, even if you write them later, JavaScript pretends they're at the
> beginning. This means you can use variables and functions before them being
> declared

```javascript
console.log(x); // Output: undefined
var x = 10;
console.log(x); // Output: 10
// console.log(y); // ReferenceError: Cannot access 'y' before initialization
// console.log(z); // ReferenceError: Cannot access 'z' before initialization
const y = 20;
let z = 30;
console.log(y); // Output: 20
console.log(z); // Output: 30
```

### Rules for variable names in JS

- Variable names must start with either a letter, an underscore \_, or the
  dollar sign $
- Variable names cannot start with numbers.
- JavaScript is case-sensitive.
- Keywords cannot be used as variable names.

### Keywords in JS

![Image](https://media.springernature.com/lw685/springer-static/image/chp%3A10.1007%2F978-1-4842-9250-1_8/MediaObjects/539392_1_En_8_Fig3_HTML.jpg)
