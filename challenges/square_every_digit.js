function squareDigits(num){
  var numArr = num.toString().split('');
  var result = [];

  for (var i = 0; i < numArr.length; i++) {
    result.push(numArr[i] * numArr[i]);
  }

  return Number(result.join(''));
}
