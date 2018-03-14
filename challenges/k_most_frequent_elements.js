// Given an array and a positive integer k.  Return an array containing
// k elements that occur the most

function kMostElements(arr, k) {
  // counter hash
  let count = {};
  // frequency histogram
  let freq = [];
  // results array
  let result = [];
  // build a count hash where the key is the value of the array element
  // and the value is the number of times it occurs
  arr.forEach(ele => {
    if (count[ele] === undefined) {
      count[ele] = 0;
    }
    count[ele] += 1;
  });
  // Each index in freq array represents a frequency
  // for each element value. Put each element in a sub-array(bucket)
  // corresponding to its frequency in the freq array
  for (var key in count) {
    if (freq[count[key]] === undefined) {
      freq[count[key]] = [key];
    } else {
      freq[count[key]].push(key);
    }
  }
  // iterate backwards over the frequency array
  // Note: most frequent corresponds to the largest index
  for (let i = freq.length - 1; i > 0; i--) {
    // look at the current bucket of values
    let currNums = freq[i];
    // if theres contents in the bucket, push them one by one to the
    // results array until our results array length is equal to k
    if (currNums !== undefined) {
      for (let j = 0; j < currNums.length; j++) {
        result.push(currNums[j]);

        if (result.length === k) {
          break;
        }
      }
    }
    if (result.length === k) {
      break;
    }
  }

  return result;
}
