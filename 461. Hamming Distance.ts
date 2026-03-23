function hammingDistance(x: number, y: number): number {
  let diff = x ^ y;
  let res = 0;
  while (diff !== 0) {
    res += diff & 1;
    diff = diff >>> 1;
  }
  return res;
}

//https://grok.com/c/8573047f-6cf3-48ff-9a87-88ee34f49182?rid=40a74c88-59e8-456b-a069-4a968d038272
