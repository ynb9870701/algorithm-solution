function merge_sort (arr) {
    // 采用自下而上的递归方法
    let length = arr.length
    if (length < 2)
        return arr
    // length >> 1 等价于 Math.floor(length / 2)
    let middle = length >> 1,
        left = arr.slice(0, middle),
        right = arr.slice(middle) // 拆分为两个子数组
    return merge(merge_sort(left), merge_sort(right))
}

function merge (left, right) {
    let result = []
    while (left.length && right.length) {
        // 条件 <= 如果条件不是 <= 排序则变为不稳定排序
        if (left[0] <= right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    while (left.length) result.push(left.shift())
    while (right.length) result.push(right.shift())

    return result
}

let arr = [1, 22, 4, 34, 100, 2]
console.log(merge_sort(arr))