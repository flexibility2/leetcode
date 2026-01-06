function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const length = numCourses;
  const onPath = new Array(length).fill(false);
  const visited = new Array(length).fill(false);
  let hasCircle = false;

  const graph: number[][] = [];
  for (let cur of prerequisites) {
    const from = cur[1];
    const to = cur[0];
    if (!graph[from]) {
      graph[from] = [];
    }
    graph[from].push(to);
  }

  const travle = (cur: number, graph: number[][]) => {
    if (onPath[cur]) {
      hasCircle = true;
    }

    if (hasCircle || visited[cur]) {
      // or visited[cur]
      return;
    }

    onPath[cur] = true;
    visited[cur] = true;
    if (graph[cur]) {
      for (let next of graph[cur]) {
        travle(next, graph);
      }
    }

    onPath[cur] = false;
  };

  for (let i = 0; i < numCourses; i++) {
    travle(i, graph);
  }

  return !hasCircle;
}
