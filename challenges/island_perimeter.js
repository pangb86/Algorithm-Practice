// You are given a map in form of a two-dimensional integer grid where
// 1 represents land and 0 represents water. Grid cells are connected
// horizontally/vertically (not diagonally). The grid is completely
// surrounded by water, and there is exactly one island (i.e., one or
// more connected land cells). The island doesn't have "lakes" (water
// inside that isn't connected to the water around the island). One cell
// is a square with side length 1. The grid is rectangular, width and
// height don't exceed 100. Determine the perimeter of the island.

var islandPerimeter = function(grid) {
  let perimeter = 0;
  // iterate over every square of the grid
  for (var i = 0; i < grid.length; i++) {
    let row = grid[i];
    for (var j = 0; j < row.length; j++) {
      let square = row[j];
      // if the grid is land, check if the any of the surrounding
      // blocks are land; if not, add one to the perimeter
      if (square === 1) {
        if (i === 0 || grid[i - 1][j] !== 1) perimeter++;
        if (grid[i][j + 1] !== 1) perimeter++;
        if (i === grid.length - 1 || grid[i + 1][j] !== 1) perimeter++;
        if (grid[i][j - 1] !== 1) perimeter++;
      }
    }
  }

  return perimeter;
};
