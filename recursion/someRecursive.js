// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true

function someRecursive(array, callback, index = 0) {
    if (index == array.length) {
        return false;
    }
    else if (callback([index])) {
        return true;
    }
    else return someRecursive(array, callback, index + 1);
}

// i like better chatGPT's version because my:
//      if (index == 0) {
//             return callback(array[index]);
//         }
// kinda does not make sense.
// i like this code better:
// 
// function someRecursive(array, callback) {
//     // add whatever parameters you deem necessary - good luck!
//     let someTrue = false;
// if (index == array.length) {
//     return false;
// }

// My original code:
//     function recurse(array, callback, index = array.length - 1) {
//         if (index == 0) {
//             return callback(array[index]);
//         }
//         if (callback(array[index])) {
//             someTrue = true;
//             return someTrue;
//         }
//         else return recurse(array, callback, index - 1);
//     }

//     recurse(array, callback);
//     return someTrue;
// }


function isOdd(number) {
    return number % 2 !== 0;
}

// console.log(someRecursive([4, 6, 8], val => val > 10)); // false
// console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
// console.log(someRecursive([4, 6, 8], val => val > 10));