function areThereDuplicates(...args) {
    // good luck. (supply any arguments you deem necessary.)

    if (args.length <= 1) return false;

    args.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      });


    let lastUniqueValue = 0;

    for (let i = 1; i < args.length; i++) {
        if (args[i] != args[lastUniqueValue]) {
            lastUniqueValue++;
            args[lastUniqueValue] = args[i];
        }
    }
    return !(lastUniqueValue + 1 === args.length)
}

// console.log(areThereDuplicates('a','b','c','a'))
console.log(areThereDuplicates(1,2,3,4,2))