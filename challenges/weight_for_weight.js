// https://www.codewars.com/kata/55c6126177c9441a570000cc

function rootSum(num){
  let rootSum = 0;

  while (num > 0) {
    let numeral = num % 10;

    num = Math.floor(num / 10);
    rootSum += numeral;
  }

  return rootSum;
}

function orderWeight(strng) {
  let numArr = strng.split(' ');
  let rootNum = [];
  
  for (let i = 0; i < numArr.length; i++) {
    for (let j = i + 1; j < numArr.length; j++) {
      if (rootSum(numArr[i]) > rootSum(numArr[j])) {
        let storage = numArr[i];
        numArr[i] = numArr[j];
        numArr[j] = storage;
      } else if (rootSum(numArr[i]) === rootSum(numArr[j]) && String(numArr[i]) > String(numArr[j])) {
        let storage = numArr[i];
        numArr[i] = numArr[j];
        numArr[j] = storage;
      }
    }
  }

  return numArr.join(' ');
}
