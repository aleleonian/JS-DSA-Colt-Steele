// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(string) {
    // add whatever parameters you deem necessary - good luck!
    if (string.length <= 1) return true;

    else if (string[0] !== string[string.length - 1]) {
        return false;
    }
    else return isPalindrome(string.substring(1, string.length - 1))
}
console.log(isPalindrome("foobar"));
