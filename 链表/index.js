class ListNode {
    constructor (val) {
        this.val = val
        this.next = null
    }
}
// 1.寻找单链表的中间元素
function middleNode (head) {
    if (head == null) {
        return null
    }

    let fast = head
    let slow = head
    // fast.next = null 代表是尾结点
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }

    return slow
}

// 2.判断一个链表是否是循环链表
// 解法1
function hasCycle(head) {
    while (head) {
        if (head.val == '__flag') {
            return true
        } else {
            head.val = '__flag'
        }
        head = head.next
    }

    return false
}

// 解法2 双指针
function hasCycle (head) {
    if (head == null) {
        return false
    }
    
    let fast = head
    let slow = head

    while (slow != fast) {
        if (fast == null || fast.next == null) {
            return false
        }
        fast = fast.next.next
        slow = slow.next
    }

    return true
}

// 3.已知一个单链表求倒数第 N 个节点
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

// 4.删除单链表的倒数第 n 个节点
function removeNthFromEnd (head, n) {
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

// 5.旋转单链表
function rotateRight (head, k) {
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

function rotateRight (head, k) {
    let target = head, 
        last = null, 
        len = 1

    while (target && target.next) {
        target = target.next
        len++
    }

    last = target
    target = head

    if (k % len === 0) {
        return head
    }

    let diff = len - (k % len)
    let pre = null

    while (target && diff--) {
        pre = target
        target = target.next
    }

    pre.next = null
    last.next = head
    
    return target
}