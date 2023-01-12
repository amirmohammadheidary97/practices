//// 
const object1 = { name: "amir" }
const object2 = { family: "family" }
const object3 = { age: 25 }
////
//******** Merge with Object.assign
const mergedObject1 = Object.assign(object1, object2, object3);
console.log(mergedObject1)
//******** Merge with spread operators
const mergedObject2 = {...object1,...object2,...object3}
console.log(mergedObject2)