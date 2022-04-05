/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let list = []
    let result = 0
    for (let i = 0; i < s.length; i++) {
        let position = list.indexOf(s[i])
        if (position != -1) list.splice(0, position + 1)
        list.push(s[i])
        result = Math.max(result, list.length)
    }
    return result
};