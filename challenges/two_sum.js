// Given an array of integers, return indices of the two numbers such
// that they add up to a specific target.
//
// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

function twoSum(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

function twoSumFaster(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    if (nums.includes(target - nums[i])) {
      return [i, nums.indexOf(target - nums[i])];
    }
  }
}
