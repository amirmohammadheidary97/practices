/*

F.prototype property is only used when new F is called, it assigns [[Prototype]] of the new object.


*/
function Human(name) {
  this.fname = name;
  console.log(this.fname);
}
const h1 = new Human("mamad");
const h2 = new Human("razaq");
const obj = {
  age: 32,
  constructor: Human,
  getFname() {
    return this.fname;
  },
};
Human.prototype = obj;
const h3 = new Human("amir");
const h4 = new h2.constructor("ali");
const h5 = new h3.constructor("kmkmkm");

console.log(h1.constructor == h2.constructor); // true
console.log(h1.constructor == h3.constructor); // true
console.log(h4.constructor == h3.constructor); // true
console.log(h1.age); // undefiend
console.log(h2.age); // undefiend
console.log(h3.age); // 32
console.log(h3.fname); // 'amir'
console.log(h3.getFname()); // 'amir'
console.log(h4.fname); // 'ali'
console.log(h5); // Human
