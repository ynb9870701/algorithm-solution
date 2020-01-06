// 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。

// 示例 1:
// 输入: 1->2->3->4->5->NULL, k = 2
// 输出: 4->5->1->2->3->NULL
// 解释:
// 向右旋转 1 步: 5->1->2->3->4->NULL
// 向右旋转 2 步: 4->5->1->2->3->NULL

// 示例 2:
// 输入: 0->1->2->NULL, k = 4
// 输出: 2->0->1->NULL
// 解释:
// 向右旋转 1 步: 2->0->1->NULL
// 向右旋转 2 步: 1->2->0->NULL
// 向右旋转 3 步: 0->1->2->NULL
// 向右旋转 4 步: 2->0->1->NULL

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// 解法1
var rotateRight = function(head, k) {
    let start = 1

    let fast = head

    while (start < k && fast.next != null) {
        fast = fast.next
        start++
    }

    // 长度刚好 不用翻转
    // 
    if (fast.next == null || start < k) {
        return head
    }
    let pre = fast
    // 新头结点
    let newHead = fast.next
    // 走到尾结点
    while (fast.next) {
        fast = fast.next
    }
    // 将尾结点指向新的头结点
    fast.next = head
    // 变为尾结点
    pre.next = null
    
    return newHead
};

// 解法2
var rotateRight = function(head, k) {
    if (head == null) {
        return null
    }
    let curr = head,
        temp = null,
        n = 0
    // 1.形成一个闭环
    // 2.获取链表结点个数
    while (curr) {
        n++
        if (curr.next == null) {
            curr.next = head
            break
        }
        curr = curr.next
    }
    // 循环(k % n)次
    // 然后在该指针处打断环形链表
    k = k % n
    while (k++ < n) {
        k === n && (temp = head)
        head = head.next
    }

    temp.next = null
    return head
}