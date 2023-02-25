const call_explaination = `

call() :

  This method invokes a method (function) by specifying the owner object.
`;

var person = {
  age: 23,
  name: "amir",
  getAge: function () {
    return this.age;
  },
  saySomething: function (message) {
    return this.name + " is " + message;
  },
};
var person2 = { age: 54, name: "mamad" };
// console.log(person.getAge.call(person2));
// console.log(person.saySomething.call(person2, "developer"));

// فانکشن رو به عنوان متدی از آبجکت در نظر میگیره و بهش دسترسی میده که از
// this
// استفاده کنه

const apply_explaination = `

  apply():

    The apply method is similar to the call() method. The only difference is that,
    call() method takes arguments separately whereas, apply() method takes arguments as an array.

`;

const obj1 = {
  name: "amir",
  saySomething: function (message) {
    return this.name + " , " + message;
  },
};
const obj2 = {
  name: "mamad",
};

const ss = obj1.saySomething.apply(obj2, ["my message"]);
// console.log(ss);

// -------------------------------------------------

const bind_explaination = `

bind():

    

`;

var bikeDetails = {
  displayDetails: function (registrationNumber, brandName) {
    return (
      this.name +
      " , " +
      "bike details: " +
      registrationNumber +
      " , " +
      brandName
    );
  },
};

var person1 = { name: "Vivek" };

var detailsOfPerson1 = bikeDetails.displayDetails.bind(
  person1,
  "TS0122",
  "Bullet"
);

// Binds the displayDetails function to the person1 object

// console.log(detailsOfPerson1());
//Returns Vivek, bike details: TS0122, Bullet
// 16. What is the difference between exec
