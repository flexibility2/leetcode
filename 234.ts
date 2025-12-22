/**
 *
 * https://leetcode.com/problems/palindrome-linked-list/description/
 */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function isPalindrome(head: ListNode | null): boolean {
  let fast, slow;
  fast = head;
  slow = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  let right = reverse(slow);
  let left = head;

  while (right !== null) {
    if (left.val !== right.val) {
      return false;
    }
    left = left.next;
    right = right.next;
  }
  return true;
}

function reverse(head: ListNode | null) {
  if (head === null) return head;
  let cur = head;
  let pre = null;
  while (cur !== null) {
    const next = cur.next;
    cur.next = pre;

    pre = cur;
    cur = next;
  }
  return pre;
}
