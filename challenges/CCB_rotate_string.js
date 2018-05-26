// We are given two strings, A and B.
//
// A shift on A consists of taking string A and moving the leftmost
// character to the rightmost position. For example, if A = 'abcde',
// then it will be 'bcdea' after one shift on A. Return True if and
// only if A can become B after some number of shifts on A.

var rotateString = function(A, B) {
  // return false if the given strings are not the same length
  if (A.length !== B.length) {
    return false;
  }
  // iterate over string A
  for (var i = 0; i < A.length; i++) {
    // return true if A equals B
    if (A === B) {
      return true;
    }
    // move the first character of A to the end
    A = A.slice(1) + A[0];
  }
  // return false if A cannot equal B after the rotations
  return false;
};
// O(n) time complexity
// O(1) space complexity
