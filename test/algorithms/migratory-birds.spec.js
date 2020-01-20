const {expect} = require('chai')

// Complete the migratoryBirds function below.
const migratoryBirds = (arr) => {
    const dict = {1: 0, 2:0, 3:0, 4:0, 5: 0, maximum: 0, min_index: 0}
    const max_values = arr.reduce((acc, value) => {
        dict[value] = dict[value] + 1
        if (dict[value] > dict['maximum']) {
            dict['maximum'] = dict[value]
            dict['min_index'] = value
        } else if (dict[value] === dict['maximum'] && value < dict['min_index']) {
            dict['min_index'] = value
        }
        return dict
    }, dict)
    return max_values.min_index
}

describe('migratory birds', function () {
    it('should find the most common value with minimum id', function () {
        expect(migratoryBirds([1, 4, 4, 4, 5, 3])).to.be.eql(4)
    });
    it('should find the most common value with minimum id 2', function () {
        expect(migratoryBirds([1, 4, 4, 4, 5, 5, 5, 3])).to.be.eql(4)
    });
    it('should find the most common value with minimum id 3', function () {
        expect(migratoryBirds([1, 5, 5, 5, 4, 4, 4, 3])).to.be.eql(4)
    });
});