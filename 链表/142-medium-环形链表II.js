// 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
// 说明：不允许修改给定的链表。

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
var detectCycle = function(head) {
    if (!head || !head.next) {
        return null
    }
    
    let fast = head
    let slow = head
    let start = head
    
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        // 相遇
        if (slow == fast) {
            while (start != slow) {
                // 链表入口节点和相遇节点同时出发
                // 相遇时就是环节点入口
                slow = slow.next
                start = start.next
            }
            return slow
        }
    }

    return null
};

var detectCycle = function(head) {
    while (head && head.next) {
        if (head.flag) {
            return head
        } else {
            head.flag = 1
            head = head.next
        }
    }
    return null
};