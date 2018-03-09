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

  words.forEach(word => {
    if (confirmRow(word, topRow) || confirmRow(word, middleRow) || confirmRow(word, bottomRow)) {
      result.push(word);
    }
  });

  return result;
};

var confirmRow = function(word, row) {
  for (var i = 0; i < word.length; i++) {
    if (!row.includes(word[i])) {
      return false;
    }
  }

  return true;
};
