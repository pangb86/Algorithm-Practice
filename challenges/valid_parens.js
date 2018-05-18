var isValidParens = function(string) {
  let map = {')':'(',
             '}':'{',
             ']':'['};
  let stack = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] === ')' || string[i] === ']' || string[i] === '}') {
      let temp = stack.pop();

      if (map[string[i]] !== temp) {
        return false;
      }
    } else {
      stack.push(string[i]);
    }
  }

  return stack.length === 0;
};
