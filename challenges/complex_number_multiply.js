// Given two strings representing two complex numbers.
//
// You need to return a string representing their multiplication.
// Note i^2 = -1 according to the definition.
//
// Input: "1+1i", "1+1i"
// Output: "0+2i"
// Explanation: (1 + i) * (1 + i) = 1 + i2 + 2 * i = 2i, and you need
// convert it to the form of 0+2i.

var complexNumberMultiply = function(a, b) {
  let a_split = a.split("+");
  let b_split = b.split("+");
  let a_real = parseInt(a_split[0]);
  let b_real = parseInt(b_split[0]);
  let a_imag = parseInt(a_split[1].split("i")[0]);
  let b_imag = parseInt(b_split[1].split("i")[0]);

  let result_real = a_real * b_real - a_imag * b_imag;
  let result_imag = a_real * b_imag + a_imag * b_real;

  return `${result_real}+${result_imag}i`;
};
