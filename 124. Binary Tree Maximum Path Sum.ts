/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 * 
 * 形状可以是：
只有单个节点
一条直线向下（链）
“人”字形（左子树上来一点 + 节点 + 右子树下去一点） ← 这是能拿到最大值的常见形态
但不能是“Y”字形再往上拐（因为没有父指针）


因为 L ≥ 0 且 R ≥ 0（我们之前已经把负的砍掉了，L 和 R 都是 Math.max(子树返回值, 0)）

node.val + L + R   ≥   node.val + max(L, R, 0)
 */

function maxPathSum(root: TreeNode | null): number {
  let res = -Infinity;

  function dfs(root: TreeNode | null) {
    if (!root) {
      return 0;
    }
    let L = Math.max(dfs(root.left), 0);
    let R = Math.max(dfs(root.right), 0);
    res = Math.max(root.val + L + R, res);
    return Math.max(L, R) + root.val;
  }
  dfs(root);
  return res;
}
