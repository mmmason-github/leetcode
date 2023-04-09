/*
 * @lc app=leetcode id=2413 lang=typescript
 *
 * [2413] Smallest Even Multiple
 *
 *
 * algorithms
 * Easy (87.67%)
 * Likes:    545
 * Dislikes: 54
 * Total Accepted:    79.7K
 * Total Submissions: 90.9K
 * Testcase Example:  '5'
 *
 * Given a positive integer n, return the smallest positive integer that is a
 * multiple of both 2 and n.
 *
 * Example 1:
 *
 *
 * Input: n = 5
 * Output: 10
 * Explanation: The smallest multiple of both 5 and 2 is 10.
 *
 *
 * Example 2:
 *
 *
 * Input: n = 6
 * Output: 6
 * Explanation: The smallest multiple of both 6 and 2 is 6. Note that a number
 * is a multiple of itself.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 150
 *
 *
 */

// @lc code=start
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function smallestEvenMultiple(n: number): number {
  return n % 2 !== 0 ? n * 2 : n;
}
// @lc code=end
