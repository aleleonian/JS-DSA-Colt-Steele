function radixSort(numArray) {

    const maxDigits = mostDigits(numArray);

    for (let k = 0; k < maxDigits; k++) {
        let buckets = {};
        createBuckets(buckets);
        for (let x = 0; x < numArray.length; x++) {
            const currentNum = numArray[x];
            const bucketIndex = getDigit(currentNum, k) || 0; // <- not sure about the OR part
            buckets[bucketIndex].push(currentNum);
        }
        numArray = arrayFromBuckets(buckets);
    }
    return numArray;

    function arrayFromBuckets(bucketsObj) {
        let newArray = [];
        Object.keys(bucketsObj).forEach(bucket => {
            newArray = newArray.concat(bucketsObj[bucket]);
        })
        return newArray;
    }
    function createBuckets(bucketsObj) {
        for (let i = 0; i < 10; i++) {
            bucketsObj[i] = [];
        }
    }
}

function getDigit(number, position) {
    return Number(String(number).split("").reverse()[position]);
}
function howManyDigits(number) {
    return String(number).length;
}

function mostDigits(numArray) {
    return numArray.reduce((accumulator, currentValue) => {
        const currentValueLength = howManyDigits(currentValue);
        if (currentValueLength > accumulator) {
            accumulator = currentValueLength;
        }
        return accumulator;
    }, 0)
}
// console.log(getDigit(1234, 1));

// console.log(howManyDigits(100));

console.log(radixSort([956,8,7,6,5,4,3,2,1,0]));
