// 给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。

// 请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes 为节点总数。

// 示例 1:
// 输入: 1->2->3->4->5->NULL
// 输出: 1->3->5->2->4->NULL

// 示例 2:
// 输入: 2->1->3->5->6->4->7->NULL 
// 输出: 2->3->6->7->1->5->4->NULL

// 说明:
// 应当保持奇数节点和偶数节点的相对顺序。
// 链表的第一个节点视为奇数节点，第二个节点视为偶数节点，以此类推。
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
var oddEvenList = function (head) {
    if (head == null || head.next == null) {
        return head;
    }
    // head 为奇链表头结点，oddTail 为奇链表尾节点
    let oddTail = head;
    // evenHead 为偶链表头结点
    let evenHead = head.next;
    // evenTail 为偶链表尾节点
    let evenTail = evenHead;
    while (oddTail.next != null && evenTail.next != null) {
        oddTail.next = evenTail.next;
        oddTail = oddTail.next;
        evenTail.next = oddTail.next;
        evenTail = evenTail.next;
    }
    oddTail.next = evenHead;
    return head;
};



var oddEvenList = function(head) {
    let cur = head
    let odd = new ListNode(null)
    let oddHead = odd
    let even = new ListNode(null)
    let evenHead = even
    let i = 1
    while (cur) {
        // 偶数
        if (i % 2 == 0) {
            evenHead.next = cur
            evenHead = evenHead.next
        } else {
            oddHead.next = cur
            oddHead = oddHead.next
        }
        i++
        cur = cur.next
    }
    oddHead.next = even.next
    evenHead.next = null
    return odd.next
};