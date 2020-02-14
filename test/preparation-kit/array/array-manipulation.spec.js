const {expect} = require('chai')

/**
 * The complexit
 * @param n
 * @param queries
 * @returns {number}
 */
const arrayManipulation_1 = (n, queries) => {
    const array = (new Array(n)).fill(0, 0, n)

    let max = 0
    while (queries.length > 0) {
        const query = queries.shift()
        const a = query[0]
        const b = query[1]
        const k = query[2]
        for(let i = a - 1; i < b; i++) {
            array[i] = array[i] + k

            if (array[i] > max) {
                max = array[i]
            }
        }
    }
    //console.log(array)
    return max
}

describe('array manipulation', function () {
    it('should calculate the maximum after applying n operations', function () {
        expect(arrayManipulation(5,
            [
                [1, 2 , 100],
                [2, 5 , 100],
                [3, 4 , 100],
            ]
        )).to.equal(200)
    });
});