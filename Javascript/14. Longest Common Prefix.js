/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    if (strs.length == 0) return ''

    let res = strs[0]

    for (let i = 1; i < strs.length; i++) {
        let str = strs[i]
        let j = 0
        for (; j < res.length; j++) {
            if (res[j] != str.charAt(j)) break
        }
        res = res.slice(0, j)
    }
    return res


};