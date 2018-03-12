// # Write a method, digital_root(num). It should sum the digits of a
// # positive integer. If it is greater than or equal to 10, sum the
// # digits of the resulting number. Keep repeating until there is only
// # one digit in the result, called the "digital root". Do not use
// # string conversion within your method.

function digitalRoot(num) {
  while (num >= 10) {
    num = rootStep(num);
  }

  return num;
}

function rootStep(num) {
  let sum = 0;

  while (num !== 0) {
    let digit = num % 10;
    sum += digit;
    num = Math.floor(num / 10);
  }

  return sum;
}
