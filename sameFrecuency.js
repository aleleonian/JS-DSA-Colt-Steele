function sameFrequency(number1, number2) {
    // good luck. Add any arguments you deem necessary.

    let frecuencies1 = generateFrecuencies(String(number1));
    let frecuencies2 = generateFrecuencies(String(number2));

    for (let key in frecuencies1) {
        if (frecuencies1[key] != frecuencies2[key]) {
            return false;
        }
    }
    return true;
}

function generateFrecuencies(stringNumber) {
    let profiler = {};
    for (const digit of stringNumber) {
        profiler[digit] = (profiler[digit] || 0) + 1
    }
    return profiler;
}

console.log(sameFrequency(3589578, 5879385));