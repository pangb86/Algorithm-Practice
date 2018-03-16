// Given a string, find the length of the longest substring without
// repeating characters.

var lengthOfLongestSubstring = function(s) {
  let n = s.length;
  // length of the longest substring
  let length = 0;
  // letter hash with the key being the letter and the value being the
  // index one greater than the spot it was last seen
  let letterMap = {};

  let i = 0;
  // iterate over the all the letters
  for (let j = 0; j < n; j++) {
    // if we've seen the letter, move the start of the longest substring
    if (letterMap[s.charAt(j)] !== undefined) {
      i = Math.max(letterMap[s.charAt(j)], i);
    }
    // length is the difference between our two pointers of our sliding
    // window
    length = Math.max(length, j - i + 1);
    // update the last seen index
    letterMap[s.charAt(j)] = j + 1;
  }

  return length;
};
