`
AMD

AMD stands for Asynchronous Module Definition. Here is a sample code:

define(['dep1', 'dep2'], function (dep1, dep2) {
    //Define the module value by returning a value.
    return function () {};
});
or

// "simplified CommonJS wrapping" https://requirejs.org/docs/whyamd.html
define(function (require) {
    var dep1 = require('dep1'),
        dep2 = require('dep2');
    return function () {};
});
AMD imports modules asynchronously (hence the name).
AMD is made for frontend (when it was proposed) (while CJS backend).
AMD syntax is less intuitive than CJS. I think of AMD as the exact opposite sibling of CJS.
`;
