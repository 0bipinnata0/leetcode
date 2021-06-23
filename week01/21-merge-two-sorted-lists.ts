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

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let h = { next: null }
  const head = h
  while (l1 && l2) {
    if (l1.val > l2.val) {
      const next = l2.next
      l2.next = null
      h.next = l2
      l2 = next
    } else {
      const next = l1.next
      l1.next = null
      h.next = l1
      l1 = next
    }
    h = h.next
  }
  // 后续合并
  l1 ? h.next = l1 : h.next = l2
  return head.next
};