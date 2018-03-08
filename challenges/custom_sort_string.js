// S and T are strings composed of lowercase letters. In S, no letter
// occurs more than once.
//
// S was sorted in some custom order previously. We want to permute the
// characters of T so that they match the order that S was sorted.
// More specifically, if x occurs before y in S, then x should occur
// before y in the returned string.
//
// Return any permutation of T (as a string) that satisfies this property.

var customSortString = function(S, T) {
  let letterCount = {};
  let result = "";

  // iterate over the string to be sorted
  for (var i = 0; i < T.length; i++) {
    // check if letter we're looking at is in the sorted string
    if (S.includes(T.charAt(i))) {
      // buid a letter count
      if (letterCount[T.charAt(i)] === undefined) {
        letterCount[T.charAt(i)] = 1;
      } else {
        letterCount[T.charAt(i)] += 1;
      }
    // if it's not a letter we're interested in, just push it onto the
    // result
    } else {
      result += T.charAt(i);
    }
  }

  // iterate over the custom ordered string
  for (var j = 0; j < S.length; j++) {
    // grab the number of times a character repeats
    let repeats = letterCount[S.charAt(j)];
    // push that letter that many times
    for (var k = 1; k <= repeats; k++) {
      result += S.charAt(j);
    }
  }

  // return the sorted result string
  return result;
};
