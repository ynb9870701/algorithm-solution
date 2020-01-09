// 删除链表中等于给定值 val 的所有节点。

// 示例:
// 输入: 1->2->6->3->4->5->6, val = 6
// 输出: 1->2->3->4->5

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    if (!head) {
        return null;
    }
    head.next = removeElements(head.next, val);
    
    if (head.val === val) {
        return head.next;
    } else {
        return head;
    }
};

var removeElements = function (head, val) {
    let cur = head
    let dummy = new ListNode(null)
    dummy.next = head
    let pre = dummy
    while (cur) {
        if (cur.val === val) {
            pre.next = cur.next
        } else {
            pre = cur
        }
        cur = cur.next
    }
    return dummy.next
};