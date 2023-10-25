function naiveSearch(long, short) {
    var count = 0;
    for (var i = 0; i < long.length; i++) {
        for (var j = 0; j < short.length; j++) {
            if (short[j] !== long[i + j]) break;
            if (j === short.length - 1) count++;
        }
    }
    return count;
}


function naiveStringSearch(string, target) {
    let occurrences = 0;
    for (let i = 0; i < string.length; i++) {
        const currentStringChar = string[i];
        if (currentStringChar === target[0]) {
            if (target.length == 1) occurrences++;
            else {
                for (let x = 1; x < target.length; x++) {
                    const currentTargetChar = target[x];
                    if (currentTargetChar == string[i + x]) {
                        if (x == target.length - 1) occurrences++;
                    }
                    else break;
                }
            }
        }
    }
    return occurrences;
}


console.log(naiveStringSearch("alealejandro", "ale"));