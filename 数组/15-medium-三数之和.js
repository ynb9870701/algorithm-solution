// 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。

// 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let target,
        result = [],
        len = nums.length
    // 排序
    nums.sort((a, b) => a - b)
    for (let i = 0; i < len; i++) {
        // 避免重复
        if (i > 0 && nums[i] == nums[i - 1]) continue
        // 当前值大于0 则不会在存在和为0的情况
        if ((target = nums[i]) > 0) break
        let l = i + 1,
            r = len - 1
        while (l < r) {
            let sum = nums[l] + nums[r] + target
            if (sum < 0) {
                l++
            } else if (sum > 0) {
                r--
            } else {
                result.push([target, nums[l], nums[r]])
                l++
                r--
                while (l < r && nums[l] == nums[l - 1]) l++
                while (l < r && nums[r] == nums[r + 1]) r--
            }
        }
    }
    return result
}