const { expect } = require('chai');

const reverse = (int) =>  Number(int.toString().split("").reverse().join(""));

const isBeautifulDay = (int, k) => Math.abs(int - reverse(int)) % k === 0

const beautifulDays = (i, j, k) => {
    let count = 0;
    while(i <= j) {
        if (isBeautifulDay(i, k) === true) {
            count++;
        }
        i++;
    }
    return count;
};

describe('Reverse', function () {
    it('should reverse an integer', function () {
        expect(reverse(10)).to.be.equal(1);
        expect(reverse(23)).to.be.equal(32);
    });
});

describe('IsBeautifulDay', function () {
    it('should calculate if it is a beautiful day', function () {
        expect(isBeautifulDay(20, 6)).to.be.equal(true);
        expect(isBeautifulDay(21, 6)).to.be.equal(false);
        expect(isBeautifulDay(22, 6)).to.be.equal(true);
        expect(isBeautifulDay(23, 6)).to.be.equal(false);
    });
});

describe('beautifulDays', function () {
    it('should count the number of beautiful days', function () {
        expect(beautifulDays(20, 23, 6)).to.be.equal(2);
    });
});
