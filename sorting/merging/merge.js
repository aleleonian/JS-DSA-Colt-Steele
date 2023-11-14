function mergeArrays(arr1, arr2) {
    let newArray = [];
    let left = 0;
    let right = 0;

    //[1, 2], [0, 0]
    while (left < arr1.length || right < arr2.length) {

        if (typeof arr1[left] != "undefined" && (left == right || left < right)) {
            if (typeof arr2[right] != "undefined") {
                if (arr1[left] < arr2[right]) {
                    newArray.push(arr1[left]);
                    left++;
                }
                else {
                    newArray.push(arr2[right]);
                    right++;
                }
            }
            else {
                newArray.push(arr1[left]);
                left++;
            }
        }
        else {
            if (typeof arr1[left] != "undefined") {
                if (arr2[right] < arr1[left]) {
                    newArray.push(arr2[right]);
                    right++;
                }
                else {
                    newArray.push(arr1[left]);
                    left++;
                }
            }
            else {
                newArray.push(arr2[right]);
                right++;
            }
        }
    }
    return newArray;
}

console.log(mergeArrays([2, 3, 7, 35], [1, 5, 10, 20, 29, 36, 40]));