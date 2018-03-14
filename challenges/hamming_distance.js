// The Hamming distance between two integers is the number of positions
// at which the corresponding bits are different.

// Given two integers x and y, calculate the Hamming distance.

var hammingDistance = function(x, y) {
  // XOR x and y and covert to a binary string,
  // remove the zero's and count the length of the resulting string
  return (x ^ y).toString(2).split("0").join("").length;
};
