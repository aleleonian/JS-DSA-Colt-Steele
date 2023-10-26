class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(value) {

        let newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            // When i assign newNode to this.tail.next this.tail stops being the last
            // node and starts being the previous to last. 
            // That's why i have to update this.tail to the newly created Node.

            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;

        // Return the linked list
        return this;
    }
    pop() {
        if (this.length == 0) return undefined;

        else if (this.length == 1) {
            const poppedItem = this.head;
            this.head = null;
            this.tail = null;
            return poppedItem;
        }
        else {
            let currentNode = this.head;
            while (currentNode && currentNode.next != this.tail) {
                currentNode = currentNode.next;
            }
            let poppedItem = currentNode.next;
            currentNode.next = null;
            this.tail = currentNode;
            this.length--;
            return poppedItem;
        }
    }
    shift() {
        // save this.head
        // make this.head->this.head.next
        // return saved this.head
        if (this.length == 0) return undefined;
        let shiftedItem = this.head;
        this.head = this.head.next;
        this.length--;
        return shiftedItem;
    }

    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(number) {
        if (number < 0 || this.length < number) return null;
        let currentNode = this.head;
        let counter = 1;
        while (currentNode && counter < number) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    traverse() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }
}


let list = new SinglyLinkedList();
list.push("1");
list.push("2");
list.push("3");

list.traverse();

console.log(list.get(2));

// console.log("pop->" + JSON.stringify(list.pop()));

// list.traverse();

// console.log("shift->" + JSON.stringify(list.shift()));

// list.traverse();

// console.log("unshift(1)");

// list.unshift(1);

// list.traverse();
