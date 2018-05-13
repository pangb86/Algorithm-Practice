// https://www.codewars.com/kata/54da539698b8a2ad76000228

function isValidWalk(walk) {
  var xCoord = 0;
  var yCoord = 0;

  if (walk.length !== 10) {
    return false;
  }

  for (var i = 0; i < walk.length; i++) {
    if (walk[i] === 'n') {
      yCoord++;
    } else if (walk[i] === 's') {
      yCoord--;
    } else if (walk[i] === 'w') {
      xCoord--;
    } else if (walk[i] === 'e') {
      xCoord++;
    }
  }

  return  xCoord === 0 && yCoord === 0;
}
