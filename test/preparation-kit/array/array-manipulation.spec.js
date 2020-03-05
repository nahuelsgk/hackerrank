const {expect} = require('chai')

/**
 * The complexity is O(n^2)
 * @param n
 * @param queries
 * @returns {number}
 */
const arrayManipulation = (n, queries) => {
    const array = (new Array(n)).fill(0, 0, n)

    let max = 0
    while (queries.length > 0) {
        const query = queries.shift()
        const a = query[0]
        const b = query[1]
        const k = query[2]
        for(let i = a - 1; i < b; i++) {
            array[i] = array[i] + k

            if (array[i] > max) {
                max = array[i]
            }
        }
    }
    //console.log(array)
    return max
}

const arrayManipulation_by_intersection = (n, queries) => {
    const calc_intersection = (interval_a, interval_b) => {
        const l1 = interval_a[0]
        const r1 = interval_a[1]
        const l2 = interval_b[0]
        const r2 = interval_b[1]

        if (r1 < l2 || r2 < l1) {
            return undefined;
        }

        return [
            Math.max(l1, l2),
            Math.min(r1, r2)
        ]
    }

    let intersection_a = 0
    let intersection_b = 0
    let max_k          = 0

    let query = queries.shift()
    intersection_a = query[0]
    intersection_b = query[1]
    max_k          = query[2]
    while (queries.length > 0) {
        const query        = queries.shift()
        const a            = query[0]
        const b            = query[1]
        const query_value  = query[2];
        const intersection = calc_intersection([intersection_a, intersection_b], [a, b]);
        if (intersection === undefined) {
            if (query_value > max_k) {
                intersection_a = a
                intersection_b = b
                max_k          = query_value
            }
        } else {
            intersection_a = intersection[0]
            intersection_b = intersection[1]
            max_k          = max_k + query_value
        }
    }

    return max_k
}

describe('array manipulation v1', function () {
    it('should calculate the maximum after applying n operations with cost O(n^2)', function () {
        expect(arrayManipulation(5,
            [
                [1, 2 , 100],
                [2, 5 , 100],
                [3, 4 , 100],
            ]
        )).to.equal(200)
    });
    it('should calculate the maximum after applying n operations with cost O(n)', function () {
        expect(arrayManipulation_by_intersection(4, [
            [2, 3, 603],
            [1, 1, 286],
            [4, 4, 882]
        ])).to.be.equal(882)

    });
});