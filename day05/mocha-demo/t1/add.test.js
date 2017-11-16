




var add = require('./add');
var expect = require('chai').expect;

describe('A add() Function Test', function () {
    it('1 + 1 = 2', function () {
        expect(add(1, 1)).to.be.equal(2);
    });
    it('1 + 0 = 1', function () {
        expect(add(1, 0)).to.be.equal(1);
    });
});

// decribe: test suite 测试套件
// it: test case 测试用例