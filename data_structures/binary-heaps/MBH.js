
class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    bubbleUp(index) {
        let result = {};
        const bubbledUpParentIndex = Math.floor((index - 1) / 2);
        result.index = bubbledUpParentIndex;
        result.value = this.values[bubbledUpParentIndex];
        return result;
    }

    remove() {
        // swap the root with the last element
        // pop last element (ex root)
        // adjust:
        // start at the new root
        // take the largest children and compare
        // if child is larger, swap. Repeat.
        // if not, that is the correct place.
        if (this.values.length === 0) return false;

        this.swap(this.values, 0, this.values.length - 1);
        const poppedItem = this.values.pop();
        let index = 0;
        while (true) {
            const leftIndex = this.getLeftIndex(index);
            const rightIndex = this.getRightIndex(index);
            if (!leftIndex && !rightIndex) break;

            let highestChildValue, highestChilIndex;

            if (this.values[leftIndex] > this.values[rightIndex] || !this.values[rightIndex]) {
                highestChildValue = this.values[leftIndex];
                highestChilIndex = leftIndex;
            }
            else if (this.values[rightIndex] > this.values[leftIndex] || !this.values[leftIndex]) {
                highestChildValue = this.values[rightIndex];
                highestChilIndex = rightIndex;
            }

            const newRootValue = this.values[index];

            let newIndexLocation;

            if (highestChildValue > newRootValue) {
                newIndexLocation = highestChilIndex;
                this.swap(this.values, index, newIndexLocation);
                index = newIndexLocation;
            }
            else break;
        }
        return poppedItem;

    }
    getLeftIndex(index) {
        const newIndex = (index * 2) + 1;
        if (!this.values[newIndex]) return false;
        else return newIndex;
    }

    getRightIndex(index) {
        const newIndex = (index * 2) + 2;
        if (!this.values[newIndex]) return false;
        else return newIndex;
    }

    insert(value) {
        // push at the end of the array and bubble up
        // we swap it upwards until it finds its correct place
        // find the corresponding parent
        // is the newly inserted node value larger than the parent?
        // i keep doing comparisons until i find the place
        if (value === undefined) return false;

        this.values.push(value);

        let newValuePosition = this.values.length - 1;

        if (newValuePosition !== 0) {
            while (true) {
                const newParent = this.bubbleUp(newValuePosition, value);
                if (newParent.value && value > newParent.value) {
                    this.swap(this.values, newValuePosition, newParent.index);
                    newValuePosition = newParent.index;
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
        console.log(this.values);
    }
}
let myMaxBH = new MaxBinaryHeap();
// [41,39,33,18,27,12,55]
myMaxBH.insert(41);
myMaxBH.insert(39);
myMaxBH.insert(33);
myMaxBH.insert(18);
myMaxBH.insert(27);
myMaxBH.insert(12);
myMaxBH.insert(55);

myMaxBH.print();
myMaxBH.remove();
myMaxBH.print();
myMaxBH.remove();
myMaxBH.print();
