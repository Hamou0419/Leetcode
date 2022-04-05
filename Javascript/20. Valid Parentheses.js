/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length == 0 || s == null) return true
    let temp = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(' || s[i] == '[' || s[i] == '{') temp.push(s[i])
        else if (s[i] == ')' && temp[temp.length - 1] == '(') temp.pop()
        else if (s[i] == ']' && temp[temp.length - 1] == '[') temp.pop()
        else if (s[i] == '}' && temp[temp.length - 1] == '{') temp.pop()
        else return false
    }
    return temp.length == 0
};