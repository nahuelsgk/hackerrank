const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }

    toArr() {
        let arr  = [];
        let node = this;
        while (node != null) {
            arr.push(String(node.data));
            node = node.next;
        }
        return arr;
    }

};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
}

function printSinglyLinkedList(node)
{
    while (node != null) {
        console.log(String(node.data));
        node = node.next;
    }
}

module.exports = {
    SinglyLinkedList: SinglyLinkedList,
    SinglyLinkedListNode: SinglyLinkedListNode,
    printSinglyLinkedList: printSinglyLinkedList
}