// Initially, there is a Robot at position (0, 0). Given a sequence of its
// moves, judge if this robot makes a circle, which means it moves back to
// the original place.
//
// The move sequence is represented by a string. And each move is represent
// by a character. The valid robot moves are R (Right), L (Left), U (Up)
// and D (down). The output should be true or false representing whether
// the robot makes a circle.

var judgeCircle = function(moves) {
  let x = 0;
  let y = 0;

  moves.split("").forEach(move => {
    if (move === "R" || move === "L") {
      move === "R" ? x++ : x--;
    } else if (move === "U" || move === "D") {
      move === "U" ? y++ : y--;
    }
  });

  return x === 0 && y === 0;
};
