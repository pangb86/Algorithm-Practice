// # Write a function, fibs(num) which returns the first n elements from
// # the fibonnacci sequence, given n.

function fibs(num) {
  if (num === 0) {
    return [];
  } else if (num === 1) {
    return [0];
  }

  let result = [0, 1];

  while (result.length < num) {
    result.push(result[result.length - 1] + result[result.length - 2]);
  }

  return result;
}
