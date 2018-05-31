// Check for three valid edits to two input strings:
// insert a character, remove a character, or replace a character

// compare string lengths and use a helper method to check for insertion,
// replacement, or removal
function oneAway(a, b) {
  // if the strings are the same length, check for replacement
  if (a.length === b.length) {
    return replaceCheck(a, b);
  } else if (a.length + 1 === b.length) {
    return insertCheck(a, b);
  } else if (a.length - 1 === b.length) {
    return insertCheck(b, a);
  } else {
    return false;
  }
}

function replaceCheck(a, b) {
  let replaceCount = 0;
  // check for more than one character difference
  for (let i = 0; i < a.length; i++) {
    if (a.charAt(i) !== b.charAt(i)) {
      replaceCount++;
    }
    if (replaceCount > 1) {
      return false;
    }
  }

  return true;
}

function insertCheck(a, b) {
  let idx1 = 0;
  let idx2 = 1;

  while (idx2 < b.length && idx1 < a.length) {
    if (a.charAt(idx1) !== b.charAt(idx2)) {
      if (idx1 !== idx2) {
        return false;
      }
      idx2++;
    } else {
      idx1++;
      idx2++;
    }
  }

  return true;
}
// O(n) time complexity based on the shorter string
// O(1) space complexity
