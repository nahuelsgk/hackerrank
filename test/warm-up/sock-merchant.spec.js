const {expect} = require('chai')

/**
 * @param {int} n
 * @param {array} ar
 */
const sockMerchant = (n, ar) => {
    let dic = {}
    return ar.reduce((n_pairs, value) => {
        if (dic.hasOwnProperty(value) === false || dic[value] === 0) {
            dic[value] = 1
            return n_pairs
        } else if (dic[value] === 1) {
            dic[value] = 0
            n_pairs++
            return n_pairs
        }
        return n_pairs
    }, 0)
}

describe('sock merchant', function () {
    it('should count number of pairs', function () {
        expect(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])).to.be.equal(3)
    });
});