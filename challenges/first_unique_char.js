// First Unique Character in a String
//
// Given a string, find the first non-repeating character in it and
// return it's index. If it doesn't exist, return -1.

var firstUniqChar = function(s) {
  let count = {};
  let letter = -1;

  for (var i = 0; i < s.length; i++) {
    if (!count[s[i]]) count[s[i]] = 0;
    count[s[i]]++;
  }

  for (var key in count) {
    if (count[key] == 1) {
      letter = key;
      break;
    }
  }

  if (letter != -1) {
    return s.indexOf(letter);
  } else {
    return -1;
  }
};
