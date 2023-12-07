class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    add(value){
        let newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
        }
        else {
            if(newNode.value > this.root.value){
                // new node is bigger than root
                // shoudl this be a loop?
            }
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