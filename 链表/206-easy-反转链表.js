// 反转一个单链表。

// 示例:
// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL

// 进阶:
// 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
var reverseList = function (head) {
    if (!head || !head.next) {
        return head
    }

    const next = head.next
    const list = reverseList(next)

    next.next = head
    head.next = null

    return list
}

var reverseList = function (head) {
    //头节点的上一个节点为 null
    var pre = null;
    var next = null;
    
    while (head != null) {
        next = head.next
        head.next = pre
        pre = head
        head = next
    }
}
 