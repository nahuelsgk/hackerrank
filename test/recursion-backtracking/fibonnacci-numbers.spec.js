const {expect} = require('chai')

const fibonacci = (n) => {
    if (n === 0) {
        return 0
    } else if (n === 1) {
        return 1
    } else {
        return fibonacci(n-1) + fibonacci(n-2)
    }
}

describe('fibonnaci numbers', function () {
    it('should give the nth number in the fibonnaci sequence', function () {
        expect(fibonacci(0)).to.be.equal(0)
        expect(fibonacci(1)).to.be.equal(1)
        expect(fibonacci(2)).to.be.equal(1)
        expect(fibonacci(3)).to.be.equal(2)
        expect(fibonacci(4)).to.be.equal(3)
        expect(fibonacci(5)).to.be.equal(5)
        expect(fibonacci(6)).to.be.equal(8)
    });
});