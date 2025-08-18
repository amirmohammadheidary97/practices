/*

Prototypal inheritance is a language feature that helps in that.
  
  [[Prototype]]
  In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), that is either null or references another object. That object is called “a prototype”

*/
let animal = {
  walk() {
    if (!this.isSleeping) {
      console.log(`I walk`);
    }
  },
  sleep() {
    this.isSleeping = true;
  },
};

let rabbit = {
  name: "White Rabbit",
  __proto__: animal,
};

//// this
// No matter where the method is found: in an object or its prototype. In a method call, this is always the object before the dot.
const user1 = {
  name: "amir",
  sayname() {
    return this.name;
  },
};

const user2 = {
  name: "ali",
  __proto__: user1,
};

console.log(user1.sayname()); // amir
console.log(user2.sayname()); // ali
