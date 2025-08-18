/*

The first kind is data properties. We already know how to work with them. All properties that we’ve been using until now were data properties.

The second type of property is something new. It’s an accessor property. They are essentially functions that execute on getting and setting a value, but look like regular properties to an external code.

*/

//// Getters AND Setters ////
const obj1 = {
  name: "amir",
  lastname: "heidary",
  get fullname() {
    return `${this.name} ${this.lastname}`;
  },
  set fullname(value) {
    [this.name, this.lastname] = value.split(" ");
  },
  get age() {
    return this._age_;
  },
  set age(value) {
    if (value <= 40 || value >= 0) {
      this._age_ = value;
    } else {
      return "impossible";
    }
  },
};

const obj3 = {};
Object.defineProperty(obj3, "age", {
  configurable: false,
  enumerable: false,
  get() {
    return this._age;
  },
  set(v) {
    if (this._age === undefined) {
      this._age = 0;
    }
    this._age += v;
  },
});

obj3.age = 5;
obj3.age = 3;
console.log(obj3.age); // 8
obj1.fullname = "amiriiii ddxc";
obj1.age = 45;
obj1.age = 22;
console.log(obj1.fullname); // 'amir heidary'
console.log(obj1.age); // 'amir heidary'
