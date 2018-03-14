// recursive binary search of a sorted array given an array and a target
// value

function binarySearch(arr, target) {
  // find the middle index of the array
  let mid = Math.floor(arr.length / 2);
  // return the middle index if the target is at the middle index
  if (arr[mid] === target) {
    return mid;
  }
  // if it's not found at the middle index and the middle index is zero
  // (indicating we have a one element array without the target value),
  // return -1 to indicate that the search was unsuccessful
  if (mid === 0) {
    return -1;
  }

  let slicedArr = [];
  // if the target is larger than the middle element, we want to search
  // the right half of the array. Otherwise we want to search the left
  // half
  if (arr[mid] < target) {
    slicedArr = arr.slice(mid);
  } else {
    slicedArr = arr.slice(0, mid);
  }
  // recursive call to search the half ot the array we want
  let idx = binarySearch(slicedArr, target);
  // return -1 if not found. Else return the index if it's in the lower
  // half or the index in the right array plus the middle index if it's
  // in the upper half
  if (idx === -1) {
    return -1;
  } else if (arr[mid] < target) {
    return mid + idx;
  } else {
    return idx;
  }
}
