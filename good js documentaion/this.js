function functionDeclaration() {
  return this;
}
const functionExpression = function () {
  return this;
};
const arrowfunction = () => {
  return this;
};
function functionDeclarationStrict() {
  "use strict";
  return this;
}
const functionExpressionStrict = function () {
  "use strict";
  return this;
};
const arrowFunctionStrict = () => {
  "use strict";
  return this;
};

const obj = {
  functionDeclaration: function () {
    return this;
  },
  functionDeclarationStrict: function () {
    "use strict";
    return this;
  },
  arrowFunction: function () {
    return this;
  },
  arrowFunctionStrict: function () {
    "use strict";
    return this;
  },
};

function functionContainer0() {
  function functionDeclaration() {
    return this;
  }
  return functionDeclaration;
}

function functionContainer1() {
  const functionExpression = function () {
    return this;
  };
  return functionExpression;
}

function functionContainer2() {
  const arrowFunction = () => {
    return this;
  };
  return arrowFunction;
}

//////
////// Function Declaration
console.log(functionDeclaration()); // global this
console.log(functionDeclarationStrict()); // undefined
console.log(obj.functionDeclaration()); // obj
console.log(obj.functionDeclarationStrict()); // obj
console.log(functionContainer1()()); // global this
console.log(new functionContainer1()()); // global this
//////
////// Function Expression
//////
console.log(functionExpression()); // global this
console.log(functionExpressionStrict()); // undefined
console.log(functionContainer2()()); // global this
console.log(new functionContainer2()()); // functionContainer2
//////
////// Arrow Function
//////
console.log(arrowFunctionStrict()); // global this
console.log(arrowfunction()); // global this
console.log(obj.arrowFunction()); // obj
console.log(obj.arrowFunctionStrict()); // obj
console.log(functionContainer1()()); // global this
console.log(new functionContainer1()()); // global this
//////
//////
