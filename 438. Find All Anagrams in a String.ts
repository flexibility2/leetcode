function findAnagrams(s: string, p: string): number[] {
  if (s.length < p.length) return [];

  const pCount = new Map<string, number>();
  const win = new Map<string, number>();
  const res: number[] = [];
  const m = p.length;

  // 统计 p 的字符频率
  for (let c of p) {
    pCount.set(c, (pCount.get(c) || 0) + 1);
  }

  // 初始化第一个窗口
  for (let i = 0; i < m; i++) {
    const c = s[i];
    win.set(c, (win.get(c) || 0) + 1);
  }

  // 检查第一个窗口
  if (mapsEqual(pCount, win)) res.push(0);

  // 滑动窗口
  for (let i = m; i < s.length; i++) {
    // 右边加入新字符
    const add = s[i];
    win.set(add, (win.get(add) || 0) + 1);

    // 左边移除旧字符
    const rem = s[i - m];
    const count = win.get(rem)! - 1;
    if (count > 0) {
      win.set(rem, count);
    } else {
      win.delete(rem); // 次数变成0就直接删掉
    }

    // 检查是否匹配
    if (mapsEqual(pCount, win)) {
      res.push(i - m + 1);
    }
  }

  return res;
}

// 辅助函数：判断两个 Map 是否完全一样
function mapsEqual(a: Map<string, number>, b: Map<string, number>): boolean {
  if (a.size !== b.size) return false;
  for (let [char, cnt] of a) {
    if (b.get(char) !== cnt) return false;
  }
  return true;
}
