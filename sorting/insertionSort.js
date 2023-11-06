
function insertionSort(arr) {
    var currentUnsorteditem;
    for (var unsortedPortionPtr = 1; unsortedPortionPtr < arr.length; unsortedPortionPtr++) {
        currentUnsorteditem = arr[unsortedPortionPtr];
        for (var sortedPortionPtr = unsortedPortionPtr - 1; sortedPortionPtr >= 0 && arr[sortedPortionPtr] > currentUnsorteditem; sortedPortionPtr--) {
            arr[sortedPortionPtr + 1] = arr[sortedPortionPtr]
        }
        arr[sortedPortionPtr + 1] = currentUnsorteditem;
    }
    return arr;
}

console.log(insertionSortMine([9, 1, 3, 76, 4]));


function insertionSortMine(array) {
    let unsortedPortionPtr = 1;
    let sortedPortionPtr = unsortedPortionPtr - 1;
    let currentUnsorteditem = array[unsortedPortionPtr];

    while (unsortedPortionPtr < array.length) {

        if (sortedPortionPtr >= 0 && array[sortedPortionPtr] > currentUnsorteditem) {
            array[sortedPortionPtr + 1] = array[sortedPortionPtr];
            sortedPortionPtr--;
        }
        else {
            array[sortedPortionPtr + 1] = currentUnsorteditem;
            unsortedPortionPtr++;
            sortedPortionPtr = unsortedPortionPtr - 1;
            currentUnsorteditem = array[unsortedPortionPtr];
        }
    }

    return array;
}
