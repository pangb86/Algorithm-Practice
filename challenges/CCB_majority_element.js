// Given an array of size n, find the majority element. The majority
// element is the element that appears more than ⌊ n/2 ⌋ times.
//
// You may assume that the array is non-empty and the majority element
// always exist in the array.

var majorityElement = function(nums) {
  // couter hash where each key is an element value and the value is it's
  // frequency
  let count = {};
  let result = null;
  // iterate over the numbers and count their frequencies
  nums.forEach((num) => {
    if (!count[num]) count[num] = 0;
    count[num]++;
    // if it's frequency is over half the array length, return it
    if (count[num] > nums.length / 2) return num;
  });
  // iterate over the counter hash and check if each element's
  // frequency is over half the length of the array
  for (var key in count) {
    if (count[key] > nums.length / 2) return parseInt(key);
  }
};
// O(n) time complexity
// O(n) space complexity
