const {expect} = require('chai');

const gradingStudents = (grades) => {
    // Write your code here
    return grades.map((grade) => {
        if (grade < 38) {
            return grade;
        } else if (grade % 5 > 2) {
            return (Math.floor(grade / 5) + 1) * 5;
        } else {
            return grade;
        }
    });
}

describe('grading students', function () {
    it('should round an one item', function () {
        expect(gradingStudents([38])).to.be.eql([40]);
    });

    it('should round an some item', function () {
        expect(gradingStudents([73, 67, 38, 33])).to.be.eql([75, 67, 40, 33]);
    });
});