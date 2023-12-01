class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.size = 0;
        this.first = null;
        this.last = null;
    }

    push(value) {

        let newNode = new Node(value);

        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            const oldFirst = this.first;
            newNode.next = oldFirst;
            this.first = newNode;
        }
        return ++this.size;
    }
    pop() {
        if (this.size == 0) return null;

        const poppedItem = this.first;

        if (this.size == 1) {
            this.first = null;
            this.last = null;
        }
        else {
            this.first = poppedItem.next;
        }
        poppedItem.next = null;
        this.size--;
        return poppedItem;
    }
    // shift() {
    //     // save this.first
    //     // make this.first->this.first.next
    //     // return saved this.first
    //     if (this.size == 0) return undefined;
    //     let shiftedItem = this.first;
    //     this.first = this.first.next;
    //     this.size--;
    //     return shiftedItem;
    // }
    // insert(index, value) {
    //     //should we consider insertions at index 0?
    //     let newInsertion = new Node(value);

    //     if (index < 0 || index > this.size) return false;
    //     if (index > 0 && index < this.size) {
    //         let previousNode = this.get(index - 1);
    //         if (previousNode) {
    //             //save the previous node's next
    //             let previousNext = previousNode.next;
    //             //modify the previous nodes next to be newInsertion
    //             previousNode.next = newInsertion;
    //             newInsertion.next = previousNext;
    //             //modify newInsertion's next to be the previous's next
    //             this.size++;
    //             return true;
    //         }
    //         else return false;
    //     }
    //     else if (index == 0) this.unshift(value);
    //     else this.push(value);
    // }
    // remove(index) {
    //     if (index < 0 || index > this.size) return undefined;
    //     if (index > 0 && index < this.size) {
    //         let previousNode = this.get(index - 1);
    //         if (previousNode) {
    //             let nodeToBeRemoved = previousNode.next;
    //             if (nodeToBeRemoved) {
    //                 previousNode.next = nodeToBeRemoved.next;
    //                 this.size--;
    //                 return nodeToBeRemoved;
    //             }
    //         }
    //     }
    //     else if (index == 0) return this.shift();
    //     else return this.pop();
    //     return true;
    // }
    // unshift(value) {
    //     const newNode = new Node(value);
    //     if (!this.first) {
    //         this.first = newNode;
    //         this.last = this.first;
    //     }
    //     else {
    //         newNode.next = this.first;
    //         this.first = newNode;
    //     }
    //     this.size++;
    //     return this;
    // }
    // get(index) {
    //     if (index < 0 || this.size <= index) return null;
    //     let currentNode = this.first;
    //     let counter = 0;
    //     while (currentNode && counter !== index) {
    //         currentNode = currentNode.next;
    //         counter++;
    //     }
    //     return currentNode;
    // }
    // set(index, value) {
    //     if (index < 0 || this.size <= index) return false;
    //     let currentNode = this.get(index);
    //     if (currentNode) {
    //         currentNode.data = value;
    //         return true;
    //     }
    //     return false;


    // }
    // traverse() {
    //     let currentNode = this.first;
    //     while (currentNode) {
    //         console.log(currentNode.data);
    //         currentNode = currentNode.next;
    //     }
    // }
    // reverse2() {
    //     let node = this.first;
    //     let prev = null;
    //     let next;

    //     while (node) {
    //         // i save the next address so i can actually go there
    //         // on my next iteration
    //         next = node.next;
    //         // i "patch" the next so it points "backwards"
    //         // on the first iteration it will be null, and that is fine
    //         // since the tail has no "next"
    //         node.next = prev;
    //         // i save the current node to prev so i can back-link it
    //         // on the next iteration
    //         prev = node;
    //         // let's take the next item in the list
    //         node = next;
    //     }
    //     let temp = this.first;
    //     this.first = this.last;
    //     this.last = temp;
    // }
    // reverse() {
    //     let counter = this.size - 1;
    //     while (counter >= 1) {
    //         let rightNode = this.get(counter);
    //         let leftNode = this.get(counter - 1);
    //         rightNode.next = leftNode;
    //         if (counter == 1) leftNode.next = null;
    //         counter--;
    //     }
    //     let temp = this.first;
    //     this.first = this.last;
    //     this.last = temp;
    // }
}


let myStack = new Stack();
