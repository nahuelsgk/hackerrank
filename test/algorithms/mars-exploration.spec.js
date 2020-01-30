const {expect} = require('chai')

/**
 *
 * @param {string} s
 */
const marsExploration = (s) => {
    let changed_letters = 0
    for (let i = 0; i < s.length; i = i + 3) {
        if (s[i]     !== 'S') changed_letters++
        if (s[i + 1] !== 'O') changed_letters++
        if (s[i + 2] !== 'S') changed_letters++
    }
    return changed_letters
}

describe('mars explorations', function () {
    it('should count the differences between SOS letters', function () {
            expect(marsExploration('SOSSOT')).to.be.equal(1)
            expect(marsExploration('SOSSOS')).to.be.equal(0)
            expect(marsExploration('SOSSPSSQSSOR')).to.be.equal(3)
        }
    );
})