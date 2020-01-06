// 二分查找简单版
function binary_search (arr, target) {
    let low = 0
    let high = arr.length - 1
    let mid = 0
    while (low <= high) {
        mid = low + ((high -  low) >> 1)
        if (target == arr[mid]) {
            return mid
        } else if (target < arr[mid]) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return - 1
}
console.log('4-----', binary_search([1,2,3,4,5], 5))

// 二分查找 变形1 查找第一个值等于给定值的元素
function binary_search1 (arr, target) {
    let low = 0
    let high = arr.length - 1
    while (low <= high) {
        let mid = low + ((high - low) >> 1)
        // arr[mid] 跟 target的大小关系有三种：大于、小于和等于
        if (target < arr[mid]) { // 当arr[mid] > tartget时，需要更新 high= mid-1
            high = mid - 1
        } else if (target > arr[mid]) { // 当arr[mid] < tartget时，需要更新 low = mid + 1
            low = mid + 1
        } else {
            // 当arr[mid] == target时
            // 如果mid == 0那这个元素已经是数组第一个元素，就是我们要找的值
            // 如果mid != 0但arr[mid]的前一个元素arr[mid - 1]不等于target那也说明arr[mid]就是我们要找的值
            if (mid == 0 || arr[mid - 1] != target) return mid
            // 否则 说明arr[mid]就不是我们要找的第一个值更新high = mid - 1
            else high = mid - 1
        }
    }
    return -1
}
console.log('2-----', binary_search1([1,2,3,3,3,3,4,5], 3))

// 二分查找 变形2 查找最后一个值等于给定值的元素
function binary_search2 (arr, target) {
    let low = 0
    let high = arr.length - 1
    while (low <= high) {
        let mid = low + ((high - low) >> 1)
        if (target < arr[mid]) { 
            high = mid - 1
        } else if (target > arr[mid]) { 
            low = mid + 1
        } else {
            // 如果mid == (arr.length - 1)那这个元素已经是数组最后一个元素，就是我们要找的值
            // 如果mid != 0但arr[mid]的后一个元素arr[mid + 1]不等于target那也说明arr[mid]就是我们要找的值
            if ((mid == (arr.length - 1)) || arr[mid + 1] != target) return mid
            // 否则 说明arr[mid]就不是我们要找的第一个值更新log = mid + 1
            else low = mid + 1
        }
    }
    return -1
}
console.log('5-----', binary_search2([1,2,3,3,3,3,4,5], 3))

// 二分查找 变形3 查找第一个大于等于给定值的元素
function binary_search3 (arr, target) {
    let low = 0
    let high = arr.length - 1
    while (low <= high) {
        let mid = low + ((high - low) >> 1)
        if (target <= arr[mid]) {
            if (mid == 0 || arr[mid - 1] < target) return mid
            else high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return -1
}
console.log('2-----', binary_search3([2, 4, 6, 8, 10], 5))

// 二分查找 变形4 查找最后一个小于等于给定值的元素
function binary_search4 (arr, target) {
    let low = 0
    let high = arr.length - 1
    while (low <= high) {
        let mid = low + ((high - low) >> 1)
        if (target < arr[mid]) {
            high = mid - 1
        } else {
            if (mid == (arr.length - 1) || arr[mid + 1] > target) return mid
            else low = mid + 1
        }
    }
    return -1
}
console.log('1-----', binary_search4([2, 4, 6, 8, 10], 5))
