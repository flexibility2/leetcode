//https://leetcode.cn/problems/maximal-square/solutions/2914165/dong-tai-gui-hua-by-funny-gatesf3z-56m6/?envType=problem-list-v2&envId=2cktkvj
function maximalSquare(matrix: string[][]): number {
  let dp: number[][] = new Array(matrix.length);
  let max: number = 0;
  for (let i = 0; i < matrix.length; i++) {
    dp[i] = new Array();
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = Number(matrix[i][j]);
      } else if (matrix[i][j] === "1") {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
      } else {
        dp[i][j] = 0;
      }

      max = Math.max(max, dp[i][j]);
    }
  }
  return max * max;
}
