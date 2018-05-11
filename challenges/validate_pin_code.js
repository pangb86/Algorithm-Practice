// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

function validatePIN (pin) {
  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }

  var numbers = '1234567890';

  for (var i = 0; i < pin.length; i++) {
    console.log(pin[i]);
    if (numbers.indexOf(pin[i]) === -1) {
      return false;
    }
  }

  return true;
}
