//https://leetcode.com/problems/kth-largest-element-in-an-array/description/
//核心思想：维护一个“大小固定为 k 的有序集合”，始终保存当前最大的 k 个元素
function findKthLargest(nums: number[], k: number): number {
  // 大小为k的最小堆
  const heap: number[] = nums.slice(0, k).sort((a, b) => a - b);
  for (let i = k; i < nums.length; i++) {
    if (nums[i] > heap[0]) {
      heap.shift();
      heap.push(nums[i]);
      heap.sort((a, b) => a - b);
    }
  }
  return heap[0];
}
