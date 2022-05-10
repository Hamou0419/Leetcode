/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums = nums.sort((a, b) => a - b)
    let result = nums[0] + nums[1] + nums[2]
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] != nums[i - 1]) {
            if (i > 0 && nums[i] == nums[i - 1]) continue
            let left = i + 1
            let right = nums.length - 1
            while (left < right) {
                let current = nums[i] + nums[left] + nums[right]
                if (current < target) left++
                else if (current > target) right--
                else if (current == target) return current
                if (Math.abs(current - target) < Math.abs(result - target)) result = current
            }
        }
    }
    return result
};