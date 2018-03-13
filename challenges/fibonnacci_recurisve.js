// # Write a function, fibs(num) which returns the first n elements from
// # the fibonnacci sequence, given n.

function fibs(num) {
  if (num === 0) {
    return [];
  } else if (num === 1) {
    return [0];
  } else if (num === 2) {
    return [0, 1];
  }

  let prevFibs = fibs(num - 1);
  prevFibs.push(prevFibs[prevFibs.length - 1] + prevFibs[prevFibs.length - 2]);
  return prevFibs;
}
