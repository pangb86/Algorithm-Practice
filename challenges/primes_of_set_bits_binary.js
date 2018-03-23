// Given two integers L and R, find the count of numbers in the
// range [L, R] (inclusive) having a prime number of set bits in their
// binary representation.
//
// (Recall that the number of set bits an integer has is the number
// of 1s present when written in binary. For example, 21 written in
// binary is 10101 which has 3 set bits. Also, 1 is not a prime.)

var countPrimeSetBits = function(L, R) {
  let count = 0;
  // iterate over the range L to R inclusive
  for (let i = L; i <= R; i++) {
    // convert each number to a binary string
    let binString = (i).toString(2);
    let ones = 0;
    // iterate over the string ang count the ones
    for (let j = 0; j < binString.length; j++) {
      if (binString[j] === "1") {
        ones++;
      }
    }
    // determine if the number of ones is a prime number
    // add one to the count if it is
    if (isPrime(ones)) {
      count++;
    }
  }

  return count;
};

var isPrime = function(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};
