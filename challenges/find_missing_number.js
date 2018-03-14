// # Assume an array of non-negative integers. A second array is formed by
// # shuffling the elements of the first array and deleting a random element.
// # Given these two arrays, find which element is missing in the second
// # array. Do this in linear time with constant memory use.

function findMissingNum(arr1, arr2) {
  let sum1 = arr1.reduce((total, current) => total + current);
  let sum2 = arr2.reduce((total, current) => total + current);
  // the missing number is the difference of the sums of the arrays
  return sum1 - sum2;
}
