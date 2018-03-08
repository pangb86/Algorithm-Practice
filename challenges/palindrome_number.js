// Determine whether an integer is a palindrome

var isPalindrome = function(x) {
    if (Math.abs(x) !== x) {
        return false;
    }

    let num_str = x.toString();
    for (var i = 0; i < Math.floor(num_str.length / 2) ; i++) {
        if (num_str[i] !== num_str[num_str.length - i - 1]) {
            return false;
        }
    }

    return true;
};
