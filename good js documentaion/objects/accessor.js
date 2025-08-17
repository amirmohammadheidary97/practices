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

Object.defineProperty({}, "age", {
  configurable: false,
  enumerable: false,
  // value:22,
  get() {
    return this.age;
  },
  set(v) {
    this.age += v;
  },
});

obj1.fullname = "amiriiii ddxc";
obj1.age = 45;
obj1.age = 22;
console.log(obj1.fullname); // 'amir heidary'
console.log(obj1.age); // 'amir heidary'
