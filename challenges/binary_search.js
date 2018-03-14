// recursive binary search of a sorted array given an array and a target

function binarySearch(arr, target) {
  let mid = Math.floor(arr.length / 2);

  if (arr[mid] === target) {
    return mid;
  }
  if (mid === 0) {
    return -1;
  }

  let slicedArr = [];

  if (arr[mid] < target) {
    slicedArr = arr.slice(mid);
  } else {
    slicedArr = arr.slice(0, mid);
  }

  let idx = binarySearch(slicedArr, target);

  if (idx === -1) {
    return -1;
  } else if (arr[mid] < target) {
    return mid + idx;
  } else {
    return idx;
  }
}
