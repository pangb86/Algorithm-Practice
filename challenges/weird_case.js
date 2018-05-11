// https://www.codewars.com/kata/52b757663a95b11b3d00062d

function weirdWord(word) {
  var result = '';

  for (var i = 0; i < word.length; i++) {
    if (i % 2 === 0) {
      result += word[i].toUpperCase();
    } else {
      result += word[i].toLowerCase();
    }
  }

  return result;
}

function toWeirdCase(string){
  var stringArr = string.split(' ');
  var result = [];

  for (var i = 0; i < stringArr.length; i++) {
    result.push(weirdWord(stringArr[i]));
  }

  return result.join(' ');
}
