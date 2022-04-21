/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    s = s.replace(/ +/g, ' ').trim()
    let list = s.split(' ')
    return list[list.length - 1].length
};