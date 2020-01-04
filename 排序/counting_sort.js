function conuting_sort (a) {
    let len = a.length
    if (len <= 1) 
        return a
    
    // 查找数据中的范围
    let max = a[0]
    for (let i = 1; i < len; i++) {
        if (a[i] > max) 
            max = a[i]
    }

    // 申请一个计数数组c 下标[0, max]
    let c = new Array(max + 1)
    for (let i = 0; i <= max; i++) {
        c[i] = 0
    }

    // 计算每个元素的个数，放入c中
    for (let i = 0; i < len; i++) {
        c[a[i]]++
    }

    // 依次累加
    for (let i = 1; i <= max; i++) {
        c[i] = c[i - 1] + c[i]
    }

    // 临时数组 保存排序后的结果
    let r = new Array(len)
    for (let i = len - 1; i >= 0; i--) {
        let index = c[a[i]] - 1
        r[index] = a[i]
        c[a[i]]--
    }

    // 将有序数组拷贝给a
    for (let i = 0; i < len; i++) {
        a[i] = r[i]
    }
}

const arr = [5, 4, 3, 2, 1]
conuting_sort(arr)
console.log('conuting_sort', arr)