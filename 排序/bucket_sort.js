let quick_sort = require('./quick_sort')
// bucketSize 默认桶数为5
function bucket_sort (arr, bucketSize = 5) {
    if (arr.length === 0) {
        return arr
    }

    let minValue = arr[0]
    let maxValue = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            // 输入数据的最小值
            minValue = arr[i]
        } else if (arr[i] > maxValue) {
            // 输入数据的最大值
            maxValue = arr[i]
        }
    }

    // 桶的初始化
    let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1
    let buckets = new Array(bucketCount)
    for (let i = 0; i < buckets.length; i++) {
        buckets[i] = []
    }

    // 将数据分配到各个桶中
    for (let i = 0; i < arr.length; i++) {
        buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
    }

    arr = []
    for (let i = 0; i < buckets.length; i++) {
        // 对每个桶进行快排
        quick_sort(buckets[i])
        for (let j = 0; j < buckets[i].length; j++) {
            arr.push(buckets[i][j])
        }
    }

    return arr
}

let arr = [1, 22, 4, 34, 100, 2]
console.log('bucket_sor', bucket_sort(arr))