// determine if an input string can be a permuatation of a palindrome
// example: input - Tact Coa
// output - true (tacocat)
function permPalindrome(str) {
  // make lowercase and remove whitespace
  str = str.trim().toLowerCase().split(" ").join("");
  let letterCount = {};
  let oddLetter = 0;
  // count number of occurences of each letter
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (letterCount[letter] === undefined) {
      letterCount[letter] = 0;
    }
    letterCount[letter]++;
  }
  // check the count of each letter
  for (var letter in letterCount) {
    // check to see if the letter occurs an odd number of times
    if (letterCount[letter] % 2 !== 1) {
      // add one to the odd letter counter if it does
      oddLetter++;
    }
    // if there are more than two letters occuring an odd number of
    // times, the input cannot be a palindrome permutation
    if (oddLetter > 1) {
      return false;
    }
  }
  // return true after checking all the letter counts
  return true;
}
// O(n) time complexity
// O(1) space complexity due to finite character set

// check odd letter count as we count the letters
function palindromPerm(str) {
  let oddCount = 0;
  let letterCount = {};
  // iterate over the input string
  for (let i = 0; i < str.length; i++) {
    // count the frequency of each letter
    let letter = str[i];
    if (letterCount[letter] === undefined) {
      letterCount[letter] = 0;
    }
    letterCount[letter]++;
    // check the count of the current letter
    if (letterCount[letter] % 2 === 1) {
      // if it's odd, increment the odd counter
      oddCount++;
    } else {
      // if it's even, decrement the odd counter
      oddCount--;
    }
  }
  // return true if odd count is 1 or less
  return oddCount <= 1;
}
// O(n) time complexity
// O(1) space complexity due to finite character set
// not necessarily better than checking the count after counting
// more operations per character
