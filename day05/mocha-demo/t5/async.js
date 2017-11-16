const expect = require('chai').expect;

describe('异步测试', function () {
    it('async test', function (done) {
        var b = true;

        function f() {
            b = false;
            expect(b).to.be.not.ok;
            done();
        }
        setTimeout(f, 1000 * 3);
    });
});

