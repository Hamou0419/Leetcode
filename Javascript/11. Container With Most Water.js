/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let i = 0
    let j = height.length - 1
    let max = 0
    let curr
    while (i < j) {
        curr = (j - i) * Math.min(height[i], height[j])
        if (curr > max) max = curr
        height[i] < height[j] ? i++ : j--
    }
    return max
};