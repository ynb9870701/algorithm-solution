// 给定一个链表，判断链表中是否有环。

// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
// 如果 pos 是 -1，则在该链表中没有环。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 解法1 快慢指针，如果能相遇，则是环内相遇。如果没环，是不会相遇的
var hasCycle = function(head) {
    if (head == null) {
        return false
    }

    let fast = head.next
    let slow = head

    while (slow != fast) {
        if (!fast || !fast.next) {
            return false
        }
        fast = fast.next.next
        slow = slow.next
    }
    return true
};

// 解法2 遍历链表 给遍历过的节点做上标记 如果下个节点中出现了这个标记 则表示存在环形结构
var hasCycle = function(head) {
    while (head) {
        if (head.val === '@@flag') {
            return true
        } else {
            head.val = '@@flag'
        }
        head = head.next
    }
    return false
};