////
const object1 = { name: "amir" };
const object2 = { family: "family" };
const object3 = { age: 25 };
////
//******** Merge with Object.assign
const mergedObject1 = Object.assign(object1, object2, object3);
console.log(mergedObject1);
//******** Merge with spread operators
const mergedObject2 = { ...object1, ...object2, ...object3 };
console.log(mergedObject2);

// best performant way?
/*
  For small objects: Spread operator and Object.assign() perform similarly well

  =====================
  For large objects: The for-in loop can be slightly faster

  example: function mergeObjects(...objects) {
    const merged = {};
    for (let obj of objects) {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          merged[key] = obj[key];
        }
      }
    }
    return merged;
  }

  =====================
  For deep merges: You'll need a recursive approach, which is inherently slower

  example : function deepMerge(target, source) {
  for (let key in source) {
    if (source[key] instanceof Object && !Array.isArray(source[key])) {
      if (!target[key]) Object.assign(target, { [key]: {} });
      deepMerge(target[key], source[key]);
    } else {
      Object.assign(target, { [key]: source[key] });
    }
  }
  return target;
}
*/

//
