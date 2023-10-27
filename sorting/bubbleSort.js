function bubbleSortNaive(array) {
    // This version is naive because it iterates way too many times.
    // It iterates more times than necessary since as loops goe by, some items
    // are already sorted and need no further comparison / sorting.
    // Also, when x is array.length the x+1 comparison goes out of bounds.
    for (let i = 0; i < array.length; i++) {
        for (let x = 0; x < array.length; x++) {
            if (array[x] > array[x + 1]) {
                swap(array, x, x + 1);
            }
        }
    }
    return array;
}
function bubbleSort(array) {

    // In this version the inner loop is controlled by the outer loop's i that shrinks
    // as time goes by and does not allow useless or out of bound comparisons with x
    for (let i = array.length; i > 0; i--) {
        let swappedAnything = false;
        for (let x = 0; x < i - 1; x++) {
            if (array[x] > array[x + 1]) {
                swap(array, x, x + 1);
                swappedAnything = true;
            }
        }
        if (!swappedAnything) break;
    }

    return array;
}

function swap(array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}
// console.log(bubbleSort([3, 1, 5, 10, 0]));
console.log(bubbleSortNaive([3, 1, 5, 10, 0]));