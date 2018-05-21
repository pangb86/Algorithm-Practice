// Check if two input strings are permutations of the other
// Case sensitive? God a permutation of dog?
// Whitespace?
// Sort strings solution
function isPermutation(str1, str2) {
  // if they are different lengths, return false
  if (str1.length !== str2.length) {
    return false;
  }
  // check if the sorted strings are equal
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}
// O(nlog(n)) time complexity depending on the sort
// non-numeric arrays area stringified and merge-sorted
// O(1) space complexity

// Check character counts using a hash solution
function isPermutation2(str1, str2) {
  // if they are different lengths, return false
  if (str1.length !== str2.length) {
    return false;
  }
  let charHash = {};
  // iterate over one string and count its characters
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    if (charHash[letter] === undefined) {
      charHash[letter] = 0;
    }
    charHash[letter]++;
  }
  // iterate over the other string
  for (let j = 0; j < str2.length; j++) {
    let letter = str2[j];
    // if the current letter doesn't exist in the character count, return false
    if (charHash[letter] === undefined) {
      return false;
    }
    // subtract one from the current letter's count
    charHash[letter]--;
    // if the current letter's count is negative, return false
    if (charHash[letter] < 0) {
      return false;
    }
  }
  // return true after checking the character counts
  return true;
}
// O(n) time complexity
// O(1) space complexity based on the finite character set
