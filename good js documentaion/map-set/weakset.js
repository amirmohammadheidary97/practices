const explain = `
- only have these methods :  has, add , delete .
- only objects can be added (not primitives).

`;

let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };

visitedSet.add(john);
visitedSet.add(pete);
visitedSet.add(john);

console.log(visitedSet.has(john)); // true
console.log(visitedSet.has(pete)); // true
john = null;
console.log(visitedSet.has(john)); // false
