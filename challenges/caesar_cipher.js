// Write a function that takes a message and an increment amount
// and outputs the same letters shifted by that amount in the alphabet.
// Assume lowercase and no punctuation. Preserve spaces.

function caesarCipher(str, shift) {
  const wordArr = str.split(" ");
  let result = [];

  wordArr.forEach(word => {
    result.push(shiftWord(word, shift));
  });

  return result;
}

function shiftWord(s, k) {
  const charArr = s.split("");
  const lettersLower = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  charArr.forEach(char => {
    if (lettersLower.includes(char.toLowerCase())) {
      let oldIdx = lettersLower.indexOf(char.toLowerCase());
      let newIdx = (oldIdx + k) % 26;
      char.toUpperCase() === char ? result += lettersLower[newIdx].toUpperCase() : result += lettersLower[newIdx];
    } else {
      result += char;
    }
  });

  return result;
}
