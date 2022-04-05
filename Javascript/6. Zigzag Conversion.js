/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (s == null) return ""
    if (numRows == 1) return s

    let n = numRows * 2 - 2;
    let array = [];

    for (let k = 0; k < numRows; k++) {
        array.push("");
    }

    for (let i in s) {
        let lineNumber = i % n;
        if (lineNumber < numRows) array[lineNumber] += s[i];
        else array[2 * numRows - lineNumber - 2] += s[i];
    }

    return array.join("");

};