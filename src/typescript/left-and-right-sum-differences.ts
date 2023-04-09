/*
 * @lc app=leetcode id=2574 lang=typescript
 *
 * [2574] Left and Right Sum Differences
 *
 *
 * algorithms
 * Easy (88.69%)
 * Likes:    351
 * Dislikes: 18
 * Total Accepted:    40.5K
 * Total Submissions: 45.6K
 * Testcase Example:  '[10,4,8,3]'
 *
 * Given a 0-indexed integer array nums, find a 0-indexed integer array answer
 * where:
 *
 *
 * ⁠   answer.length == nums.length.
 * ⁠   answer[i] = |leftSum[i] - rightSum[i]|.
 *
 *
 * Where:
 *
 *
 * ⁠   leftSum[i] is the sum of elements to the left of the index i in the
 * array nums. If there is no such element, leftSum[i] = 0.
 * ⁠   rightSum[i] is the sum of elements to the right of the index i in the
 * array nums. If there is no such element, rightSum[i] = 0.
 *
 *
 * Return the array answer.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [10,4,8,3]
 * Output: [15,1,11,22]
 * Explanation: The array leftSum is [0,10,14,22] and the array rightSum is
 * [15,11,3,0].
 * The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1]
 * Output: [0]
 * Explanation: The array leftSum is [0] and the array rightSum is [0].
 * The array answer is [|0 - 0|] = [0].
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 1000
 * 1 <= nums[i] <= 10^5
 *
 *
 */

// @lc code=start
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function leftRigthDifference(nums: number[]): number[] {
  const answer: number[] = new Array<number>();
  const leftSum: number[] = new Array<number>();
  const rightSum: number[] = new Array<number>();
  const length: number = nums.length;

  // Compute left sum
  for (let i = 0; i < length; i++) {
    if (i === 0) leftSum[i] = 0;
    else leftSum[i] = nums[i - 1] + leftSum[i - 1];
  }

  // Compute right sum
  for (let i = length - 1; i >= 0; i--) {
    if (i === length - 1) rightSum[i] = 0;
    else rightSum[i] = nums[i + 1] + rightSum[i + 1];
  }

  // Compute the answer (absolute of left sum - right sum)
  // If the left sum - right sum is negative,use the complement
  // bit operator to flip the sign and add one
  for (let i = 0; i < length; i++) {
    let absolute: number = leftSum[i] - rightSum[i];
    if (absolute < 0) absolute = ~absolute + 1;
    answer[i] = absolute;
  }

  return answer;
}
// @lc code=end
