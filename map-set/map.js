const explaination = `

map is a collection of keyed data just like object

but has a main difference : the "key" can be any type of data . not just string or number.

for example :

const map = new Map()
map.set({name:"amir"},1200)

map has some more methods than pure object:

new Map() => creates the map
map.set(key , value) => sets a key-value
map.get(key) => gets th value by key
map.has(key) => checks if map has the given key
map.delete(key) => deletes key-value by the given key
map.clear() clears !
map.size => returns the length of collection
map.keys() => return an Iterable of keys not array . the iteration over map.keys() is only possible with for .. of loop
map.values() => return an Iterable of keys not array . the iteration over map.keys() is only possible with for .. of loop
map.entries() => return an Iterable of keys not array . the iteration over map.keys() is only possible with for .. of loop
`;

const map = new Map();
const person = { name: "amir" };
map.set(person, { name: "babak" });
console.log(map.get(person))
