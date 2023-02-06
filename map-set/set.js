/*



A Set is a special type collection – “set of values” (without keys), where each value may occur only once.
یک کالکشن از داده ها بدون کلید و غیرتکراری


new Set([iterable]) – creates the set, with optional iterable (e.g. array) of values for initialization.
set.add(value) – adds a value (does nothing if value exists), returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.


*/

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

// array to set
const set = new Set(values);
console.log(set);
setTimeout(() => {
  set.add(1);
  console.log(set.size);
}, 0);
console.log(set.size);
set.forEach((setMember) => {
  console.log(setMember);
});
// set to array
console.log(Array.from(set)[0]);
