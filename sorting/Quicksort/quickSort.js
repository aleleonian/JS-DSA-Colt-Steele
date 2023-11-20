function quickSort(array, leftPtr = 0, rightPtr = array.length - 1) {
    // base case
    if (leftPtr < rightPtr) {
        let pivotIndex = pivot(array, leftPtr, rightPtr);
        //left
        quickSort(array, leftPtr, pivotIndex - 1);
        //right
        quickSort(array, pivotIndex + 1, rightPtr);
    }
    return array;

}

function pivot(array, start = 0, end = array.length - 1) {

    let pivot = array[start];

    let pivotIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (array[i] < pivot) {
            pivotIndex++;
            swap(array, pivotIndex, i);
        }
    }
    swap(array, start, pivotIndex);
    return pivotIndex;
}

function swap(array, firstIndex, secondIndex) {
    const temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));