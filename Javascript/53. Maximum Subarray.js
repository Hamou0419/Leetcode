/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let result = now = nums[0]  
    if (nums.length == 0) return 0
    for (let i = 1; i < nums.length; i++) {
        if (now > 0) now += nums[i]
        else now = nums[i]
        if (now > result) result = now
    }
    return result
};