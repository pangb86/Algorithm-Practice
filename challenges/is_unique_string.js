// Determine if a string has all unique characters
// questions: ASCII or UNICODE? Letters only?

// hash solution
function isUnique(str) {
  // return false if it has more than 26 characters
  // Note: only if the input is just letters
  if (str.length > 26) { return false; }
  // create a hash to store letters and booleans
  let letterHash = {};
  // iterate over the string
  for (let  i = 0; i < str.length; i++) {
    // look at the current letter
    let char = str.charAt(i);
    // check if the letter is already in the hash
    if (letterHash[char] === undefined) {
      // if not add it as true
      letterHash[char] = true;
    } else {
      // if it exists return false
      return false;
    }
  }
  // the whole string checked out so return true
  return true;
}
// O(n) time
// O(1) space

// no additional data structures used solution
// compare every character to each other
function isUnique2(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }

  return true;
}
// O(n^2) time
// O(1) space

// no additional data structures used solution
// allowed to modify the input string
// sort the input string
// check each consecutive character
function isUnique3(str) {
  str = str.split("").sort().join("");

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      return false;
    }
  }

  return true;
}
// O(nlog(n)) time
// O(1) space
