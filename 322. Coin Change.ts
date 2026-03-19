function coinChange(coins: number[], amount: number): number {
  const dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  for (let c of coins) {
    for (let i = c; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - c] + 1);
    }
  }
  if (dp[amount] >= amount + 1) {
    return -1;
  }
  return dp[amount];
}

//https://grok.com/c/23d86e3d-9abb-4259-bff6-63a5ceefdd08?rid=8c95c9a7-ca6b-4ce7-bdb4-938c584d3ab3
