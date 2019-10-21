const {expect} = require('chai');


const anagram_1 = (s1, s2) => {
    if (s1.length !== s2.length) {
        return false;
    }

    let dic   = "abcdefghijklmnopqrstuvwxyz".split('').reduce((acc, value) => {
        acc[value] = 0
        return acc
    }, {})

    for (let i = 0; i < s1.length; i++) {
        dic[s1[i]]++;
        dic[s2[i]]--;
    }

    for (let key in dic) {
        if (dic[key] !== 0) {
            return false;
        }
    }

    return true;
}

const anagram = (s1, s2) => {
    let s1_sorted = s1.split('').sort();
    let s2_sorted = s2.split('').sort();

    if (s1_sorted.length !== s2_sorted.length) {
        return false;
    }

    for (let i = 0; i < s1_sorted.length; i++) {
        if (s1_sorted[i] !== s2_sorted[i]) {
            return false;
        }
    }
    return true;
}

const sherlockAndAnagrams = (s) => {
    let string_length = s.length;
    let count         = 0;
    for (let size = 1; size < string_length; size++) {
        //console.log("** SIZE %d", size);
        for (let i = 0; i < string_length - 1; i++) {
            for (let j = i + 1; j < string_length - (size - 1); j++) {
                let left  = s.substring(i, i + size);
                let right = s.substring(j, j + size);
                //console.log("(%d, %d): %s - %s", i, j, left, right);
                if (anagram(left, right)) {
                    //console.log("ANAGRAM!!!!");
                    //console.log("%s - %s", left, right);
                    count++;
                }
            }
        }
    }

    return count;
}

describe('anagram', () => {
    it('should resolve anagram', function () {
        expect(anagram('mo', 'om')).to.be.equal(true);
    });
});

describe('sherlock and anagram', function () {
    it('should find 3 on mom', function () {
        expect(sherlockAndAnagrams('anagram')).to.be.equal(6);
    })
    it('should find 3 on mom', function () {
        expect(sherlockAndAnagrams('mom')).to.be.equal(2);
    });
    it('should find 4 on abba', function () {
        expect(sherlockAndAnagrams('abba')).to.be.equal(4);
    });
    it('should find 0 on abcd', function () {
        expect(sherlockAndAnagrams('abcd')).to.be.equal(0);
    });
    it('should find 399 on test 4.1', function () {
        expect(sherlockAndAnagrams('ifailuhkqqhucpoltgtyovarjsnrbfpvmupwjjjfiwwhrlkpekxxnebfrwibylcvkfealgonjkzwlyfhhkefuvgndgdnbelgruel')).to.be.equal(399);
    });
    it('should find 471 on test 4.2', function () {
        expect(sherlockAndAnagrams('gffryqktmwocejbxfidpjfgrrkpowoxwggxaknmltjcpazgtnakcfcogzatyskqjyorcftwxjrtgayvllutrjxpbzggjxbmxpnde')).to.be.equal(471);
    });

    it('should find 1464 on test 4.2', function () {
        expect(sherlockAndAnagrams('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')).to.be.equal(166650);
    });

});