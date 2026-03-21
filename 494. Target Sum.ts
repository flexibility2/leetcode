function findTargetSumWays(nums: number[], target: number): number {
  const sum = nums.reduce((a, b) => a + b, 0);
  if (Math.abs(target) > sum) return 0;
  if ((sum + target) % 2 !== 0) return 0;
  const bag = (sum + target) / 2;

  const dp = new Array(bag + 1).fill(0);
  dp[0] = 1;
  for (let n of nums) {
    for (let j = bag; j >= n; j--) {
      dp[j] += dp[j - n];
    }
  }
  return dp[bag];
}
//https://grok.com/c/23d86e3d-9abb-4259-bff6-63a5ceefdd08?rid=d2bd313f-0188-4259-95b3-dbcf0536865a
