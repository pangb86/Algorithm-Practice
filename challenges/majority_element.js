// Given an array of size n, find the majority element. The majority
// element is the element that appears more than ⌊ n/2 ⌋ times.
//
// You may assume that the array is non-empty and the majority element
// always exist in the array.

var majorityElement = function(nums) {
  let count = {};
  let result = null;

  nums.forEach((num) => {
    if (!count[num]) count[num] = 0;
    count[num]++;
    if (count[num] > nums.length / 2) return num;
  });

  for (var key in count) {
    if (count[key] > nums.length / 2) return parseInt(key);
  }
};
