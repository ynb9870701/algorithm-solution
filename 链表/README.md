### 1.链表的中间结点

```javascript
function middleNode (head) {
    if (head == null) {
        return null
    }

    let fast = head
    let slow = head

    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }

    return slow
}
```