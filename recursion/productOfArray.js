function productOfArray(array, index = array.length - 1) {
    if (index == 0) {
        return array[index];
    }
    else return array[index] * productOfArray(array, index - 1);
}

console.log(productOfArray([1, 2, 3, 10]));