const expect = require('chai').expect;

describe('Class A', () => {
    it('equal', () => {
        expect(1 + 1).to.be.equal(2);
    });
    it('no equal', () => {
        expect(1 - 1).to.be.not.equal(1);
    });
});
