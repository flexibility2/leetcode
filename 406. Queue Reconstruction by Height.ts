function reconstructQueue(people: number[][]): number[][] {
  people.sort((a, b) => {
    if (a[0] !== b[0]) {
      return b[0] - a[0];
    }
    return a[1] - b[1];
  });

  const queue = [];
  for (let p of people) {
    queue.splice(p[1], 0, p);
  }
  return queue;
}

//https://grok.com/c/50312baa-3bb4-4eec-a2b5-c2df0a4c6c83?rid=f195abbb-eae6-4b09-9700-e524b1b4b7d3
