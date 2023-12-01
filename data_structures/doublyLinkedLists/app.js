class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;

    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {

        let newNode = new Node(val);

        if (this.length == 0) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            // set the next property of the tail to the new node
            // set the prev property of new node to be the former tail
            // set the tail to be the new node
            // increment this.length;
            // return the entire list
            let oldTail = this.tail;
            oldTail.next = newNode;
            newNode.prev = oldTail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (this.length === 0) return undefined;
        else {
            const oldTail = this.tail;

            if (this.length === 1) {
                this.head = null;
                this.tail = this.head;
            }
            else {
                let newTail = oldTail.prev;
                newTail.next = null;
                // oldTail is no longer part of the list 
                // but we have to sever the backwards connection to 
                // what is now the new tail
                oldTail.prev = null;
                this.tail = newTail;
            }
            this.length--;
            return oldTail;
        }
    }
    shift() {
        if (this.length === 0) return undefined;
        const oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = oldHead.next;
            this.head.prev = null;
        }
        oldHead.next = null;
        this.length--;
        return oldHead;
    }
    unshift(val) {
        let newNode = new Node(val);

        if (this.length === 0) {
            this.head = newNode;
            this.head.next = null;
            this.head.prev = null;
            this.tail = this.head;
        }
        else {
            const oldHead = this.head;
            this.head = newNode;
            this.head.next = oldHead;
            oldHead.prev = this.head
        }
        this.length++;
        return this;
    }
    get(index) {
        let node;
        let direction;
        let counter;

        // we gotta check for >= this.length because it's a 0 based index
        // if there are 10 elements the index 10 is out of bounds
        if (index < 0 || index >= this.length) return null;

        else if (index <= (this.length / 2)) {
            counter = 0;
            node = this.head;
            direction = 'next';
        }
        else {
            counter = this.length - 1;
            node = this.tail;
            direction = 'prev';
        }
        while (node) {
            if (counter == index) {
                break;
            }
            direction === "next" ? counter++ : counter--;
            node = node[direction];
        }
        return node;
    }
    set(index, val) {
        const desiredNode = this.get(index);
        if (!desiredNode) return false;
        desiredNode.val = val;
        return true;
    }
    insert(index, val) {

        if (index < 0 || index > this.length) return false;

        if (index == 0) {
            //we gotta use unshift (duh!)
            return !!this.unshift(val);
        }
        else if (index == this.length) {
            // just push
            // we got to return because push already increments this.length
            return !!this.push(val);
        }
        else {
            let previousNode, currentNode, newNode;

            newNode = new Node(val);
            previousNode = this.get(index - 1);
            currentNode = previousNode.next;
            currentNode.prev = newNode;
            newNode.next = currentNode;
            previousNode.next = newNode;
            newNode.prev = previousNode;
            this.length++;
        }
        return true;
    }
    remove(index) {
        if (index == 0) return this.shift();
        if (index == this.length - 1) return this.pop();

        let currentNode = this.get(index);
        if (!currentNode) return false;

        let previousNode = currentNode.prev;
        let nextNode = currentNode.next;
        previousNode.next = nextNode;
        nextNode.prev = previousNode;
        //we also gotta cut ties with the other nodes.
        currentNode.next = null;
        currentNode.prev = null;

        this.length--;
        return currentNode;
    }
    reverse() {
        let counter = this.length - 1;
        while (counter >= 0) {
            let currentNode = this.get(counter);
            const oldNext = currentNode.next;
            const oldPrev = currentNode.prev;

            currentNode.next = oldPrev;
            currentNode.prev = oldNext;

            counter--;
        }
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        return this;
    }
}

const myDBL = new DoublyLinkedList();

console.log("push(\"1\")");
console.log(myDBL.push("1"));

console.log("push(\"2\")");
console.log(myDBL.push("2"));

console.log("push(\"3\")");
console.log(myDBL.push("3"));

console.log(myDBL.reverse());

// console.log("pop()");
// console.log(myDBL.pop());

// console.log("shift()");
// console.log(myDBL.shift());
