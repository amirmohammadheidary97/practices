const explain = `
  a closure is function that remembers its outer variables and can access theme .
   * in javascript all functions are closures , except functions created using new Function.
  these functions [[Environment]] property is set to global environment not current leical scope .
`;

function f1() {
  const name = "amir";
  const f = new Function(
    `
    return("my name is " +name);
    `
  );
  return f;
}

function f2() {
  const name = "amir";
  const f = function () {
    return "my name is " + name;
  };
  return f;
}

console.log(f1()()); // error : name is not defined
console.log(f2()()); // my name is amir
