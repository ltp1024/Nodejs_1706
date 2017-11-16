const expect = require('chai').expect;

describe('Class A', () => {
    it('equal', () => {
        expect(1 + 1).to.be.equal(2);
    });
    it('no equal', () => {
        expect(1 - 1).to.be.not.equal(1);
    });
});

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

describe('Class D', () => {
    it('include', () => {
        expect([1, 2, 3]).to.include(1);
    });
    it('contain', () => {
        expect('Hello, world!').to.contain('Hell');
    });
    it('include key', () => {
        expect({k1: 'v1', k2: 'v2'}).to.include.keys('k1');
    })
});

describe('Class E', () => {
    it('empty', () => {
        expect('').to.be.empty;
    });
    it('empty', () => {
        expect([]).to.be.empty;
    });
    it('empty', () => {
        expect({}).to.be.empty;
    });
});

describe('Class F', () => {
    it('match', () => {
        expect('Hello, world!').to.match(/^hello/i);
    });
});