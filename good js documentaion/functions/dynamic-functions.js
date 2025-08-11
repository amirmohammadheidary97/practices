const dynamicFunction = new Function(
  "name",
  "lastname",
  `
    return "my fullname is "+ name + " " + lastname
  `
);

console.log(dynamicFunction("amir", "heidary")); // 'my fullname is amir heidary'
