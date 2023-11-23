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

        const newNode = new Node(val);

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
            const oldTail = this.tail;
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
}

const myDBL = new DoublyLinkedList();

console.log("push(\"1\")");
console.log(myDBL.push("1"));

console.log("push(\"2\")");
console.log(myDBL.push("2"));

console.log("push(\"3\")");
console.log(myDBL.push("3"));

console.log("pop()");
console.log(myDBL.pop());

console.log("shift()");
console.log(myDBL.shift());