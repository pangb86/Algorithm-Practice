// Given an array of integers, every element appears twice except for one. 
// Find that single one.

// Hash table solution: O(n) time, O(n) memory

var singleNumber = function(nums) {
    var count = {};

    for (var i = 0; i < nums.length; i++) {
        if (!count[nums[i]]) {
            count[nums[i]] = 0;
        }
        count[nums[i]]++;
    }

    for (var single in count) {
        if (count[single] < 2) {
            return parseInt(single);
        }
    }
};

// XOR solution: O(n) time, O(1) memory

var singleNumber = function(nums) {
  let result = 0;

  nums.forEach(num => (result = result ^ num));

  return result;
};
