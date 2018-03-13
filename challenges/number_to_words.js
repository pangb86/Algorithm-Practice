// Given an input integer < 1 billion, convert it to a dollar quantity
// in English words
// Example: Input - 466 Output - FourHundredSixtySixDollars

const textDollar = function(num) {

  const digits = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  const magnitude = ["", "Thousand", "Million"];

  let numStr = num.toString();
  let wordArr = [];
  let word;

  let endIdx;
  let startIdx = numStr.length;
  let pieces = [];

  // split the input string into 3 digit pieces
  while (startIdx > 0) {
    endIdx = startIdx;
    if (startIdx - 3 > 0) {
      startIdx = startIdx - 3;
    } else {
      startIdx = 0;
    }
    pieces.push(numStr.slice(startIdx, endIdx));
  }

  let piecesCount = pieces.length;

  // iterate over the 3 digit pieces
  for (let i = 0; i < piecesCount; i++) {
    let piece = parseInt(pieces[i]);
    if (piece) {
      // split piece into separate integers
      let intArr = pieces[i].split('').reverse().map(parseFloat);
      // if tens place is 10, add 10 to the digits place
      if (intArr[1] === 1) {
          intArr[0] += 10;
      }
      // add the magnitude if it exists
      if ((word = magnitude[i])) {
          wordArr.push(word);
      }
      // add the digits if it exists
      if ((word = digits[intArr[0]])) {
          wordArr.push(word);
      }
      // add the tens if it exists
      if ((word = tens[intArr[1]])) {
          wordArr.push(word);
      }
      // add hundred if it exists
      if ((word = digits[intArr[2]])) {
          wordArr.push(word + 'Hundred');
      }
    }
  }
  // return the words reversed and add Dollars
  return wordArr.reverse().join("") + "Dollars";
};
