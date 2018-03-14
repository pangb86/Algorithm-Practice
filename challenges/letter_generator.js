// write a function that takes in a string argument and return a
// generator where it will return the letters of the string argument
// one letter at a time in order

function letterGenerator(word) {
  let index = 0;
  // Key takeaway: the inner function next has access to index even after
  // letterGenerator has returned
  return {
    next: () => {
      if (index < word.length) {
        index++;
        return word[index - 1];
      } else {
        return "";
      }
    }
  };
}
