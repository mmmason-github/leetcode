"use strict";
/*
 * @lc app=leetcode id=1720 lang=typescript
 *
 * [1720] Decode XORed Array
 *
 * https://leetcode.com/problems/decode-xored-array/description/
 *
 * algorithms
 * Easy (85.80%)
 * Likes:    1287
 * Dislikes: 190
 * Total Accepted:    109.1K
 * Total Submissions: 127.1K
 * Testcase Example:  '[1,2,3]\n1'
 *
 * There is a hidden integer array arr that consists of n non-negative
 * integers.
 *
 * It was encoded into another integer array encoded of length n - 1, such that
 * encoded[i] = arr[i] XOR arr[i + 1]. For example, if arr = [1,0,2,1], then
 * encoded = [1,2,3].
 *
 * You are given the encoded array. You are also given an integer first, that
 * is the first element of arr, i.e. arr[0].
 *
 * Return the original array arr. It can be proved that the answer exists and
 * is unique.
 *
 *
 * Example 1:
 *
 *
 * Input: encoded = [1,2,3], first = 1
 * Output: [1,0,2,1]
 * Explanation: If arr = [1,0,2,1], then first = 1 and encoded = [1 XOR 0, 0
 * XOR 2, 2 XOR 1] = [1,2,3]
 *
 *
 * Example 2:
 *
 *
 * Input: encoded = [6,2,7,3], first = 4
 * Output: [4,2,0,7,4]
 *
 *
 *
 * Constraints:
 *
 *
 * 2 <= n <= 10^4
 * encoded.length == n - 1
 * 0 <= encoded[i] <= 10^5
 * 0 <= first <= 10^5
 *
 *
 */
// @lc code=start
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function decode(encoded, first) {
    const answer = new Array();
    const length = encoded.length;
    answer[0] = first;
    for (let i = 1; i <= length; i++) {
        answer[i] = encoded[i - 1] ^ answer[i - 1];
    }
    return answer;
}
// @lc code=end
//# sourceMappingURL=decode-xo-red-array.js.map