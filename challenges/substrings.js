// given a string and and an integer length, find all substrings of
// that length of the input string. A substring is in the order of the
// original string

var subStrings = function(str, length) {
  let result = [];

  for (var i = 0; i < str.length; i++) {
    if (i + length <= str.length) {
      let sub = str.substr(i, length);
      result.push(sub);
    }
  }

  return result;
};
