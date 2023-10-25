function naiveStringSearch(string, target) {
    let occurrences = 0;
    for (let i = 0; i < string.length; i++) {
        const currentStringChar = string[i];
        if (currentStringChar === target[0]) {
            for (let x = 1; x < target.length; x++) {
                const currentTargetChar = target[x];
                if (currentTargetChar == string[i + x]) {
                    if (x == target.length - 2) occurrences++;
                }
            }
        }
    }
    return  occurrences;
}


console.log(naiveStringSearch("alealejandro", "ale"));