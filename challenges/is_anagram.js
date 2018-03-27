// Given two strings s and t, write a function to determine if t is
// an anagram of s.
// You may assume the string contains only lowercase alphabets.

// hash map solution
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let sCount = {};
  let tCount = {};

  for (let i = 0; i < s.length; i++) {
    if (sCount[s[i]] === undefined) {
      sCount[s[i]] = 0;
    }
    sCount[s[i]]++;
    if (tCount[t[i]] === undefined) {
      tCount[t[i]] = 0;
    }
    tCount[t[i]]++;
  }

  for (var key in sCount) {
    if (sCount[key] !== tCount[key]) {
      return false;
    }
  }

  return true;
};
