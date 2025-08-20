const explain = `
  a closure is function that remembers its outer variables and can access theme .
   
  * in javascript all functions are closures , except functions created using new Function.
  these function's [[Environment]] property is set to global environment not current lexical scope .

  Closure : function + lexical environment
  
  قدرت میده برای encapsulation، state management، currying، async handling.

  ولی می‌تونه leak و سوءاستفاده از حافظه هم ایجاد کنه.

  درک Closure یعنی درک اساسی‌ترین بخش‌های JS (execution context، scope chain، lexical environment).
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

/////////// memory leak
function bigClosure() {
  const bigArray = new Array(1000000).fill("data");
  return function () {
    console.log(bigArray[0]);
  };
}
