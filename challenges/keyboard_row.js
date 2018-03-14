// Given a List of words, return the words that can be typed using letters
// of alphabet on only one row's of American keyboard like the image below.
//
// Input: ["Hello", "Alaska", "Dad", "Peace"]
// Output: ["Alaska", "Dad"]

var findWords = function(words) {
  const topRow = "qwertyuiopQWERTYUIOP";
  const middleRow = "asdfghjklASDFGHJKL";
  const bottomRow = "zxcvbnmZXCVBNM";
  let result = [];
  // iterate over each word and see if it can be formed with just one
  // row of keyboard letters
  words.forEach(word => {
    if (confirmRow(word, topRow) || confirmRow(word, middleRow) || confirmRow(word, bottomRow)) {
      result.push(word);
    }
  });

  return result;
};
// helper function that takes in a word and and a row string
var confirmRow = function(word, row) {
  // iterate over each character in the word and see if it's in the row
  // string
  for (var i = 0; i < word.length; i++) {
    if (!row.includes(word[i])) {
      return false;
    }
  }
  // return true if all the characters are included
  return true;
};
