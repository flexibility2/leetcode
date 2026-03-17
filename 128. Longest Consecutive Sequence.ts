function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);
  let len = 0;
  let res = 0;
  for (let cur of set) {
    if (set.has(cur - 1)) continue;
    let next = cur + 1;
    while (set.has(next)) {
      next++;
    }
    len = next - cur;
    res = Math.max(res, len);
  }
  return res;
}

/// 这里要遍历 set 而不是数组，因为数组可能存在大量重复
// // 跳过不可能是连续序列起始位置的数字，节省时间
