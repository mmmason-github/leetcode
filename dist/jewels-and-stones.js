"use strict";
/*
 * @lc app=leetcode id=771 lang=typescript
 *
 * [771] Jewels and Stones
 *
 * https://leetcode.com/problems/jewels-and-stones/description/
 *
 * algorithms
 * Easy (88.20%)
 * Likes:    4436
 * Dislikes: 538
 * Total Accepted:    860.2K
 * Total Submissions: 975.3K
 * Testcase Example:  '"aA"\n"aAAbbbb"'
 *
 * You're given strings jewels representing the types of stones that are
 * jewels, and stones representing the stones you have. Each character in
 * stones is a type of stone you have. You want to know how many of the stones
 * you have are also jewels.
 *
 * Letters are case sensitive, so "a" is considered a different type of stone
 * from "A".
 *
 *
 * Example 1:
 * Input: jewels = "aA", stones = "aAAbbbb"
 * Output: 3
 * Example 2:
 * Input: jewels = "z", stones = "ZZ"
 * Output: 0
 *
 *
 * Constraints:
 *
 *
 * 1 <= jewels.length, stones.length <= 50
 * jewels and stones consist of only English letters.
 * All the characters of jewels are unique.
 *
 *
 */
// @lc code=start
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function numJewelsInStones(jewels, stones) {
    let answer = 0;
    for (const jewel of jewels) {
        for (const stone of stones) {
            if (jewel === stone) {
                answer++;
            }
        }
    }
    return answer;
}
// @lc code=end
//# sourceMappingURL=jewels-and-stones.js.map