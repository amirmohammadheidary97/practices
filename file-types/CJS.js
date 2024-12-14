`
CJS is short for CommonJS. Here is what it looks like:

//importing 
const doSomething = require('./doSomething.js'); 

//exporting
module.exports = function doSomething(n) {
  // do something
}



Some of you may immediately recognize CJS syntax from node. That's because node uses CJS module format.
CJS imports module synchronously.
You can import from a library node_modules or local dir. Either by const myLocalModule = require('./some/local/file.js') or var React = require('react'); works.
When CJS imports, it will give you a copy of the imported object.
CJS will not work in the browser. It will have to be transpiled and bundled.
`;
