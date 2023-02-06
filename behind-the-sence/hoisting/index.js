/*

  . execution context قضیه‌ی هویستینگ برمیگردد به نحوه عملکرد 

 Hoisting is often explained as putting variables and functions to the top of the file but nah, that’s not what’s happening, although the behavior might seem like it 😃

When the JS engine gets our script, the first thing it does is setting up memory for the data in our code. No code is executed at this point, it’s simply just preparing everything for execution. The way that function declarations and variables are stored is different. Functions are stored with a reference to the entire function.



Functions and variables are stored in memory for an execution context before we execute our code. This is called hoisting.

Functions are stored with a reference to the entire functions, variables with the var keyword with the value of undefined, and variables with the let and const keyword are stored uninitialized.

*/
//////////////// EXAMPLE
console.log(sum(1, 3));
console.log(name); // undefined
// console.log(age); // fails : ReferenceError: Cannot access 'sum2' before initialization. => uninitialized
// console.log(sum3(8, 3)); // fails : TypeError: sum3 is not a function beacause it is undefined
// console.log(sum2(4, 3)); // fails : ReferenceError: Cannot access 'sum2' before initialization => uninitialized

function sum(a, b) {
  return a + b;
}
const sum2 = (a, b) => {
  return a + b;
};
var sum3 = (a, b) => {
  return a + b;
};
var name = "amir";
// const age = 25;
