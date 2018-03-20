// A matrix is Toeplitz if every diagonal from top-left to bottom-right 
// has the same element.
//
// Now given an M x N matrix, return True if and only if the matrix is
// Toeplitz.

var isToeplitzMatrix = function(matrix) {
  // iterate over the cells of the matrix
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      // compare element to it's top left neighbor
      // return false if they are not the same
      if (i > 0 && j > 0 && matrix[i - 1][j - 1] !== matrix[i][j]) {
        return false;
      }
    }
  }

  return true;
};
