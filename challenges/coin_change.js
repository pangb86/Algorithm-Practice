function coinChange(denominations, numOfCoins, amount) {
  if (amount === 0) { return 1; }
  if (amount < 0) { return 0; }
  if (numOfCoins < 0 && amount > 0) { return 0; }

}
