/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    for (let i = 0; i <= nums.length; i++) {
        let result1 = target - nums[i]
        for (let j = i + 1; j <= nums.length - 1; j++) {
            if (nums[j] == result1) {
                return [i, j]
            }
        }
    }

};