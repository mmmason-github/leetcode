/*
 * @lc app=leetcode id=1929 lang=typescript
 *
 * [1929] Concatenation of Array
 *
 *
 * algorithms
 * Easy (90.18%)
 * Likes:    2186
 * Dislikes: 283
 * Total Accepted:    391.9K
 * Total Submissions: 434.6K
 * Testcase Example:  '[1,2,1]'
 *
 * Given an integer array nums of length n, you want to create an array ans of
 * length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n
 * (0-indexed).
 *
 * Specifically, ans is the concatenation of two nums arrays.
 *
 * Return the array ans.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,2,1]
 * Output: [1,2,1,1,2,1]
 * Explanation: The array ans is formed as follows:
 * - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
 * - ans = [1,2,1,1,2,1]
 *
 * Example 2:
 *
 *
 * Input: nums = [1,3,2,1]
 * Output: [1,3,2,1,1,3,2,1]
 * Explanation: The array ans is formed as follows:
 * - ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
 * - ans = [1,3,2,1,1,3,2,1]
 *
 *
 *
 * Constraints:
 *
 *
 * n == nums.length
 * 1 <= n <= 1000
 * 1 <= nums[i] <= 1000
 *
 *
 */

// @lc code=start
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getConcatenation(nums: number[]): number[] {
  const answer: number[] = new Array<number>();
  const length: number = nums.length;

  for (let i = 0; i < length; i++) {
    answer[i] = nums[i];
    answer[length + i] = nums[i];
  }

  return nums.concat(nums);
}
// @lc code=end
