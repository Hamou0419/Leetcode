/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function (digits) {
    if (digits === "" || digits === 1) return []
    let result = []
    let map = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    }

    if (digits.length === 1) return map[digits]

    if (digits.length !== 0) letterCombi(digits, '')


    function letterCombi(digits, str) {
        if (digits === '') result.push(str)
        else {
            for (let i = 0; i < map[digits[0]].length; i++) letterCombi(digits.substr(1), str + map[digits[0]][i])
        }
    }

    return result
};