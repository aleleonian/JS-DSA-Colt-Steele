function maxSubarraySum(array, windowSize) {

    // example of sliding window

    let maxSum = 0;
    let tempSum = 0;

    for (let i = 0; i < windowSize; i++) {
        maxSum += array[i];
    }
    tempSum = maxSum;

    for (let i = windowSize; i < array.length; i++) {
        tempSum -= array[i - windowSize];
        tempSum += array[i];
        maxSum = Math.max(tempSum, maxSum);
    }

    return maxSum || null;
}

// console.log(maxSubarraySum([2,3], 3));
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2));
