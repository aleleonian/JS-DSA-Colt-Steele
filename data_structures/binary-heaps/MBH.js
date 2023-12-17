
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
    findParent(index, childValue) {
        let bubbledUpResult = this.bubbleUp(index);
        while (bubbledUpResult) {
            if (childValue > bubbledUpResult.value) {
                return bubbledUpResult;
            }
            bubbledUpResult.index--;
            if (bubbledUpResult.index < 0) break;

            bubbledUpResult = this.bubbleUp(bubbledUpResult.index);
        }
        return index;
    }
    insert(value) {
        // push at the end of the array and bubble up
        // we swap it upwards until it finds its correct place
        // find the corresponding parent
        // is the newly inserted node value larger than the parent?
        // i keep doing comparisons until i find the place
        if (value) {
            this.values.push(value);
            const newValuePosition = this.values.length - 1;
            if (newValuePosition !== 0) {
                const newValueParent = this.findParent(newValuePosition, value);
                if (newValueParent && newValuePosition !== newValueParent) {
                    //swap this.values[newValuePosition] for this.values[newValueParent.index]
                    this.swap(this.values, newValuePosition, newValueParent.index);
                    return newValueParent.index;
                }
                else if(newValueParent == newValuePosition) return true;

                return false;
            }
            return newValuePosition
        }
    }
    swap(array, index1, index2) {
        let temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    }
}
const mbh = new MaxBinaryHeap();

console.log(mbh.insert(3));
console.log(mbh.insert(2));
console.log(mbh.insert(4));
