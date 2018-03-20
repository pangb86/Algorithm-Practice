// We are given two strings, A and B.
//
// A shift on A consists of taking string A and moving the leftmost
// character to the rightmost position. For example, if A = 'abcde',
// then it will be 'bcdea' after one shift on A. Return True if and
// only if A can become B after some number of shifts on A.

var rotateString = function(A, B) {
  if (A.length !== B.length) {
    return false;
  }

  for (var i = 0; i < A.length; i++) {
    if (A === B) {
      return true;
    }
    A = A.slice(1) + A[0];
  }

  return false;
};
