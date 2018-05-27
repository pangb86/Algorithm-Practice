// First Unique Character in a String
//
// Given a string, find the first non-repeating character in it and
// return it's index. If it doesn't exist, return -1.

var firstUniqChar = function(s) {
  // counter hash where the key is a letter in S and the value is it's
  // frequency
  let count = {};
  // result letter
  let letter = -1;
  // count all the letters
  for (var i = 0; i < s.length; i++) {
    if (!count[s[i]]) count[s[i]] = 0;
    count[s[i]]++;
  }
  // iterate over the counter hash
  for (var key in count) {
    // if it's frequency is one, assign it to the result letter and
    // terminate the loop
    if (count[key] === 1) {
      letter = key;
      break;
    }
  }
  // check if we found a letter and returns it's index
  if (letter !== -1) {
    return s.indexOf(letter);
  } else {
    return -1;
  }
};
