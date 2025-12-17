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

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
  val: number;
  next: ListNode | null;
}

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  let A = headA;
  let B = headB;

  while (A !== B) {
    if (A === null) {
      A = headB;
    } else {
      A = A.next;
    }
    if (B === null) {
      B = headA;
    } else {
      B = B.next;
    }
  }

  return B;
}
