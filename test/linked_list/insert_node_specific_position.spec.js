const {expect} = require('chai');
const {SinglyLinkedList, toArray}
               = require('./SingleList');

function insertNodeAtPosition(head, data, position)
{
    let current_position = 0;
    let current_node     = head;
    let new_list         = new SinglyLinkedList();
    while (current_node) {
        if (current_position === position) {
            new_list.insertNode(data);
        }
        new_list.insertNode(current_node.data);
        current_node = current_node.next;
        current_position++;

    }

    return new_list.head;
}

describe('into specific position', function () {
    it('should work', function () {
        let llist = new SinglyLinkedList();
        llist.insertNode('16');
        llist.insertNode('13');
        llist.insertNode('7');
        let new_list = insertNodeAtPosition(llist.head, 1, 2);
        expect(new_list.toArr()).to.be.eql(['16','13','1','7']);
    });
});
