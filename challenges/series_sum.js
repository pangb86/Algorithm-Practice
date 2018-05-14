// https://www.codewars.com/kata/555eded1ad94b00403000071

function SeriesSum(n)
{
  if (n === 0) {
    return ('0.00');
  }

  var sum = 0;

  for (var i = 0; i < n; i++) {
    sum += 1 / (1 + i * 3);
  }
  console.log(sum);

  var sumRounded = Math.round(sum * 100).toString();
  var decimals = sumRounded.slice(-2);
  var numerals = sumRounded.slice(0,sumRounded.length - 2);

  return numerals + '.' + decimals;
}
