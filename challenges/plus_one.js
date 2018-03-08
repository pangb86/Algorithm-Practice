// Given a non-negative integer represented as a non-empty array of digits,
// plus one to the integer.
//
// You may assume the integer do not contain any leading zero, except the
// number 0 itself.
//
// The digits are stored such that the most significant digit is at the
// head of the list.

var plusOne = function(digits) {
  digits[digits.length - 1] += 1;

  for (var i = digits.length - 1; i >= 0; i--) {
    if (i === 0 && digits[0] > 9) {
      digits[0] = 0;
      digits.unshift(1);
    } else if (digits[i] > 9) {
      digits[i] = 0;
      digits[i - 1] += 1;
    }
  }

  return digits;
};
