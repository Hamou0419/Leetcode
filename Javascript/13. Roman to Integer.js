/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let result = 0
    for (let i = 0; i < s.length; i++) {
        let val1 = map[s[i]]
        let val2 = map[s[i + 1]]
        if (val2 > val1) {
            result = result + val2 - val1
            i++
        } else result = result + val1
    }
    return result
};