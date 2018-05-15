// brute force solution
// compare every value to every other value
// O(n^3) time complexity
function threeSum(arr, target) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      for (var k = j + 1; k < arr.length; j++) {
        if (arr[i] + arr[j] + arr[k] === target) {
          return [arr[i], arr[j], arr[k]];
        }
      }
    }
  }

  return 0;
}

// optimized solution
// O(n^2) time complexity
function threeSumBetter(arr, target) {
  // To find the other two elements, start two index variables
  // from two corners of the array and move them toward each other
  let left;
  let right;

  // sort the elements in ascending order
  arr.sort(numberSort);

  for (let i = 0; i < arr.length - 2; i++) {
    left = i + 1; // first element of the rest of the array
    right = arr.length - 1; // last element of array

    while (left < right) {
      if (arr[i] + arr[left] + arr[right] === target) {
        return [arr[i], arr[left], arr[right]];
      } else if (arr[i] + arr[left] + arr[right] < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  // no match was found
  return 0;
}

function numberSort (a,b) {
    return a - b;
}
