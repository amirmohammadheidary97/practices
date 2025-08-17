const explains = `
  call : define this for a function on call time . func.call(this, ...arguments) arguments is an array

  apply : define this for a function on call time . func.call(this, arguments) arguments is an array-like

  bind : set this for a function
  `;

// difference :
function has() {
  console.log(arguments[0] + "," + arguments[1]); // works because args is an array-like
  console.log([].join.call(arguments)); // works
  console.log([].join.apply(arguments)); // works
  console.log(arguments.join(",")); // does not works because args is an array-like
}
has(1, 2);

// bind :
function name(params) {
  console.log(this.id); // 1
}
const object = {
  id: 1,
  name: "amir",
  sayname: function () {
    console.log(this.name);
  },
};

name = name.bind(object);
name();
//
let newsayname = object.sayname;
newsayname = newsayname.bind(object);
newsayname();
