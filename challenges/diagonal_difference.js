// Given a square matrix, calculate the absolute difference between
// the sums of its diagonals.

function diagonalDiff(arr) {
  let diagSum1 = 0;
  let diagSum2 = 0;

  for (var i = 0; i < arr.length; i++) {
    diagSum1 += arr[i][i];
    diagSum2 += arr[arr.length - 1 -i][i];
  }

  return Math.abs(diagSum1 - diagSum2);
}

// time complexity is O(n) where n is the number of rows
