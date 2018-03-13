// returns the nth fibonnacci number

function fibNum(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  let result = 0;
  let prev1 = 1;
  let prev2 = 0;

  for (var i = 1; i <n; i++) {
    let temp = prev1;
    result = prev1 + prev2;
    prev1 = result;
    prev2 = temp;
  }

  return result;
}
