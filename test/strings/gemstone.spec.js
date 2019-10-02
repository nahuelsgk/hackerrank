const {expect} = require('chai');

const gemstone = (arr) => {
    return gemstone_v1(arr);
}

const gemstone_v1 = (arr) => {
    let minerals = "abcdefghijklmnopqrstuvwxyz".split('').reduce((acc, value) => {
        acc[value] = 0
        return acc
    }, {})

    arr.forEach((rock) => {
        minerals = [...new Set(rock.split(''))].reduce((acc, mineral) => {
            acc[mineral] = acc[mineral] + 1;
            return acc;
        }, minerals);
    });

    let gemstones = 0;
    Object.keys(minerals).forEach(function (key) {
        if (minerals[key] === arr.length) {
            gemstones++;
        }
    });
    return gemstones;
}

describe('gemstone', function () {
    it('should find gemstone', function () {
        expect(gemstone(['aa', 'aa'])).to.be.equal(1);
    });
    it('should not find any mineral', function () {
        expect(gemstone(['ab', 'cd', 'ef'])).to.be.equal(0);
    });
    it('should not find a mineral', function () {
        expect(gemstone(['ab', 'ad', 'af'])).to.be.equal(1);
    });
});