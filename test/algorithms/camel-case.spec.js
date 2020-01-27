const {expect} = require('chai')

/**
 *
 * @param {string} s
 */
const camelcase = (s) => {
    return s.replace(/[^A-Z]/g, "").length + 1
}

describe('camel case', function () {
    it('should count the number of words that contains an string written in camelcase', function () {
        expect(camelcase('saveChangesInTheEditor')).to.be.eq(5)
    });
});
