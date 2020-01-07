// 给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。

// 示例 1:
// 输入: 1->2->3->3->4->4->5
// 输出: 1->2->5

// 示例 2:
// 输入: 1->1->1->2->3
// 输出: 2->3

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (head == null) 
        return null

    let preHead = new ListNode(null)
    preHead.next = head
    let cur = head
    let pre = preHead
    while (cur && cur.next) {
        if (cur.val === cur.next.val) {
            cur = cur.next
        } else if (pre.next !== cur) {
            pre.next = cur.next
            cur = cur.next
        } else {
            pre = cur
            cur = cur.next    
        }
    }

    if (pre.next !== cur) {
        pre.next = cur.next
    }
    return preHead.next
}

var deleteDuplicates = function(head) {
    if (head == null) 
        return head
    
    let res = new ListNode('head')
    let pointer = res
    let sameValue = "sameValue"

    while (head && head.next) {
        if (head.val !== sameValue && head.val !== head.next.val) {
            pointer.next = head
            head = head.next
            pointer = pointer.next
        } else {
            sameValue = head.val
            head = head.next
        }
    }

    if (sameValue == head.val)
        pointer.next = null
    else
        pointer.next = head

    return res.next
}