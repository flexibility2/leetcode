// https://leetcode.com/problems/maximum-subarray/description/?envType=problem-list-v2&envId=arw5ns9e

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const length = nums.length;
  let res = nums[0];
  let cur = nums[0];

  for (let i = 1; i < length; i++) {
    cur = Math.max(cur + nums[i], nums[i]);
    res = Math.max(cur, res);
  }
  return res;
};
