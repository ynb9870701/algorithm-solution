// 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

// 说明:
// 1 ≤ m ≤ n ≤ 链表长度。

// 示例:
// 输入: 1->2->3->4->5->NULL, m = 2, n = 4
// 输出: 1->4->3->2->5->NULL


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
    let preHead = new ListNode(null)
    preHead.next = head
    let tempHead = preHead
    // 走到m-1结点 准备反转
    let i = 0,
        j = 0
    while (i++ < (m - 1)) {
        tempHead = tempHead.next
    }
    let pre = null
    let curr = tempHead.next
    // 翻转m-n区间
    while (j++ <= (n - m)) {
        let next = curr.next
        curr.next = pre
        pre = curr
        curr = next
    }
    // 将翻转部分的链表和原链表拼接
    tempHead.next.next = curr
    tempHead.next = pre
    return preHead.next
}






















// var reverseBetween = function(head, m, n) {
//     if (!head) 
//         return head
//     let cur = head
//     let start = head
//     let pre = null
//     let reversed = null
//     let k = 0 // 链表初始长度
//     let newHead = new ListNode(null)
//     let res = newHead
//     while (cur) {
//         k++
//         if (k < m) {
//             res.next = cur
//             res = res.next
//             cur = cur.next
//         } else if (k >= m && k <= n) {
//             pre = cur
//             cur = cur.next
//             pre.next = reversed
//             reversed = pre
//             if (k == n) {
//                 res.next = reversed
//                 res = res.next
//             }
//         } else {
//             while (res.next) {
//                 res = res.next
//             }
//             res.next = cur
//             break
//         }
//     }
//     return newHead.next
// };

