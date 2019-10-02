const {expect} = require('chai');

const twoStrings_v1 = (s1, s2) => {
    for (let i = 0; i < s1.length; i++) {
        for (let j = i + 1; j <= s1.length; j++) {
            let pattern = s1.substring(i, j);
            console.log(pattern);
            if (s2.includes(pattern)) {
                return 'YES';
            }
        }

    }
    return 'NO';
};

const twoStrings_v2 = (s1, s2) => {
    return s1.split('').filter((char) => s2.indexOf(char) > -1).length > 0 ? 'YES' : 'NO';
}

const twoStrings = function (s1, s2) {
    return twoStrings_v2(s1, s2);
};

describe('twoStrings', function () {
    it('should return YES on sharing strings', () => {
        expect(twoStrings('hello', 'world')).to.be.equal('YES');
    });
    it('should return true on sharing', () => {
        expect(twoStrings('hi', 'world')).to.be.equal('NO');
    });
});