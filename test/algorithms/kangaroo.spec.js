const {expect} = require('chai')

/**
 * We should solve the time that both kangaroos meets the same distance
 * d = v1 * t + x1
 * d = v2 * t + x2
 * ==============================
 *   d = v1 * t     + x1
 * -(d = v2 * t     + x2)
 * ----------------------------
 *   0 = (v1 - v2)t + (x1 - x2)
 * =============================
 * @param x1
 * @param v1
 * @param x2
 * @param v2
 */

const kangaroo = (x1, v1, x2, v2) => {
    const jumps  = (x1 - x2) / (-1 * (v1 -  v2))
    const mod    = (x1 - x2) % (-1 * (v1 -  v2))
    let response = 'YES'

    if (jumps <= 0 || (jumps > 0 && mod !== 0)) {
        response = 'NO'
    }

    console.log(response)
    return response
}

describe('Kangaroo', function () {
    it('should calculate if the kangaroo coincide in any number of jumps', function () {
        expect(kangaroo(0,2, 5, 3)).to.be.eql('NO')
    });
    it('should calculate if the kangaroo coincide in any number of jumps 2', function () {
        expect(kangaroo(21,6, 47, 3)).to.be.eql('NO')
    });
});