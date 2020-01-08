const {expect} = require('chai')

const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
    const inside_house = (tree, position, acc) => {
        if (s <= tree + position && tree + position <=t ) {
            acc = acc + 1
        }
        return acc
    }


    console.log(apples.reduce((acc, position) => { return inside_house(a, position, acc)}, 0))
    console.log(oranges.reduce((acc, position) => { return inside_house(b, position, acc)}, 0))

    return [
        apples.reduce((acc, position) => { return inside_house(a, position, acc)}, 0),
        oranges.reduce((acc, position) => { return inside_house(b, position, acc)}, 0)
    ];
}

describe('apples and orange', function () {
    it('should count fruits inside the house', function () {
        expect(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])).to.be.eql([1,1])
    });
});