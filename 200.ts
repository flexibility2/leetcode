//遍历整个网格，遇到一个 '1'，就说明发现了一个新岛屿，计数加一。
//然后用 DFS 把与这个 '1' 相连的所有 '1' 都“淹掉”（比如改成 '0'），避免重复计数。
//继续遍历，直到所有格子都被访问。
function numIslands(grid: string[][]): number {
  let res = 0;
  let m = grid.length;
  let n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        res++;
        dfs(i, j);
      }
    }
  }

  function dfs(i: number, j: number): void {
    if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === "0") {
      return;
    }
    grid[i][j] = "0";
    dfs(i, j - 1);
    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j + 1);
  }

  return res;
}
