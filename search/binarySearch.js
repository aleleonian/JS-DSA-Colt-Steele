const binarySearch = (sortedArray, searchValue) => {

    let leftPtr = 0;
    let rightPtr = sortedArray.length - 1;
    let middle = Math.ceil(sortedArray.length / 2);

    while (leftPtr <= rightPtr) {
        if (searchValue === sortedArray[middle]) {
            return middle;
        }
        else if (searchValue > sortedArray[middle]) {
            leftPtr = middle + 1;
        }
        else {
            rightPtr = middle - 1;
        }
        middle = Math.ceil((rightPtr + leftPtr) / 2);
    }
    return -1;

}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));