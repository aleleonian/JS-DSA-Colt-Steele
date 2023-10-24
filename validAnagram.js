function validAnagram(word1, word2) {

    if (word1.length !== word2.length) return false;

    let word1Codes = generateCodes(word1);

    let word2Codes = generateCodes(word2);

    console.log(word1Codes);
    console.log(word2Codes);

    for (let key in word1Codes) {
        if (word1Codes[key] != word2Codes[key]) {
            return false;
        }
    }

    return true;

}

function generateCodes(word) {
    let profiler = {};
    for (const letter of word) {
        // profiler[letter] = (profiler[letter] || 0) + 1        
        if (!profiler[letter]) profiler[letter] = 1;
        else profiler[letter]++
    }
    return profiler;
}

console.log(validAnagram("ale", "lea"));