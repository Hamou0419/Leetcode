/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false
    if (x < 10) return true
    let temp = x
    let y = parseInt(x % 10)
    x = parseInt(x / 10)
    while (x != 0) {
        y = parseInt(y * 10 + x % 10)
        x = parseInt(x / 10)
    }
    return temp == y


};