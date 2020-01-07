// 给定一个链表和一个特定值 x，对链表进行分隔，使得所有小于 x 的节点都在大于或等于 x 的节点之前。

// 你应当保留两个分区中每个节点的初始相对位置。

// 示例:
// 输入: head = 1->4->3->2->5->2, x = 3
// 输出: 1->2->2->4->3->5

var partition = function(head, x) {
    let leftNode = new ListNode(null),
        left = leftNode,
        rightNode = new ListNode(null),
        right = rightNode

    while (head) {
        if (head.val < x) {
            left.next = head
            left = left.next
        } else {
            right.next = head
            right = right.next
        }
        head = head.next
    }
    // console.log(left)
    // console.log(right)
    // console.log(leftNode.next)
    // console.log(rightNode.next)
    right.next = null
    left.next = rightNode.next
    return leftNode.next
}