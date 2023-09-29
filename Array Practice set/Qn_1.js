const { Readline } = require("readline/promises");

let arr = [1,2,3,4,5];

let a = readline("Enter a number : ");

a = Number.parseInt(a);

a.push(arr);

console.log(arr);
