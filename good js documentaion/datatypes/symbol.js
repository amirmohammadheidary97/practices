///======================================= ///
///========== Creating A Symbol ===========///
///======================================= ///
//** Symbol is a primitive data type .
//** a Symbol represent a uniqe identifire .
const id0 = Symbol("this is a description");
const id1 = Symbol("this is a description");

console.log(id0.description); // "this is a description"
console.log(id0);

console.log(id0); // Symbol(this is a description)
console.log(id0 === id1); // false

///======================================= ///
///========== Hidden Properties ===========///
///======================================= ///
/* 
 - a symbol could be used as a key of an object . but it will be 
hidden in code suggestion.

- Symbols are skipped by for…in
*/
const age = Symbol();
let user = {
  name: "Amir",
  lastname: "heidary",
  [age]: 2, // way 1 to use symb in object literal
};
const userId = Symbol("User ID");
user[userId] = 1234; // way 2 to add symbol as property to object

console.log(user); // { name: 'Amir', Symbol(User ID): 1234 }
console.log(Object.keys(user)); // [ 'name' ]
console.log(user[userId]); // 1234
user[userId] = 5; // it is overwritable
console.log(user[userId]); // 5
console.log(user[age]); // 2
console.log(user.age); // undefined
console.log(user.userId); // undefined
for (key in user) {
  console.log(key);
}

///======================================= ///
///=========== Global Symbols ============ ///
///======================================= ///

// Read From The Global Registry (a place that contains a list of symbols globally and we can have access to it in everywhere of website or application) .
// * for : specific for global symbols . if the symbol did not exist, it is created
// * keyFor : specific for global symbols . returns the key of given symbol .
// if given symbol was not global it returns undefiend.
let myid = Symbol.for("id");
let idAgain = Symbol.for("id");

console.log(myid === idAgain); // true
console.log(Symbol.keyFor(myid)); // id

///======================================= ///
///=========== System Symbols ============ ///
///======================================= ///

const obj1 = {
  number: 1,
  string: "hoooo",
  from: 0,
  to: 50,
  [Symbol.toPrimitive]: function (e) {
    const types =
      "number" |
      "string" |
      "symbol" |
      "object" |
      "boolean" |
      "function" |
      "bigint" |
      "undefined";

    return this[e];
  },
  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,
      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
  [Symbol.asyncIterator]() {
    return {
      current: this.from,
      last: this.to,
      async next() {
        await new Promise((res) => {
          setTimeout(() => {
            res();
          }, 10);
        });
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
};

// Type Conversion : only number and string conversion works
console.log(String(obj1));
console.log(Number(obj1));
// Iteration
for (const k of obj1) {
  console.log(k); // iterates from 0 to 50
}
// Async Iteration
(async function () {
  for await (let i of obj1) {
    console.log(i);
  }
})();
