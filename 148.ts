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
 * 
 * 归并排序的本质是「分而治之」：

把链表分成两半 → 递归让左右两半各自变成有序
再把两个有序的链表合并成一个更大的有序链表

找中点是为了把一条链表分成长度尽量接近的两部分（这样递归深度最浅，效率最高）。

merge 的任务是：把两条已经各自有序的链表，合并成一条更大的有序链表。
 */

function sortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }
  let prev: ListNode | null = null;
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev!.next = null;

  const left = sortList(head);
  const right = sortList(slow);
  return merge(left, right);
}

function merge(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1) return l2;
  if (!l2) return l1;

  if (l1.val <= l2.val) {
    l1.next = merge(l1.next, l2);
    return l1;
  } else {
    l2.next = merge(l2.next, l1);
    return l2;
  }
}
