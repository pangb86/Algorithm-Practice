function returnCoins(coins, amount, lastCoin) {
  if (amount < 0) { return []; }
  if (coins.length === 0) { return []; }
  if (amount === 0) {return [lastCoin]; }

  let result = [];
  for (let i = 0; i < coins.length; i++) {
    let subAnswer = returnCoins(coins.slice(1), amount - coins[i], coins[i]);
    return result.concat(lastCoin);
  }

  return [];
}
