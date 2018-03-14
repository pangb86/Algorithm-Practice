// Given a square matrix, calculate the absolute difference between
// the sums of its diagonals.

function diagonalDiff(arr) {
  let diagSum1 = 0;
  let diagSum2 = 0;
  // iterate over each row of the array
  for (var i = 0; i < arr.length; i++) {
    // add the value of the diagonal from top-left to bottom-right
    diagSum1 += arr[i][i];
    // add the value of the diagonal from bottom-left to top-right
    diagSum2 += arr[arr.length - 1 -i][i];
  }
  // return the absolute difference
  return Math.abs(diagSum1 - diagSum2);
}

// time complexity is O(n) where n is the number of rows
