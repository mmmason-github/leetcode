"use strict";
/*
 * @lc app=leetcode id=1480 lang=typescript
 *
 * [1480] Running Sum of 1d Array
 *
 * https://leetcode.com/problems/running-sum-of-1d-array/description/
 *
 * algorithms
 * Easy (87.52%)
 * Likes:    6407
 * Dislikes: 300
 * Total Accepted:    1.4M
 * Total Submissions: 1.6M
 * Testcase Example:  '[1,2,3,4]'
 *
 * Given an array nums. We define a running sum of an array as runningSum[i] =
 * sum(nums[0]…nums[i]).
 *
 * Return the running sum of nums.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,2,3,4]
 * Output: [1,3,6,10]
 * Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
 *
 * Example 2:
 *
 *
 * Input: nums = [1,1,1,1,1]
 * Output: [1,2,3,4,5]
 * Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1,
 * 1+1+1+1+1].
 *
 * Example 3:
 *
 *
 * Input: nums = [3,1,2,10,1]
 * Output: [3,4,6,16,17]
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 1000
 * -10^6 <= nums[i] <= 10^6
 *
 */
// @lc code=start
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function runningSum(nums) {
    const runningSum = new Array();
    runningSum.push(nums[0]);
    for (let i = 1; i < nums.length; i++) {
        runningSum[i] = runningSum[i - 1] + nums[i];
    }
    return runningSum;
}
// @lc code=end
//# sourceMappingURL=running-sum-of-1-d-array.js.map