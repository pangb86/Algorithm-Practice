// Given a non negative integer number num. For every numbers i in the
// range 0 ≤ i ≤ num calculate the number of 1's in their binary
// representation and return them as an array.

var countBits = function(num) {
  let result = [];
  // iterate over the range of zero to num
  for (var j = 0; j <= num; j++) {
    // convert the current number to a binary string
    const num_bin = j.toString(2);
    let count = 0;
    // iterate over the binary string and count the one's
    for (var i = 0; i < num_bin.length; i++) {
      if (num_bin[i] === "1") {
        count += 1;
      }
    }
    // push the count of one's for that number into the results array
    result.push(count);
  }

  return result;
};
