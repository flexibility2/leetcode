//https://leetcode.cn/problems/product-of-array-except-self/solutions/3635201/liang-ci-xun-huan-fen-bie-ji-suan-yuan-s-1ixq/?envType=problem-list-v2&envId=2cktkvj

function productExceptSelf(nums: number[]): number[] {
  const len = nums.length;
  const res: number[] = [];
  res[0] = 1;

  for (let i = 1; i < len; i++) {
    res[i] = res[i - 1] * nums[i - 1];
  }

  let tmp = 1;
  for (let i = len - 2; i >= 0; i--) {
    tmp = tmp * nums[i + 1];
    res[i] = res[i] * tmp;
  }
  return res;
}
