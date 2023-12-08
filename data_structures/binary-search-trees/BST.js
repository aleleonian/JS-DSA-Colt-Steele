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
    asciiTree(currentNode = this.root) {
        this.tree += "\t\t\t " + currentNode.value;
        this.tree += "\n";
        if (currentNode.left) {
            this.tree += "\t\t   /";
            this.asciiTree(currentNode.left)
        }
        else if (currentNode.right) {
            if (currentNode.left) {
                this.tree += " \\";
            }
            else this.tree += "\t\t    \\";

            this.asciiTree(currentNode.right);
        }
    }
    buildTree = (root, curr_index = 0, index = false, delimiter = '-') => {
        if (!root) return [[], 0, 0, 0];
        let line1 = [];
        let line2 = []
        let node_repr = index ? `${curr_index}${delimiter}${root.value}` : root.value.toString();
        let new_root_width = node_repr.length;
        let gap_size = node_repr.length;
        let [l_box, l_box_width, l_root_start, l_root_end] = this.buildTree(root.left, (2 * curr_index) + 1, index, delimiter);
        let [r_box, r_box_width, r_root_start, r_root_end] = this.buildTree(root.right, (2 * curr_index) + 2, index, delimiter);
        let new_root_start = 0;
        let new_root_end = 0;
        if (l_box_width > 0) {
            let l_root = Math.floor((l_root_start + l_root_end) / 2) + 1;
            line1.push(' '.repeat(l_root + 1));
            line1.push('_'.repeat(l_box_width - l_root));
            line2.push(' '.repeat(l_root) + '/');
            line2.push(' '.repeat(l_box_width - l_root));
            new_root_start = l_box_width + 1;
            gap_size += 1;
        } else {
            new_root_start = 0;
        }
        line1.push(node_repr);
        line2.push(' '.repeat(new_root_width));
        if (r_box_width > 0) {
            let r_root = Math.floor((r_root_start + r_root_end) / 2);
            line1.push('_'.repeat(r_root));
            line1.push(' '.repeat(r_box_width - r_root + 1));
            line2.push(' '.repeat(r_root) + '\\');
            line2.push(' '.repeat(r_box_width - r_root));
            gap_size += 1;
        }
        new_root_end = new_root_start + new_root_width - 1;
        let new_box = [line1.join(''), line2.join('')];
        let l_line, r_line;
        for (let i = 0; i < Math.max(l_box.length, r_box.length); i++) {
            if (i < l_box.length) l_line = l_box[i];
            else l_line = ' '.repeat(l_box_width);
            if (i < r_box.length) r_line = r_box[i];
            else r_line = ' '.repeat(r_box_width);
            new_box.push(l_line + ' '.repeat(gap_size) + r_line);
        }
        return [new_box, new_box[0].length, new_root_start, new_root_end];
    };
    print() {
        let lines = this.buildTree(this.root, 0, false, '-')[0];
        let output = "";
        for (let line of lines) {
            output += line + '\n';
        }
        console.log(output);
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

myBST.add(5);
myBST.add(2);
myBST.add(1);
myBST.add(20);
myBST.add(7);
myBST.add(120);
myBST.add(33);
console.log(myBST.find(120));
console.log(myBST.find(500));
// myBST.print();
// console.log(myBST.tree);