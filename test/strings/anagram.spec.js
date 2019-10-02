const {expect} = require('chai');

const anagram = (s) => {
    return anagram_iterative_2(s)
}

const anagram_iterative_2 = (s) => {
    if (s.length % 2) {
        return -1
    }

    let left  = s.substring(0, s.length / 2).split('')
    let right = s.substring(s.length / 2).split('')
    let dic   = "abcdefghijklmnopqrstuvwxyz".split('').reduce((acc, value) => {
        acc[value] = 0
        return acc
    }, {})
    dic = left.reduce((acc, value) => {
        acc[value] = acc[value] + 1;
        return acc;
    }, dic)

    let count = right.reduce((acc, value) => {
        dic[value] = dic[value] - 1;
        if (dic[value] < 0) {
            return acc + 1;
        }
        return acc;
    }, 0);

    return count;
}
it('should ', function () {
    anagram_iterative_2('aaabbb')
});
const anagram_iterative = (s) => {
    if (s.length % 2) {
        return -1
    }
    let left  = s.substring(0, s.length / 2).split('');
    let right = s.substring(s.length / 2).split('');
    let count_swap = 0;
    let dic   = {};
    for (let i = 0; i < left.length; i++) {
        let char = left[i];
        if (dic.hasOwnProperty(char) === false) {
            dic[char] = 1;
        } else {
            dic[char] = dic[char]+1;
        }
    }

    for (let i = 0; i < right.length; i++) {
        let char = right[i];
        if (!dic.hasOwnProperty(char)) {
            dic[char] = -1;
        } else {
            dic[char]--;
        }
        if (dic[char] < 0) {
            count_swap++;
        }
    }

    return count_swap;
}

describe('anagram', function () {
    it('should return -1 on even length strings', () => {
        expect(anagram('abc')).to.be.equal(-1);
    });
    it('should return 2 on aabb', () => {
        expect(anagram('aabb')).to.be.equal(2);
    });
    it('should return 1 on abca', () => {
        expect(anagram('abca')).to.be.equal(1);
    });
    it('should return 2 on abccde', () => {
        expect(anagram('abccde')).to.be.equal(2);
    });
    it('should return 2 on asdfjoieufoa', () => {
        expect(anagram('asdfjoieufoa')).to.be.equal(3);
    });
    it('should return 5 on fdhlvosfpafhalll', () => {
        expect(anagram('fdhlvosfpafhalll')).to.be.equal(5);
    });
});