function countBits(n: number): number[] {
  const res = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    res[i] = res[i >> 1] + (i & 1);
  }
  return res;
}

/**
 *
 * https://grok.com/c/333f6b19-2331-4856-8716-63b6061dca09?rid=7c9285f5-a4b2-4f97-9e2e-1c2943334e36
 */
