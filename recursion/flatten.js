function flatten(array) {
    // add whatever parameters you deem necessary - good luck!

    let flattenedArray = [];

    function doFlat(arg) {
        if (!Array.isArray(arg)) {
            flattenedArray.push(arg);
        }
        for (let i = 0; i < arg.length; i++) {
            doFlat(arg[i]);
        }
    }
    doFlat(array);

    return flattenedArray;
}

console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
// console.log(flatten([[1],[2],[3]])) // [1,2,3]

// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3
