const {expect} = require('chai');

describe('Minimum Absolute Difference in an Array', function () {
    const minimumAbsoluteDifference = function (arr) {
        let arr_sorted = arr.sort((a, b) => a - b);
        let min_diff = undefined;
        for (let i = 0; i < arr_sorted.length - 1; i++) {
            let diff = Math.abs(arr_sorted[i] - arr_sorted[i+1]);
            if (diff < min_diff || min_diff === undefined) {
                min_diff = diff;
            }
        }
        return min_diff;
    }
    it('should find the minimum diff between two any numbers array', function () {
        expect(minimumAbsoluteDifference([3, -7, 0])).to.be.equal(3);
    });
});