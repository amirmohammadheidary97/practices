const explain = `
Constructor function
Constructor functions technically are regular functions. There are two conventions though:

1.They are named with capital letter first.
2.They should be executed only with "new" operator.

For instance:
`
function User(name) {
    this.name = name;
    this.isAdmin = false;

    this.sayHi = function () {
        console.log("hi")
    }
}

let user = new User("Jack");
user.sayHi()

// console.log(user.name); // Jack