function maxSubarray(nums) {
  var sum = 0;
  var maxSum = -Infinity;

  for(var i = 0; i < nums.length; i++){
    sum += nums[i];

    if (sum > maxSum){
      maxSum = sum;
    }
    if(sum < 0){
      sum = 0;
    }
  }
  
  return maxSum;
}
