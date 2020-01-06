// 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

// 示例：
// 给定一个链表: 1->2->3->4->5, 和 n = 2.

// 当删除了倒数第二个节点后，链表变为 1->2->3->5.
// 说明：
// 给定的 n 保证是有效的。

// 进阶：
// 你能尝试使用一趟扫描实现吗？

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (n < 1 || head == null) {
        return head
    }

    let fast = head
    let slow = head

    // fast指针先走n-1步
    for (let i = 0; i < n; i++) {
        // 防止 n > 链表节点个数
        if (fast) {
            fast = fast.next
        } else {
            return head
        }
    }

    if (fast == null) {
        return head.next
    }

    while (fast && fast.next) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return head
}

var removeNthFromEnd = function(head, n) {
    // 添加一个哨兵结点
    let preHead = new ListNode(-1)
    preHead.next = head
    let fast = head
    let slow = head
    
    for (let i = 0; i < n; i++) {
        fast = fast.next
    }

    while (fast && fast.next) {
        fast = fast.next
        slow = slow.next
    }

    slow.next = slow.next.next 
    return preHead.next
}