//https://leetcode.cn/problems/majority-element/solutions/1447718/by-usualminds-rzvl/?envType=problem-list-v2&envId=2cktkvj
function majorityElement(nums: number[]): number {
  const len = nums.length;
  const mid = len / 2;
  const map = new Map();
  for (let i = 0; i < len; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      map.set(nums[i], map.get(nums[i]) + 1);
    }
    if (map.get(nums[i]) > mid) {
      return nums[i];
    }
  }
}
