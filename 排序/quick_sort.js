function quick_sort (arr) {
    if (arr.length <= 1)
        return arr
    // 取基准点
    const midIndex = arr.length >> 1
    // 取基准点的值，splice(index,1) 则返回的是含有被删除的元素的数组。
    const valArr = arr.splice(midIndex, 1)
    const midValue = valArr[0]
    const left = []; // 存放比基准点小的数组
	const right = []; // 存放比基准点大的数组
	// 遍历数组，进行判断分配
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < midValue) {
            // 比基准点小的放在左边数组
            left.push(arr[i])
        } else {
            // 比基准点小的放在右边数组
            right.push(arr[i])
        }
    }
    //递归执行以上操作，对左右两个数组进行操作，直到数组长度为 <= 1
    return quick_sort(left).concat(midValue, quick_sort(right))
}

const arr = [5, 4, 3, 2, 1];
console.log('quick_sort', quick_sort(arr));
