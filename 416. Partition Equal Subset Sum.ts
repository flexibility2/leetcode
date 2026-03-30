function canPartition(nums: number[]): boolean {
  const sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2 !== 0) return false;
  const target = sum / 2;
  const dp: boolean[] = new Array(target + 1).fill(false);
  dp[0] = true;

  for (let n of nums) {
    for (let i = target; i >= n; i--) {
      dp[i] = dp[i] || dp[i - n];
    }
  }
  return dp[target];
}

//https://grok.com/c/61a4bef6-cf79-4e6d-9930-174eb04ffbc1?rid=13d6a5c3-de68-4cab-91bd-cd07dcb9ec40
