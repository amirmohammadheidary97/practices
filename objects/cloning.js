//// 
const object1 = { name: "amir", other: { family: "heidary", sdf: "sdfsdf", sdfsdf: { sdfsdf: "sdfsdf" } } }
////
//// cloning with JSON.parse(JSON.stringify(object1))
const clonedObject1 = JSON.parse(JSON.stringify(object1))
// console.log(clonedObject1 === object1)
////
const isPrimitive = (value) =>
    (typeof value === "string" || typeof value === "number" || typeof value === "bigint" || typeof value === "boolean" || typeof value === "undefined")

const deepObjectClone = (obj) => {
    if (typeof obj !== "object") { console.error("the given arg is not type of object"); return obj; }
    const clonedObj = {};
    const objEntries = Object.entries(obj);
    objEntries.forEach(([key, value]) => {
        if (isPrimitive(value))
            clonedObj[key?.toString()] = value;
        if (typeof value === "object") {
            clonedObj[key?.toString()] = deepObjectClone(value);
        }
    });
    return clonedObj;
}

const object2 = deepObjectClone(object1)
object1.other.sdfsdf.sdfsdf = "babak"
// console.log(object1);
// console.log(object2);

const arr1 = [1]
const arr2 = [1]
const arr3 = arr1
// console.log(arr1 === [1]) // false
// console.log(arr1 === arr2) // false
// console.log(arr1 === arr3) // true
console.log(Object([1,2,4,5]).entries().length)
