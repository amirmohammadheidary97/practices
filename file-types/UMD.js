`
UMD

UMD stands for Universal Module Definition. Here is what it may look like (source):

(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery", "underscore"], factory);
    } else if (typeof exports === "object") {
        module.exports = factory(require("jquery"), require("underscore"));
    } else {
        root.Requester = factory(root.$, root._);
    }
}(this, function ($, _) {
    // this is where I defined my module implementation

    var Requester = { // ... };

    return Requester;
}));

Works on front and back end (hence the name universal).
Unlike CJS or AMD, UMD is more like a pattern to configure several module systems. Check here for more patterns.
UMD is usually used as a fallback module when using bundler like Rollup/ Webpack
`;
