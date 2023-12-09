class BinarySearchTree {
    constructor() {
        this.root = null;
        this.tree = "";
    }
    add(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        }
        else {
            let nextNode = this.root;
            let lastBranch = "";

            // this loop will find the place where we have to append newNode
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
                }
                else return undefined;
            }
            nextNode[lastBranch] = newNode;
            return this;
        }
    }
    find(value) {
        if (!this.root) {
            return false;
        }
        else {
            let currentNode = this.root;

            while (true) {
                if (currentNode.value === value) break;

                if (value > currentNode.value) {
                    if (currentNode.right) {
                        currentNode = currentNode.right;
                    }
                    else {
                        currentNode = false;
                        break;
                    }
                }
                else if (value < currentNode.value) {
                    if (currentNode.left) {
                        currentNode = currentNode.left;
                    }
                    else {
                        currentNode = false;
                        break;
                    }
                }
            }
            return currentNode;
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

function bfs(bst) {

    const values = [];
    const queue = [];

    if (bst.root) {
        queue.push(bst.root);
        while(queue.length > 0){
            const poppedNode = queue.shift();
            values.push(poppedNode.value);
            if(poppedNode.left) queue.push(poppedNode.left);
            if(poppedNode.right) queue.push(poppedNode.right);
        }
        return values;
    }
    else {
        return false;
    }
}

let myBST = new BinarySearchTree();

myBST.add(10);
myBST.add(5);
myBST.add(20);
myBST.add(1);

console.log(bfs(myBST));