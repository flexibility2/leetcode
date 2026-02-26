//https://leetcode.com/problems/maximum-product-subarray/
/*
为什么 candidates 一定是三个值？
在位置 i，我们要决定 以 nums[i] 结尾 的最大/最小乘积，只能从下面三种情况选：

前面的 max_so_far × nums[i]
（前面最大的正乘积继续乘当前数）
前面的 min_so_far × nums[i]
（前面最负的乘积继续乘当前数 —— 如果 nums[i] 是负数，这很可能变成很大的正数）
就直接从 nums[i] 自己重新开始
（前面所有乘积都不要了，只取当前这个数本身）

这三种情况覆盖了所有可能：

继续前面的链（用 max 或 min）
或者因为前面乘积太差（比如有 0，或者负数太多方向不对），干脆断开，从当前数重新开始
*/
function maxProduct(nums: number[]): number {
  if (nums.length === 0) return 0;
  let max_so_far = nums[0];
  let min_so_far = nums[0];
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let candidates = [max_so_far * nums[i], min_so_far * nums[i], nums[i]];
    max_so_far = Math.max(...candidates);
    min_so_far = Math.min(...candidates);
    res = Math.max(res, max_so_far);
  }
  return res;
}
