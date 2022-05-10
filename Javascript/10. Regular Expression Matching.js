/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    let regex = new RegExp('^' + p + '$', 'm')
    return regex.test(s)
};