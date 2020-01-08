// 请判断一个链表是否为回文链表。

// 示例 1:
// 输入: 1->2
// 输出: false

// 示例 2:
// 输入: 1->2->2->1
// 输出: true

// 进阶：
// 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
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
var isPalindrome = function(head) {
    if (!head || !head.next)
        return true

    let cur = head
    let pre = null
    let reversed = null
    // 每次走两位
    while (head && head.next) {
        pre = cur
        // 遍历链表
        cur = cur.next
        head = head.next.next
        // 翻转前部分链表
        pre.next = reversed
        reversed = pre
    }
    // 如果是奇数 往后走一位
    if (head)
        cur = cur.next
    
    while (cur) {
        if (reversed.val != cur.val)
            return false
        reversed = reversed.next
        cur = cur.next
    }

    return true
};