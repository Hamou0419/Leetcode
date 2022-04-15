/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let numsLength = nums.length
    if (target <= nums[0]) return 0
    for (let i = 0; i < numsLength; i++) {
        let num = nums[i]
        let next = nums[i + 1]
        if (target == next) return nums.indexOf(next)
        if (num < target && target < next) return nums.indexOf(num) + 1
    }
    return numsLength
};