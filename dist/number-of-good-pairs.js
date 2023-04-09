"use strict";
/*
 * @lc app=leetcode id=1512 lang=typescript
 *
 * [1512] Number of Good Pairs
 *
 * https://leetcode.com/problems/number-of-good-pairs/description/
 *
 * algorithms
 * Easy (88.23%)
 * Likes:    3728
 * Dislikes: 186
 * Total Accepted:    426.4K
 * Total Submissions: 483.3K
 * Testcase Example:  '[1,2,3,1,1,3]'
 *
 * Given an array of integers nums, return the number of good pairs.
 *
 * A pair (i, j) is called good if nums[i] == nums[j] and i < j.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,2,3,1,1,3]
 * Output: 4
 * Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,1,1,1]
 * Output: 6
 * Explanation: Each pair in the array are good.
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [1,2,3]
 * Output: 0
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 100
 * 1 <= nums[i] <= 100
 *
 *
 */
// @lc code=start
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function numIdenticalPairs(nums) {
    let answer = 0;
    const occurences = new Map();
    for (const num of nums) {
        if (occurences.has(num)) {
            answer += occurences.get(num);
            occurences.set(num, occurences.get(num) + 1);
        }
        else {
            occurences.set(num, 1);
        }
    }
    return answer;
}
// @lc code=end
//# sourceMappingURL=number-of-good-pairs.js.map