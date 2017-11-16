const expect = require('chai').expect;


describe('Class B', () => {
    it('true', () => {
        expect(1).to.be.ok;
    });
    it('false', () => {
        expect(0).to.be.not.ok;
    });
    it('false', () => {
        expect({}).to.be.ok;
    });
});

describe('Class C', () => {
    it('type of string', () => {
        expect('test...').to.be.a('string');
    });
    it('type of string', () => {
        expect({}).to.be.an('object');
    });
});