/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (nums.length < 3) return []
    nums = nums.sort((a, b) => a - b)
    let results = []
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] != nums[i - 1]) {
            let left = i + 1
            let right = nums.length - 1

            while (left < right) {
                let sum = nums[i] + nums[left] + nums[right]
                if (sum === 0) {
                    results.push([nums[i], nums[left], nums[right]])
                    while (nums[left] == nums[left + 1]) left++
                    while (nums[right] == nums[right - 1]) right--
                    left++
                    right--
                } else if (sum < 0) left++
                else if (sum > 0) right--
            }
        }
    }
    return results
};

(async function () {
    let nums = [-1, 0, 1, 2, -1, -4]
    let result = threeSum(nums)
    console.log(result)
}())