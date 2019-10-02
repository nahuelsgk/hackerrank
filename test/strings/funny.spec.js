const chai   = require('chai');
const {expect} = chai;

const funnyString = function (string) {
    for (let i = 0; i < string.length - 1; i ++) {
        let diff   = Math.abs(string.charCodeAt(i) - string.charCodeAt(i + 1));
        let diff_r = Math.abs(string.charCodeAt(string.length - 1 - i) - string.charCodeAt(string.length - 2 - i));
        if (diff !== diff_r) {
            return 'Not Funny'
        }
    }
    return 'Funny';
}

describe('Funny string', function () {
    it('should work with a sequential string', function () {
        expect(funnyString('abcd')).to.be.equal('Funny');
    });
    it('should work with a acxz', function () {
        expect(funnyString('acxz')).to.be.equal('Funny');
    });
    it('should work with a bcxz', function () {
        expect(funnyString('bcxz')).to.be.equal('Not Funny');
    });
});