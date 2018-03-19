// A self-dividing number is a number that is divisible by every digit
// it contains.
//
// For example, 128 is a self-dividing number because 128 % 1 == 0,
// 128 % 2 == 0, and 128 % 8 == 0.
//
// Also, a self-dividing number is not allowed to contain the digit zero.
//
// Given a lower and upper number bound, output a list of every possible
// self dividing number, including the bounds if possible.

var selfDividingNumbers = function(left, right) {
  let result = [];

  for (var i = left; i <= right; i++) {
    let digits = i.toString().split("");
    if (digits.includes("0")) {
      continue;
    }
    let test = (digits.every(digit => i % parseInt(digit) === 0));
    if (test) {
      result.push(i);
    }
  }

  return result;
};
