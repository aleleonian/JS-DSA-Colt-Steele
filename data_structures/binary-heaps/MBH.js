
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

    insert(value) {
        // push at the end of the array and bubble up
        // we swap it upwards until it finds its correct place
        // find the corresponding parent
        // is the newly inserted node value larger than the parent?
        // i keep doing comparisons until i find the place
        if (!value) return false;

        this.values.push(value);

        let newValuePosition = this.values.length - 1;

        if (newValuePosition !== 0) {
            while (true) {
                const newParent = this.bubbleUp(newValuePosition, value);
                if (newParent.value && value > newParent.value) {
                    this.swap(this.values, newValuePosition, newParent.index);
                    newValuePosition = newParent.index;
                }
                else return true;
            }
        }
        else return newValuePosition

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
const mbh = new MaxBinaryHeap();
// [41,39,33,18,27,12,55]
mbh.insert(41);
mbh.insert(39);
mbh.insert(33);
mbh.insert(18);
mbh.insert(27);
mbh.insert(12);
mbh.insert(11);
mbh.print();