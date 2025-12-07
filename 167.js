//https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/?envType=problem-list-v2&envId=arw5ns9e

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const length = numbers.length;
  let i = 1;
  let j = length;

  while (i < j) {
    const sum = numbers[i - 1] + numbers[j - 1];
    if (sum === target) {
      return [i, j];
    }
    if (sum > target) {
      j--;
    } else {
      i++;
    }
  }
};
