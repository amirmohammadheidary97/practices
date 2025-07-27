const name1 = "amir";
const name2 = name1;
const name3 = "amir";
//////
console.log("name1 === name2", name1 === name2) // true
console.log("name1 === name3", name1 === name3) // true
//////
const obj1 = { name: "amir" };
const obj2 = obj1;
const obj3 = { name: "amir" }; // یه آبجکت جدید میسازه پس یه آدرس جدید میسازه و نسبت میده به متغیرمون پس متغیر اولیه دیگه با متغیر دومیه برابر نیست چون آدرسی که اینا دارن بهش اشاره میکنه متفاوته .
//////
console.log("obj1 === obj2", obj1 === obj2) // true
console.log("obj1 === obj3", obj1 === obj3) // false
//////