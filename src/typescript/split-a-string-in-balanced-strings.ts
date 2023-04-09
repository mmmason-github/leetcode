/*
 * @lc app=leetcode id=1221 lang=typescript
 *
 * [1221] Split a String in Balanced Strings
 *
 *
 * algorithms
 * Easy (85.15%)
 * Likes:    2320
 * Dislikes: 850
 * Total Accepted:    242.1K
 * Total Submissions: 284.3K
 * Testcase Example:  '"RLRRLLRLRL"'
 *
 * Balanced strings are those that have an equal quantity of 'L' and 'R'
 * characters.
 *
 * Given a balanced string s, split it into some number of substrings such
 * that:
 *
 *
 * Each substring is balanced.
 *
 *
 * Return the maximum number of balanced strings you can obtain.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "RLRRLLRLRL"
 * Output: 4
 * Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring
 * contains same number of 'L' and 'R'.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "RLRRRLLRLL"
 * Output: 2
 * Explanation: s can be split into "RL", "RRRLLRLL", each substring contains
 * same number of 'L' and 'R'.
 * Note that s cannot be split into "RL", "RR", "RL", "LR", "LL", because the
 * 2^nd and 5^th substrings are not balanced.
 *
 * Example 3:
 *
 *
 * Input: s = "LLLLRRRR"
 * Output: 1
 * Explanation: s can be split into "LLLLRRRR".
 *
 *
 *
 * Constraints:
 *
 *
 * 2 <= s.length <= 1000
 * s[i] is either 'L' or 'R'.
 * s is a balanced string.
 *
 *
 */

// @lc code=start
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function balancedStringSplit(s: string): number {
  const answer: string[] = new Array<string>();
  let lCount: number = 0;
  let rCount: number = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "L") lCount += 1;
    else rCount += 1;

    if (lCount === rCount) {
      answer.push(s.slice(0, i + 1));
      lCount = 0;
      rCount = 0;
    }
  }

  return answer.length;
}
// @lc code=end
