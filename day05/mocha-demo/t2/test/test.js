


var expect = require('chai').expect;

describe('Class A', function () {
    it('equal', function () {
        expect(1 + 1).to.be.equal(2);
    });
    it('no equal', function () {
        expect(1 - 1).to.be.not.equal(1);
    });
});

describe('Class B', function () {
    it('true', function () {
        expect(1).to.be.ok;
    });
    it('false', function () {
        expect(0).to.be.not.ok;
    });
    it('false', function () {
        expect({}).to.be.ok;
    });
});