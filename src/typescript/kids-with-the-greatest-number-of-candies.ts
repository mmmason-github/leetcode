/*
 * @lc app=leetcode id=1431 lang=typescript
 *
 * [1431] Kids With the Greatest Number of Candies
 *
 *
 * algorithms
 * Easy (87.24%)
 * Likes:    2381
 * Dislikes: 332
 * Total Accepted:    393.2K
 * Total Submissions: 450.8K
 * Testcase Example:  '[2,3,5,1,3]\n3'
 *
 * There are n kids with candies. You are given an integer array candies, where
 * each candies[i] represents the number of candies the i^th kid has, and an
 * integer extraCandies, denoting the number of extra candies that you have.
 *
 * Return a boolean array result of length n, where result[i] is true if, after
 * giving the i^th kid all the extraCandies, they will have the greatest number
 * of candies among all the kids, or false otherwise.
 *
 * Note that multiple kids can have the greatest number of candies.
 *
 *
 * Example 1:
 *
 *
 * Input: candies = [2,3,5,1,3], extraCandies = 3
 * Output: [true,true,true,false,true]
 * Explanation: If you give all extraCandies to:
 * - Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the
 * kids.
 * - Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the
 * kids.
 * - Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the
 * kids.
 * - Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among
 * the kids.
 * - Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the
 * kids.
 *
 *
 * Example 2:
 *
 *
 * Input: candies = [4,2,1,1,2], extraCandies = 1
 * Output: [true,false,false,false,false]
 * Explanation: There is only 1 extra candy.
 * Kid 1 will always have the greatest number of candies, even if a different
 * kid is given the extra candy.
 *
 *
 * Example 3:
 *
 *
 * Input: candies = [12,1,12], extraCandies = 10
 * Output: [true,false,true]
 *
 *
 *
 * Constraints:
 *
 *
 * n == candies.length
 * 2 <= n <= 100
 * 1 <= candies[i] <= 100
 * 1 <= extraCandies <= 50
 *
 *
 */

// @lc code=start
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const answer: boolean[] = new Array<boolean>();
  let maximum: number = 0;

  // Find the maxium
  for (const candy of candies) {
    if (candy > maximum) maximum = candy;
  }

  // Compare maximum to candy + extra
  for (const candy of candies) {
    if (candy + extraCandies >= maximum) answer.push(true);
    else answer.push(false);
  }

  return answer;
}
// @lc code=end
