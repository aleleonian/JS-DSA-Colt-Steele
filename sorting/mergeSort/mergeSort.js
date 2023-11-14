function mergeSort(array) {
    if (array.length <= 1) return array;
    else {
        const leftSide = mergeSort(array.slice(0, array.length / 2));
        const rightSide = mergeSort(array.slice(array.length / 2));
        return merge(leftSide, rightSide);
    }
}

function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}
merge([100, 200], [1, 2, 3, 5, 6])

console.log(mergeSort([1000, 0 , 0, 0, 6, 1, 90, 23, 45]));