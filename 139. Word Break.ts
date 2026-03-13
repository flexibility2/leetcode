function wordBreak(s: string, wordDict: string[]): boolean {
  const n = s.length;
  const dp = new Array(n + 1).fill(false);

  dp[0] = true;

  const wordSet = new Set(wordDict);
  for (let i = 0; i < n; i++) {
    if (!dp[i]) continue;
    for (let word of wordSet) {
      if (s.startsWith(word, i)) {
        dp[i + word.length] = true;
      }
    }
  }

  return dp[n];
}

/**
 * 
 * 
 * dp[0]     = 空串     → true
dp[i]     = 前 i 个字符能否拆分
dp[s.length] = 整个字符串能否拆分  ← 这才是我们要的答案
 */
