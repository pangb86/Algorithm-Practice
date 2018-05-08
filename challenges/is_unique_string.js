// questions: ASCII or UNICODE? Letters only?
function isUnique(str) {
  // return false if it has more than 26 characters
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
