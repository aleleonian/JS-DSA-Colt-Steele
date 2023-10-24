//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(number) {
    if (number <= 1) {
        return 1
    }
    else {
        return number * factorial(number - 1);
    }
}

console.log(factorial(7));