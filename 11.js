// https://leetcode.com/problems/container-with-most-water/description/?envType=problem-list-v2&envId=arw5ns9e

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;
  let res = 0;
  while (i < j) {
    let weight = j - i;
    let MHeight = Math.min(height[i], height[j]);
    let cur = weight * MHeight;
    res = Math.max(res, cur);
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return res;
};
