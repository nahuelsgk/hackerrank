const {expect} = require('chai');
const {DoublyLinkedList, DoublyLinkedListNode, printDoublyLinkedList, toArray} = require('./DoubleList');

const reverse = (head) => {
    let last_node = head;
    while (last_node.next) {
        last_node = last_node.next;
    }

    let reverse = new DoublyLinkedList();
    while (last_node.prev) {
        reverse.insertNode(last_node.data);
        last_node = last_node.prev;
    }
    reverse.insertNode(last_node.data);

    return reverse.head;
}

describe('reverse double link', function () {
    it('should work', function () {
        let llist = new DoublyLinkedList();
        llist.insertNode(1);
        llist.insertNode(2);
        llist.insertNode(3);
        llist.insertNode(4);
        expect(toArray(reverse(llist.head))).to.be.eql(['4','3','2','1']);
    });
});