// Write a function that rotates a NxN matrix 90 degrees clockwise.

function rotateMatrix (matrix) {
  let dim = matrix.length;
  let result = [];

  // initialize result matrix
  for (let i = 0; i < dim; i++) {
    result.push([]);
  }

  // iterate through each row
  for (let i = 0; i < dim; i++) {
    // iterate through the column
    for (let j = 0; j < dim; j++) {
      var value = matrix[i][j];
      var oldSpot = [i, j];
      var newSpot = rotateClockwise(oldSpot);
      addPoint(result, newSpot, value);
    }
  }

  return result;
}

function rotateClockwise(point, dim) {
  // point is an array with point[0] = m, point[1] = n
  let newPoint = [];
  // newPoint's row (m) is found from point's column (n)
  newPoint[0] = point[1];
  // newPoint's col (n) is found from absolute value of (dim - point's row(m))
  newPoint[1] = dim - point[0] - 1;

  return newPoint;
}

function addPoint(matrix, point, value) {
  // matrix is an empty array
  // point is a point to be pushed in
  matrix[point[0]][point[1]] = value;
}
// O(n) time complexity
// O(n) space complexity
