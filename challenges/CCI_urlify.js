// replace all spaces in the input string with %20
function urlify(str) {
  return str.trim().split(" ").join("%20");
}
