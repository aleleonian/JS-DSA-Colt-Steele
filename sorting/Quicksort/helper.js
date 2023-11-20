function pivot(array, start = 0, end = array.length + 1) {
    let pivot = array[start];
    let pivotIndex = start;
    for (let i = start + 1; i < array.length; i++) {
        if (array[i] < pivot) {
            pivotIndex++;
            swap(array, i, pivotIndex);
        }
    }
    swap(array, 0, pivotIndex);
    return pivotIndex;
}

function swap(array, firstIndex, secondIndex) {
    const temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));