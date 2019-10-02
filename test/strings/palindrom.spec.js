const chai   = require('chai');
let {expect} = chai;

const isPalindrome = function (substring) {
    let palindrome = true;
    for (let j = 0; j <= substring.length - 1 - j; j++) {
        if (substring[j] !== substring[substring.length - 1 -j]) {
            palindrome = false;
        }
    }
    return palindrome;
}

function palindromeIndex(s)
{
    let result_index = -1;

    if (isPalindrome2(s)) {
        return result_index;
    }

    for (let i = 0; i < s.length; i++) {
        let left  = s.substring(0, i);
        let right = s.substring(i + 1, s.length);
        if (isPalindrome(left+right)) {
            result_index = i;
        }
    }

    return result_index;
}


const isPalindrome2 = function (s) {
    return s === s.split('').reverse().join('');
}

function palindromeIndex2(s)
{
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== s[s.length - 1 -i]) {
            let candidate_removing_left  = s.substring(0, i)                + s.substring(i+1);
            let candidate_removing_right = s.substring(0, s.length - 1 - i) + s.substring(s.length - i);
            if (isPalindrome2(candidate_removing_left)) {
                return i;
            } else if (isPalindrome2(candidate_removing_right)) {
                return s.length - 1 - i;
            }
        }
    }
    return -1;
}

describe('palindromeIndex2', function () {
    it('should not find any position', () => {
        let index = palindromeIndex2('abcd');
        expect(index).to.be.equal(-1);
    });
    it('should find a position', () => {
        let index = palindromeIndex2('aaab');
        expect(index).to.be.equal(3);
    })
    it('should find another position', () => {
        let index = palindromeIndex2('baa');
        expect(index).to.be.equal(0);
    })
    it('should not find any position because is already a position', () => {
        let index = palindromeIndex2('aaa');
        expect(index).to.be.equal(-1);
    })
});
describe('palindromeIndex', function () {
    it('should not find any position', () => {
        let index = palindromeIndex('abcd');
        expect(index).to.be.equal(-1);
    });
    it('should find a position', () => {
        let index = palindromeIndex('aaab');
        expect(index).to.be.equal(3);
    })
    it('should find another position', () => {
        let index = palindromeIndex('baa');
        expect(index).to.be.equal(0);
    })
    it('should not find any position because is already a position', () => {
        let index = palindromeIndex('aaa');
        expect(index).to.be.equal(-1);
    })
});
describe('isPalindrome', function () {
    it('should detect palindrome on even length strings', function () {
        expect(isPalindrome("abba")).to.be.equal(true)
    });
    it('should detect non palindrome on even length strings', function () {
        expect(isPalindrome("abbc")).to.be.equal(false)
    });
    it('should detect palindrome on odd length strings', function () {
        expect(isPalindrome("aba")).to.be.equal(true)
    });
    it('should detect non palindrome on odd length strings', function () {
        expect(isPalindrome("abc")).to.be.equal(false)
    });
})
describe('isPalindrome2', function () {
    it('should detect palindrome on even length strings', function () {
        expect(isPalindrome2("abba")).to.be.equal(true)
    });
    it('should detect non palindrome on even length strings', function () {
        expect(isPalindrome2("abbc")).to.be.equal(false)
    });
    it('should detect palindrome on odd length strings', function () {
        expect(isPalindrome2("aba")).to.be.equal(true)
    });
    it('should detect non palindrome on odd length strings', function () {
        expect(isPalindrome2("abc")).to.be.equal(false)
    });
})
