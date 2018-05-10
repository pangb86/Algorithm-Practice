function sumTwoSmallestNumbers(numbers) {
  var lowestSum = Infinity;

  for (var i = 0; i < numbers.length; i++) {
    for(var j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] < lowestSum) {
        lowestSum = numbers[i] + numbers[j];
      }
    }
  }

  return lowestSum;
}
