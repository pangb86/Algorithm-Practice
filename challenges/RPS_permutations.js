// Given the number of rounds, return an array of all possible
// plays of Rock, Paper, Scissors

var RPS_permutations = function(rounds) {
  var result = [];
  var value = "RPS".split("");

  var play = function(playedSoFar, rnd) {
    if (rnd === 0) {
      result.push(playedSoFar);
      return;
    }
    for (var i = 0; i < value.length; i++) {
      play(playedSoFar + value[i], rnd - 1);
    }
  };

  play("", rounds);

  return result;
};
