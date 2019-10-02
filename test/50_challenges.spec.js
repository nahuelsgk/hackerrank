const {expect} = require('chai');

describe('50 challenges', function () {
    describe('missing a number', function () {
        const find_missing_number = (arr) => {
            let last_number = arr.shift();
            for (let i = 0; i < arr.length; i++) {
                if (last_number + 1 !== arr[i]) {
                    return last_number + 1;
                }
                last_number = arr[i];
            }
        };
        it('should find a number on small seq',() => {
            expect(find_missing_number([2,3,5,6])).to.be.equal(4);
        });
        it('should not find a nothing', () => {
            expect(find_missing_number([2,3,4,5,6])).to.be.equal(undefined);
        });
    });

    describe('find duplicates', () => {
        const find_duplicates = (arr) => {
            let dic = {};
            return arr.find((int) => {
                if (dic.hasOwnProperty(int)) {
                    return true;
                } else {
                    dic[int] = 0;
                }
            }, {});
        }
        it('should find a duplicate', function () {
            expect(find_duplicates([2,4,2,5])).to.be.equal(2);
        });
        it('should find a duplicate', function () {
            expect(find_duplicates([1,2,3,15,7,5])).to.be.equal(undefined);
        });
    })

    describe('find the largest and smallest number in an unsorted integer array', function () {
        const find_min_max_unsorted_array = (arr) => {
            let arr_sortd = arr.sort((a, b) => a - b);
            return [arr_sortd[0], arr_sortd[arr_sortd.length - 1]];
        }

        it('should find min max', function () {
            expect(find_min_max_unsorted_array([2,1,4,3])).to.be.eql([1,4]);
        });
    });

    describe('find all pairs of an integer array whose sum is equal to a given number', function () {
        const find_pairs = (arr, number) => {
            let pairs = [];
            for (let i = 0; i < arr.length; i++) {
                for (let j = i + 1; j < arr.length; j++) {
                    if (arr[i] + arr[j] === number) {
                        pairs.push({a: arr[i], b:arr[j]});
                    }
                }
            }
            return pairs;
        }
        it('should find two pairs', function () {
            expect(find_pairs([0,1,2,3,5,8], 5)).to.be.eql([{a: 0, b:5}, {a: 2, b: 3}]);
        });
    });

    describe('find duplicate numbers in an array if it contains multiple duplicates', function () {
        const multiple_duplicate = (arr) => {
            let dic = {};
            arr.reduce((acc, int) => {
                if (dic)
            })
        }
    });
});