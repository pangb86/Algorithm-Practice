// Write a function that takes a message and an increment amount
// and outputs the same letters shifted by that amount in the alphabet.
// Assume lowercase and no punctuation. Preserve spaces.

function caesarCipher(str, shift) {
  // split our string into words in an array on the spaces
  const wordArr = str.split(" ");
  let result = [];
  // encode each word and push it in the results array
  wordArr.forEach(word => {
    result.push(shiftWord(word, shift));
  });

  return result;
}
// helper function that encodes a passed in word
function shiftWord(s, k) {
  // split our word into a character array
  const charArr = s.split("");
  const lettersLower = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  // iterate over each character
  charArr.forEach(char => {
    // turn it to lower case and see if it's a letter
    if (lettersLower.includes(char.toLowerCase())) {
      // get the index of the original letter
      let oldIdx = lettersLower.indexOf(char.toLowerCase());
      // calculate the index of the new letter
      let newIdx = (oldIdx + k) % 26;
      // add new letter to the result string and capitalize if needed
      char.toUpperCase() === char ? result += lettersLower[newIdx].toUpperCase() : result += lettersLower[newIdx];
    } else {
      result += char;
    }
  });

  return result;
}
