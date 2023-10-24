// Write a function called averagePair. 
// Given a sorted array of integers and a target average, 
// determine if there is a pair of values in the array where the average 
// of the pair equals the target average. 
// There may be more than one pair that matches the average target.

function averagePair(array, target) {
    // add whatever parameters you deem necessary - good luck!
    if (array.length <= 1) return false;
    let left = 0;
    let right = array.length -1;

    while (right > left) {
        const currentAverage = (array[left] + array[right]) / 2;
        if (currentAverage == target) {
            return true;
        }
        else if (currentAverage < target) left++;
        else right--;
    }
    return false;
}

// console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1,3,3,5,6,7,10,12,19],8));