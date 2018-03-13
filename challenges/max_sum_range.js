// Given an input array, find the maximum possible sum over a sequence
// in the array, return 0 if the sum is negative

const maxRangeSum = function(numArr) {
  let maxGains = 0;
  let gainsSoFar = 0;

  for (let i = 0; i < numArr.length; i++) {
    gainsSoFar += numArr[i];
    if (gainsSoFar < 0) {
      gainsSoFar = 0;
    }
    if (maxGains < gainsSoFar) {
      maxGains  = gainsSoFar;
    }
  }

  return maxGains;
};
