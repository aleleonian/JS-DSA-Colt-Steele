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
    insert(index, value) {
        //should we consider insertions at index 0?
        let newInsertion = new Node(value);

        if (index < 0 || index > this.length) return false;
        if (index > 0 && index < this.length) {
            let previousNode = this.get(index - 1);
            if (previousNode) {
                //save the previous node's next
                let previousNext = previousNode.next;
                //modify the previous nodes next to be newInsertion
                previousNode.next = newInsertion;
                newInsertion.next = previousNext;
                //modify newInsertion's next to be the previous's next
                this.length++;
                return true;
            }
            else return false;
        }
        else if (index == 0) this.unshift(value);
        else this.push(value);
    }
    remove(index) {
        if (index < 0 || index > this.length) return undefined;
        if (index > 0 && index < this.length) {
            let previousNode = this.get(index - 1);
            if (previousNode) {
                let nodeToBeRemoved = previousNode.next;
                if (nodeToBeRemoved) {
                    previousNode.next = nodeToBeRemoved.next;
                    this.length--;
                    return nodeToBeRemoved;
                }
            }
        }
        else if (index == 0) return this.shift();
        else return this.pop();
        return true;
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
    get(index) {
        if (index < 0 || this.length <= index) return null;
        let currentNode = this.head;
        let counter = 0;
        while (currentNode && counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    set(index, value) {
        if (index < 0 || this.length <= index) return false;
        let currentNode = this.get(index);
        if (currentNode) {
            currentNode.data = value;
            return true;
        }
        return false;


    }
    traverse() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }
    reverse2() {
        let node = this.head;
        let prev = null;
        let next;

        while (node) {
            // i save the next address so i can actually go there
            // on my next iteration
            next = node.next; 
            // i "patch" the next so it points "backwards"
            // on the first iteration it will be null, and that is fine
            // since the tail has no "next"
            node.next = prev;
            // i save the current node to prev so i can back-link it
            // on the next iteration
            prev = node;
            // let's take the next item in the list
            node = next;
        }
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
    }
    reverse() {
        let counter = this.length - 1;
        while (counter >= 1) {
            let rightNode = this.get(counter);
            let leftNode = this.get(counter - 1);
            rightNode.next = leftNode;
            if (counter == 1) leftNode.next = null;
            counter--;
        }
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
    }
}


let list = new SinglyLinkedList();
list.push("1");
list.push("2");
list.push("3");

list.traverse();

list.reverse2();

list.traverse();

// console.log(list.set(0, "1.0"));

// list.traverse();

// console.log(list.insert(3, 4));

// list.traverse();

// console.log(list.remove(1));

// list.traverse();

// list.reverse();

// list.traverse();

// console.log("pop->" + JSON.stringify(list.pop()));

// list.traverse();

// console.log("shift->" + JSON.stringify(list.shift()));

// list.traverse();

// console.log("unshift(1)");

// list.unshift(1);

// list.traverse();
