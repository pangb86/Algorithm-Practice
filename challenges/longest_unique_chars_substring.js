function longestUniqueSubstring(input) {
    var chars = input.split('');
    var currChar;
    var str = "";
    var longestStr = "";
    var hash = {};
    
    for (var i = 0; i < chars.length; i++) {
      currChar = chars[i];

      if (!hash[chars[i]]) { // if hash doesn't have the char,
          str += currChar; //add it to str
          hash[chars[i]] = {index:i};//store the index of the char
      } else {
        // if a duplicate char found..
        //store the current longest non-repeating chars. until now
        //In case of equal-length, <= right-most str, < will result in left most str
        if(longestStr.length <= str.length) {
          longestStr = str;
        }

        //Get the previous duplicate char's index
        var prevDupeIndex = hash[currChar].index;
        //Find all the chars AFTER previous duplicate char and current one
        var strFromPrevDupe = input.substring(prevDupeIndex + 1, i);
        //*NEW* longest string will be chars AFTER prevDupe till current char
        str = strFromPrevDupe + currChar;
        //console.log(str);
        //Also, Reset hash to letters AFTER duplicate letter till current char
        hash = {};
        for (var j = prevDupeIndex + 1; j <= i; j++) {
          hash[input.charAt(j)] = {index:j};
        }
      }
    }
  return longestStr.length > str.length ? longestStr : str;
}

findLongestNonRepeatingSubStr("abcabcdab")
