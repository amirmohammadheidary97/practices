// Object.create()

let animal = {
  walk() {
    if (!this.isSleeping) {
      console.log(`I walk`);
    }
  },
};

// Way 1
// const rabbit = {
//   jump() {
//     this.isJumping = true;
//   },
//   __proto__: animal
// }
// Way 2
let rabbit = Object.create(animal, {
  jump: {
    value: function () {
      this.isJumping = true;
    },
  },
});
console.log(rabbit);

// this sets __proto__ = null; now its free and could be set anything .
// the entity does not have
const entity = Object.create(null);
console.log(entity.toString()); // entity.toString is not a function
