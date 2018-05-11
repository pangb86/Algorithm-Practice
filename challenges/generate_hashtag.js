// https://www.codewars.com/kata/52449b062fb80683ec000024

function generateHashtag (str) {
  if (str.length === 0) { return false; }

  var strArr = str.split(" ");
  var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (var i = 0; i < strArr.length; i++) {
    var word = strArr[i];
    var firstLetter = word[0];
    if (letters.includes(firstLetter)) {
      strArr[i] = word[0].toUpperCase() + word.slice(1);
    }
  }

  let result = "#" + strArr.join("");

  if (result.length > 140) {
    return false;
  } else {
    return result;
  }
}
