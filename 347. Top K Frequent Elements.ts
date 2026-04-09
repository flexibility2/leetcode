function topKFrequent(nums: number[], k: number): number[] {
  let map = new Map<number, number>();
  for (let n of nums) {
    map.set(n, (map.get(n) | 0) + 1);
  }
  return [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .map((item) => item[0])
    .slice(0, k);
}

/*

https://grok.com/c/1c0c2f74-2ae5-4751-8970-aba08240f99c?rid=5bcf908b-d5e1-4cde-b0b8-918cd1681cc7
**/
