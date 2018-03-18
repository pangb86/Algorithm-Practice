// Given an 2D board, count how many battleships are in it. The
// battleships are represented with 'X's, empty slots are represented
// with '.'s. You may assume the following rules:
//
// You receive a valid board, made of only battleships or empty slots.
//
// Battleships can only be placed horizontally or vertically.
// In other words, they can only be made of the shape 1xN
// (1 row, N columns) or Nx1 (N rows, 1 column), where N can be of any
// size.
//
// At least one horizontal or vertical cell separates between two
// battleships - there are no adjacent battleships.

var countBattleships = function(board) {
  let count = 0;

  for (let i = 0; i < board.length; i++) {
    let row = board[i];
    for (let j = 0; j < row.length; j++) {
      if (row[j] === "X") {
        if (row[j - 1] !== "X" && (i - 1 < 0 || board[i - 1][j] !== "X")) {
          count++;
        }
      }
    }
  }

  return count;
};
