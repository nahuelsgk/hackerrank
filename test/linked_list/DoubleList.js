const DoublyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
        this.prev = null;
    }
};

const DoublyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        let node = new DoublyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
        }

        this.tail = node;
    }


};

function printDoublyLinkedList(node, sep)
{
    while (node != null) {
        console.log(String(node.data));

        node = node.next;
    }
}

toArray = (head) => {
    let current_node = head;
    let arr = [];
    while (current_node != null) {
        arr.push(String(current_node.data));
        current_node = current_node.next;
    }
    return arr;
}

module.exports = {
    toArray: toArray,
    DoublyLinkedList: DoublyLinkedList,
    DoublyLinkedListNode: DoublyLinkedListNode,
    printDoublyLinkedList: printDoublyLinkedList
}