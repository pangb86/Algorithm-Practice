// generate a random number between min and max inclusive
function generate(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// generate a random number between min(inclusive) and max(exclusive)
function generate(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
