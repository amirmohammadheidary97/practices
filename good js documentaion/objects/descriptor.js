const obj = {
  name: "amir",
  average: 12,
};

let descriptor = Object.getOwnPropertyDescriptor(obj, "name");
console.log(descriptor);
/*---------------------------------------*/
/*----------- Define Property -----------*/
/*---------------------------------------*/
Object.defineProperty(obj, "average", {
  value: 17.25,
  writable: false, // obvious !
  enumerable: false, // makes "average" property unvisible in for ... in loop
  configurable: false /* makes us unable to configure the propery later (changing any of writable , enumerable, configurable)*/,
});

obj.average = 18; // does not write
console.log(obj.average); // 17.25

for (const k in obj) {
  console.log(k);
}

/*-----------------------------------------*/
/*----------- Define Properties -----------*/
/*-----------------------------------------*/
Object.defineProperties(obj, {
  id: { value: 1, writable: false, configurable: false, enumerable: true },
  age: { value: 18, writable: false, configurable: false, enumerable: true },
});

// object sealing
Object.preventExtensions(obj);
// Forbids the addition of new properties to the object.
Object.seal(obj);
// Forbids adding/removing of properties. Sets configurable: false for all existing properties.
Object.freeze(obj);
// Forbids adding/removing/changing of properties. Sets configurable: false, writable: false for all existing properties.
// And also there are tests for them:

Object.isExtensible(obj);
// Returns false if adding properties is forbidden, otherwise true.
Object.isSealed(obj);
// Returns true if adding/removing properties is forbidden, and all existing properties have configurable: false.
Object.isFrozen(obj);
// Returns true if adding/removing/changing properties is forbidden, and all current properties are configurable: false, writable: false.
