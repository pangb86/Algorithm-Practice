// Write a JavaScript function that takes a string and returns true if
// it's a palindrome, false if it's not.

function isPalindrome (string) {
  var length = string.length;
  // iterate over the first half of the string
  for (var i = 0; i < length / 2; i++) {
    // compare the current letter and and it's mirrored letter in the
    // second half of the string
    if (string[i] !== string[length - 1 - i]) {
      // if they're not equal, we know the string is not a palindrome
      return false;
    }
  }
  // if we have checked each letter, it's a palindrome
  return true;
}
