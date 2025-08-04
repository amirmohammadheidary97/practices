const exp = `
in a language with first-class functions , functions are treated like any other variable . we can pass them as arguments to other functions , return them from other functions , and assign them to variables .

in javascript , functions are first-class citizens .

EXAMPLE :

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const subtract = (a, b) => a - b;
const calculate = (a, b, operation) => operation(a, b);
const result = calculate(10, 5, add);
console.log(result);

const result2 = calculate(10, 5, multiply);
console.log(result2);

const result3 = calculate(10, 5, divide);
console.log(result3);

const result4 = calculate(10, 5, subtract);
console.log(result4);

const result5 = calculate(10, 5, (a, b) => a + b);
console.log(result5);







  `;
