function coinChange(amount, coins) {
  let combinations = new Array(amount + 1);
  combinations.fill(0,0,combinations.length);
  combinations[0] = 1;

  for (let i = 0; i < coins.length; i++) {
    let coin = coins[i];
    for (let j = 0; j < combinations.length; j++) {
      let total = j;
      if (total >= coin) {
        combinations[j] += combinations[total - coin];
      }
    }
  }

  return combinations[amount];
}

coinChange(12, [1,2,5]);

[0,0,0,0,0].fill(1,1,3);

function recCoinChange(amount, coins) {

  function combo(total, currentCoin) {
    if (total === 0) { return 1; }
    if (total < 0) { return 0; }
    let combos = 0;
    for (let i = currentCoin; i < coins.length; i++) {
      combos += combo(total - coins[i], i);
    }

    return combos;
  }

  return combo(amount,0);
}
