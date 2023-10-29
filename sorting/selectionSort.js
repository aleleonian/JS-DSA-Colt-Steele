
function selectionSort(array) {

    let leftEndPtr = 0;
    let scannerPtr = 1;
    let smallestElementIndex = leftEndPtr;
    //[3,2,1]
    while (leftEndPtr < array.length - 1) {
        // if we find something smaller than array[smallestElementIndex] then we update smallestElementIndex
        if (array[scannerPtr] < array[smallestElementIndex]) smallestElementIndex = scannerPtr;
        // if this is the last iteration for this pass, we might have to swap
        if (scannerPtr == array.length - 1) {
            if (smallestElementIndex != leftEndPtr) {
                swap(array, smallestElementIndex, leftEndPtr);
            }
            // if this is the end of this pass, let's move the left end pointer
            // one step to the right
            leftEndPtr++;
            smallestElementIndex = leftEndPtr;
            scannerPtr = leftEndPtr + 1;
        }
        else {
            //if this is not the end, let's move the scannerPtr closer to the end
            scannerPtr++;
        }

    }
    return array;
}

function swap(array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

console.log(selectionSort([3, 2, 10, 4, 1, 8]))