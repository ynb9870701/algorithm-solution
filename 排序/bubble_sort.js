function swap (arr, i, j) {
    const t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
}

function bubble_sort (arr) {
    let length = arr.length
    // 外层循环的变量用于分割已排序和未排序数
    for (let i = 0; i < length; i++) {
        // 内层循环的变量用于在未排序数中查找
        let flag = false
        for (let j = 0; j < length - i - 1; j++) {
            // 如果 arr[j] > arr[j+1] 则交换位置
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1)
                flag = true
            }
        }
        // 如果没有数据交换了 则表示已经变为有序数组
        if (!flag) break
    }
    return arr
}

function bubble_sort2 (arr) {
    for (let i = arr.length - 1; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            arr[j - 1] > arr[j] && swap(arr, j-1, j)
        }
    }
    return arr
}

console.log(bubble_sort([1, 22, 4, 34, 100, 2]))
console.log(bubble_sort2([1, 22, 4, 34, 100, 2]))