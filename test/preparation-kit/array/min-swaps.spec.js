const {expect} = require('chai')

/**
 *
 * @param {array} arr
 */
const minimumSwaps = (arr) => {
    let graph = [];

    let node;
    arr.forEach((value, index) => {
        node = {
            value: index,
            edge_to: value - 1,
        }
        graph.push(node)
    })

    let visited = new Array(arr.length).fill(false)

    let min_swaps = 0;
    for (let i = 0; i < graph.length; i++) {
        let cycle_size = 0;

        if (visited[i] === true) {
            continue //because will decrease - 1 in min_swaps calculation each step
        }

        let current_node = graph[i]

        while (visited[current_node.value] === false) {
            visited[current_node.value] = true
            cycle_size++
            current_node = graph[current_node.edge_to]
        }
        min_swaps = min_swaps + (cycle_size - 1)
    }

    return min_swaps
}

describe('min-2-swaps', function () {
    it('should calculate the minimum swaps in a complete unsorted', function () {
        expect(minimumSwaps([4, 3, 1, 2])).to.be.eq(3)
    });

    it('should calculate the minimum swaps in a half unsorted', function () {
        expect(minimumSwaps([4, 3, 2, 1])).to.be.eq(2)
    });

    it('should calculate 0 swaps on sorted', function () {
        expect(minimumSwaps([1 ,2, 3, 4])).to.be.eq(0)
    });
});