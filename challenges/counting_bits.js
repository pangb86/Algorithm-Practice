// Given a non negative integer number num. For every numbers i in the
// range 0 ≤ i ≤ num calculate the number of 1's in their binary
// representation and return them as an array.

var countBits = function(num) {
  let result = [];

  for (var j = 0; j <= num; j++) {
    const num_bin = j.toString(2);
    let count = 0;

    for (var i = 0; i < num_bin.length; i++) {
      if (num_bin[i] === "1") {
        count += 1;
      }
    }

    result.push(count);
  }

  return result;
};
