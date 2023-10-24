function sumZero(array) {
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        if (array[left] + array[right] == 0) {
            console.log("found a pair!");
            console.log("first->", array[left]);
            console.log("second->", array[right]);
            break;
        }
        else if (array[left] + array[right] > 0) {
            right--;
        }
        else left++;
    }
}

console.log(sumZero([-3, -2, -1, 3]));