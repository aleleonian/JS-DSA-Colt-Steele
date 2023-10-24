function isSubsequence(needle, haystack) {
    // good luck. Add any arguments you deem necessary.
    let needlePointer = 0;
    let haystackPointer = 0;

    while (haystackPointer < haystack.length) {
        if (needle[needlePointer] === haystack[haystackPointer]) {
            needlePointer++;
        }
        haystackPointer++
    }
    return needlePointer === needle.length;
}

// console.log(isSubsequence('hello', 'hello world')); // true)

console.log(isSubsequence('sing', 'sting'));
// console.log(isSubsequence('abc', 'abracadabra'));
// console.log(isSubsequence('abc', 'acb'));