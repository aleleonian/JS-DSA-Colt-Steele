class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    add(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        }
        else {
            let nextNode = this.root;
            let lastBranch = "";

            while (true) {
                if (newNode.value > nextNode.value) {
                    if (nextNode.right) {
                        nextNode = nextNode.right;
                    }
                    else {
                        lastBranch = "right";
                        break;
                    }
                }
                else if (newNode.value < nextNode.value) {
                    if (nextNode.left) {
                        nextNode = nextNode.left;
                    }
                    else {
                        lastBranch = "left";
                        break;
                    }
                    nextNode = nextNode.left;
                }
                else return undefined;
            }
            nextNode[lastBranch] = newNode;
            return this;
        }
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let myBST = new BinarySearchTree();

myBST.add(1);
myBST.add(2);