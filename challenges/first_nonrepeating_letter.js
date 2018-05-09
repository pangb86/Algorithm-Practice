function firstNonRepeatingLetter(s) {
  var letterObj = {};

  for (var i = 0; i < s.length; i++) {
    var letterLC = s[i].toLowerCase();

    if (letterObj[letterLC] === undefined) {
      letterObj[letterLC] = [1];
    } else {
      letterObj[letterLC][0] += 1;
    }

    if (s[i] !== letterLC && letterObj[letterLC][1] === undefined) {
      letterObj[letterLC].push(1);
    }
  }

  for (var key in letterObj) {
    if (letterObj[key][0] === 1) {
      if(letterObj[key][1] === 1) {
        return key.toUpperCase();
      } else {
        return key;
      }
    }
  }

  return '';
}
