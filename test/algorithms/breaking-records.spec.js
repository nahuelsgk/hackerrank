const {expect} = require('chai')

const breakingRecords = (scores) => {
    const first_score = scores.shift();
    const breaking = {
        min: first_score,
        max: first_score,
        break_min: 0,
        break_max: 0
    }
    const records = scores.reduce((acc, score) => {
        if (score > acc.max) {
            acc.max = score
            acc.break_max = acc.break_max + 1
        } else if (score < acc.min) {
            acc.min = score
            acc.break_min = acc.break_min + 1
        }
        return acc
    }, breaking)
    return [records.break_max, records.break_min]
}

describe('breaking records', function () {
    it('should calculate breaking max min records', function () {
        expect(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])).to.eql([4, 0])
    });
});