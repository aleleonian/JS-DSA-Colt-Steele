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

console.log(mergeArrays([], [1, 5, 10, 20, 29, 36, 40]));


/*
Colt's solution:

// Merges two already sorted arrays
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}
merge([100,200], [1,2,3,5,6])

                   

*/