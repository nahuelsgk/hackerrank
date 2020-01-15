const {expect} = require('chai')

/**
 *
 * @param {number} n
 * @param {number} k
 * @param {number[]} ar
 */
const divisibleSumPairs = (n, k, ar) => {
    let results = 0;
    for (let i = 0; i < ar.length - 1; i++)
    {
        for (let j = i + 1; j < ar.length; j++) {
            if ((ar[i] + ar[j]) % k === 0) {
                results++
            }
        }
    }
    return results
}

describe('divisible sum pairs', function () {
    it('should find the number of pairs divisible by k', () => {
        expect(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])).to.be.eql(5)
    });
});