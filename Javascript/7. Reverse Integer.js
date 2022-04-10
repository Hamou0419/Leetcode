/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let limit = Math.pow(2, 31) - 1
    if (x >= 0 && x < 10) return x


    let result = ''
    let xStr = x.toString()
    let resultStr = result + xStr.split('').reverse().join('')
    if (resultStr.includes('-')) resultStr = '-' + resultStr.replace(/-/g, '')

    result = parseInt(resultStr)

    if (result > limit || result < -(1 + limit)) return 0
    return result
};