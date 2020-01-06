function getNthFromEnd (head, n) {
    // 输入的链表不能为空，并且 n 大于0
    if (head == null || n < 1) {
        return null
    }

    let fast = head
    let slow = head

    // fast指针先走n步 防止n>链表长度
    for (let i = 1; i < n; i++) {
        if (fast) {
            fast = fast.next
        } else {
            return null
        }
    }
    // 当fast.next = null 就走到了最后一个结点 
    // 即slow就是第n个结点
    while (fast && fast.next) {
        fast = fast.next
        slow = slow.next
    }

    return slow
}