
const introduction = `
in JavaScript, objects penetrate almost every aspect of the language.
در جاوا اسکریپت اشیا به همه ابعاد زبان نفوذ میکنند .
an object is a type of data that can store data with key-value structure
یک شی نوعی از داده است که میتواند داده ها را به صورت کلید مقدار ذخیره کند و 
در رفرنسی به داده هایی از جنس اصلی ایجاد میکند .
`;


//******* CREATING AN OBJECT
//
//  "object literal" syntax
const obj1 = { name: "amir" };
//  "object constructor" syntax
const obj2 = new Object("amir");


//******* ACCESSING TO VALUE OF THE OBJECT
// 
// dot notaion
const value = obj1.name
// destructing
const { name } = obj1

// /// property existance test
// console.log("name" in obj1)
// console.log(obj1.hasOwnProperty("name"))


// The "for..in" loop
const person = {
    name: "amir",
    family: "heidary",
    age: 23
}
for (let prop in person) {
    // console.log(prop);
}


//////////// TASKS
// Check for emptiness
const isEmpty = (obj) => {
    const solution1 = () => {
        let count = 0;
        for (let prop in obj) {
            count++;
        }
        return count === 0;
    }
    const solution2 = () => {
        return Object.values(obj).length === 0
    }
    return { solution1, solution2 }
};

// console.log(isEmpty({}).solution1())
// console.log(isEmpty({}).solution2())

/// 