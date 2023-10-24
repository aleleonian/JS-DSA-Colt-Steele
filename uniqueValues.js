function uv(array) {

    // return new Set(array).size;
    if (array.length == 0) return 0;

    let lastUniqueValue = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] != array[lastUniqueValue]) {
            lastUniqueValue++;
            array[lastUniqueValue] = array[i];
        }
    }
    return lastUniqueValue + 1;
}
// function uv(array) {

//     // return new Set(array).size;
//     if (array.length == 0) return;

//     let lastUniqueValue = 0;
//     let uniqueValues = 1;

//     for (let i = 1; i < array.length; i++) {
//         if (array[i] != array[lastUniqueValue]) {
//             lastUniqueValue = i;
//             uniqueValues++;
//         }
//     }
//     return uniqueValues;
// }

console.log(uv([1, 1, 1, 1, 1, 2, 3]));