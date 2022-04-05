/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let currentLongestText = [0, 1]

    for (let i = 1; i < s.length; i++) {
        const odd = expandAroundCenter(s, i - 1, i + 1)
        const even = expandAroundCenter(s, i - 1, i)
        const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even
        currentLongestText = currentLongestText[1] - currentLongestText[0] > longest[1] - longest[0] ? currentLongestText : longest
    }
    return s.slice(currentLongestText[0], currentLongestText[1])
};

function expandAroundCenter(s, left_Idx, right_Idx) {
    while (left_Idx >= 0 && right_Idx < s.length) {
        if (s[left_Idx] !== s[right_Idx]) break
        left_Idx--
        right_Idx++
    }
    return [left_Idx + 1, right_Idx]
}