// # Write a function that takes an array of integers and returns their sum.
// # Use recursion.

const recSum = (arr) => {
  if (arr.length === 0) {
    return 0;
  }

  return arr[0] + recSum(arr.slice(1));
};
