const {DoublyLinkedList, DoublyLinkedListNode, printDoublyLinkedList, toArray} = require('./DoubleList');
const {expect} = require('chai');

sortedInsert = (head, data) => {
    return sortedInsert_v1(head, data);
}

sortedInsert_v1 = (head, data) => {
    let new_node = new DoublyLinkedListNode(data);

    if (head.data > data) {
        new_node.next      = head;
        new_node.next.prev = new_node;
        head               = new_node;
        return head;
    } else {
        let current_node = head;
        while (current_node.next !== null && current_node.next.data < data) {
            current_node = current_node.next;
        }

        new_node.next = current_node.next;
        if (current_node.next !== null) {
            current_node.next.prev = new_node;
        }
        current_node.next = new_node;
        new_node.prev     = current_node;
        return head;
    }
}


describe('into a sorted list', function () {
    it('should work', function () {
        let llist = new DoublyLinkedList();
        llist.insertNode('1');
        llist.insertNode('3');
        llist.insertNode('5');
        llist.insertNode('10');
        let sorted = sortedInsert(llist.head, 4);
        let array = toArray(sorted);
        expect(array).to.be.eql(['1','3','4','5','10']);
    });
    it('should work at the beginning', function () {
        let llist = new DoublyLinkedList();
        llist.insertNode('2');
        llist.insertNode('3');
        llist.insertNode('4');
        expect(toArray(sortedInsert(llist.head, 1))).to.be.eql(['1','2','3','4']);
    });
    it('should work at the end', function () {
        let llist = new DoublyLinkedList();
        llist.insertNode('2');
        llist.insertNode('3');
        llist.insertNode('4');
        expect(toArray(sortedInsert(llist.head, 10))).to.be.eql(['2','3','4','10']);
    });
});