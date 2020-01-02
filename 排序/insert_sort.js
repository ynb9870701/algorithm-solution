function insert_sort (arr) {
    let length = arr.length
    for (let i = 1; i < length; i++) {
        let value = arr[i]
        let j = i - 1
        // 查找插入的位置
        for (; j >= 0; j--) {
            // 数据移动
            if (arr[j] > value) {
                arr[j + 1] = arr[j]
            } else {
                break
            }
        }
        // 插入数据
        arr[j + 1] = value
    }
}
let arr = [1, 22, 4, 34, 100, 2]
insert_sort(arr)
console.log(arr)