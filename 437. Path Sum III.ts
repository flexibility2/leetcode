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
 */

function pathSum(root: TreeNode | null, targetSum: number): number {
  if (!root) {
    return 0;
  }
  let ans = 0;
  function dfs(node: TreeNode | null, targetSum: number) {
    if (!node) {
      return;
    }
    if (targetSum - node.val === 0) {
      ans++;
    }
    dfs(node.left, targetSum - node.val);
    dfs(node.right, targetSum - node.val);
  }
  dfs(root, targetSum);
  ans += pathSum(root.left, targetSum);
  ans += pathSum(root.right, targetSum);
  return ans;
}

/**
 * 
 * https://grok.com/c/c2262c12-07f3-47cb-9013-bbee0b3bf56d?rid=9f93777f-9632-4b5a-8e48-9077cb0db21d
 * 
 * 
 * function pathSum(node, targetSum) {
    if (!node) return 0;
    
    let ans = 0;
    
    dfs(node, targetSum);                    // 第1件事：统计「以当前node为起点」的路径
    
    ans += pathSum(node.left, targetSum);    // 第2件事：让左子树自己完整地统计它内部所有可能的起点
    ans += pathSum(node.right, targetSum);   // 同理右子树
    
    return ans;
}
 */
