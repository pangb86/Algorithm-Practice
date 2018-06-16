// O(n^2) time complexity with quicksort
// sort the input array in ascending order
// initialize a left index at the 0
// initialize a right index at the end of the array
// while left index is less than right index,
// check to see if the elements the these two indexes sum to the target
// if so, return the pair
// if the sum is less, increment the left index
// if the sum is more, increment the right index
// if the loop terminates, no pair was found
function pairSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  arr.sort(numberSort);

  while (left < right) {
    if (arr[left] + arr[right] === target) {
      return [arr[left], arr[right]];
    } else if (arr[left] + arr[right] < target) {
      left++;
    } else {
      right--;
    }
  }

  return 0;
}

function numberSort(a, b) {
  return a - b;
}

// Complement Hash solution
// loop through the input array
// see target minus the current element exists in the hash
// add the current element to the hash
// if the loop terminates, no valid pair was found
function pairSumBetter(arr, target) {
  let numHash = {};

  for (let i = 0; i < arr.length; i++) {
    let comp = target - arr[i];

    if (numHash[comp] !== undefined) {
      return [comp, arr[i]];
    }
    numHash[arr[i]] = true;
  }

  return 0;
}
// O(n) time complexity
// O(n) space complexity
