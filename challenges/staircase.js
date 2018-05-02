function staircase(n) {
  for (let i = 1; i <= n; i++) {
    let line = Array(n).fill(' ');

    for (let j = 0; j < i; j++) {
      line[j] = '#';
    }
    console.log(line.reverse().join(''));
    }
}
