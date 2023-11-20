
function fib(number, fibStore = {}) {
    if (fibStore[number]) {
        console.log("We gonna save computation time, cos we know the value of " + number);
        return fibStore[number];
    }
    if (number <= 2) return 1;
    else {
        fibStore[number] = fib(number - 1, fibStore) + fib(number - 2, fibStore);
        return fibStore[number];
    }
}

console.log(fib(5));
