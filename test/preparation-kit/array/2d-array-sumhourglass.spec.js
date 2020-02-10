const {expect} = require('chai')

/**
 * @param {array} arr
 */
const hourglassSum = (arr) =>  {
    let max_sum = undefined;
    let current_sum = 0;
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = 0; j < arr.length - 2; j++) {
            current_sum =
                arr[i][j]   + arr[i][j+1]   + arr[i][j+2] +
                              arr[i+1][j+1] +
                arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]

            if (max_sum === undefined || current_sum > max_sum) {
                max_sum = current_sum
            }
        }
    }
    return max_sum
}

describe('hourglass sum', function () {
    it('should find the maximum sum between all hourglasses in 6X6 matrix', function () {
        let matrix = [
            [1, 1, 1, 0, 0, 0],
            [0, 1, 0, 0, 0, 0],
            [1, 1, 1, 0, 0, 0],
            [0, 0, 2, 4, 4, 0],
            [0, 0, 0, 2, 0, 0],
            [0, 0, 1, 2, 4, 0],
        ]
        expect(hourglassSum(matrix)).to.be.equal(19)
    });
});