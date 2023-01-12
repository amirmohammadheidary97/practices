// var assert = require('assert');
var assert = require('assert');
const { describe, it } = require('mocha');

const pow = (a, b) => a ** b

describe("pow", function () {
    it("raises to n-th power", function () {
        assert.equal(pow(2, 3), 8);
    });
});


// describe('Array', function () {
//   describe('#indexOf()', function () {
//     it('should return -1 when the value is not present', function () {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });