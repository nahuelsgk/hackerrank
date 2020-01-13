const {expect} = require('chai')

const birthday = (s, d, m) => {
    const sum_sub_segment = (sub_array) => {
        //console.log(sub_array)
        return sub_array.reduce((acc, value) => acc + value)
    }
    let result = 0;
    for (let i = 0; i < s.length - m + 1; i++) {
        if (sum_sub_segment(s.slice(i, i + m)) === d) {
            result++
        }
    }
    return result
}

//@TODO: Se puede mejorar con coste lineal

describe('chocolate birthday', function () {
    it("should find all possible segments that match month's length with the sum's day", function () {
        expect(birthday([1, 2, 1, 3, 2], 3, 2)).to.be.eql(2)
    });

    it("should find none cuz segment is impossible to achieve", function () {
        expect(birthday([1, 1, 1, 1, 1, 1], 3, 2)).to.be.eql(0)
    });
});