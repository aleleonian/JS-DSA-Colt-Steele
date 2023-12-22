// TODO: these MaxBinaryHeap and MinBinaryHeap examples are broken.

class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}
class PriorityQueue {
    constructor() {
        this.nodes = [];
    }

    bubbleUp(index) {
        let result = {};
        const bubbledUpParentIndex = Math.floor((index - 1) / 2);
        result.index = bubbledUpParentIndex;
        result.node = this.nodes[bubbledUpParentIndex];
        return result;
    }

    dequeue() {
        // swap the root with the last element
        // pop last element (ex root)
        // adjust:
        // start at the new root
        // take the largest children and compare
        // if child is larger, swap. Repeat.
        // if not, that is the correct place.
        if (this.nodes.length === 0) return false;

        this.swap(this.nodes, 0, this.nodes.length - 1);
        const poppedItem = this.nodes.pop();
        let index = 0;
        const leftIndex = this.getLeftIndex(index);
        const rightIndex = this.getRightIndex(index);
        while (leftIndex !== null || rightIndex !== null) {

            let highestChildPriority, highestChildIndex;

            if (this.nodes[leftIndex] && this.nodes[rightIndex]) {
                if (this.nodes[leftIndex].priority < this.nodes[rightIndex].priority || !this.nodes[rightIndex]) {
                    highestChildPriority = this.nodes[leftIndex].priority
                    highestChildIndex = leftIndex;
                }
                else if (this.nodes[rightIndex].priority < this.nodes[leftIndex].priority || !this.nodes[leftIndex]) {
                    highestChildPriority = this.nodes[rightIndex].priority;
                    highestChildIndex = rightIndex;
                }
            } else {
                if (!this.nodes[leftIndex]) {
                    highestChildPriority = this.nodes[rightIndex].priority
                    highestChildIndex = rightIndex;
                }
                else {
                    highestChildPriority = this.nodes[leftIndex].priority
                    highestChildIndex = leftIndex;
                }
            }
            const newRootPriority = this.nodes[index].priority;

            let newIndexLocation;

            if (highestChildPriority > newRootPriority) {
                newIndexLocation = highestChildIndex;
                this.swap(this.nodes, index, newIndexLocation);
                index = newIndexLocation;
            }
            else break;
        }
        return poppedItem;

    }
    getLeftIndex(index) {
        const newIndex = (index * 2) + 1;
        if (!this.nodes[newIndex]) return false;
        else return newIndex;
    }

    getRightIndex(index) {
        const newIndex = (index * 2) + 2;
        if (!this.nodes[newIndex]) return false;
        else return newIndex;
    }

    enqueue(value, priority) {
        // push at the end of the array and bubble up
        // we swap it upwards until it finds its correct place
        // find the corresponding parent
        // is the newly inserted node value larger than the parent?
        // i keep doing comparisons until i find the place
        if (value === undefined) return false;

        const newNode = new Node(value, priority);

        this.nodes.push(newNode);

        let newNodePosition = this.nodes.length - 1;

        if (newNodePosition !== 0) {
            while (true) {
                const bubbledUpNode = this.bubbleUp(newNodePosition);
                if (bubbledUpNode.node && newNode.priority < bubbledUpNode.node.priority) {
                    this.swap(this.nodes, newNodePosition, bubbledUpNode.index);
                    newNodePosition = bubbledUpNode.index;
                }
                else break;
            }
        }
        return true;

    }
    swap(array, index1, index2) {
        let temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    }
    print() {
        console.log(this.nodes);
    }
}
let myMinBH = new PriorityQueue();
// [41,39,33,18,27,12,55]
myMinBH.enqueue("common cold", 5);
myMinBH.enqueue("gunshot wound", 1);
myMinBH.enqueue("high fever", 4);
myMinBH.enqueue("broken arm", 2);
myMinBH.enqueue("glass in foot", 3);

myMinBH.print();
myMinBH.dequeue();
myMinBH.print();
myMinBH.dequeue();
myMinBH.print();
