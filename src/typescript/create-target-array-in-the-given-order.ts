/*
 * @lc app=leetcode id=1389 lang=typescript
 *
 * [1389] Create Target Array in the Given Order
 *
 *
 * algorithms
 * Easy (85.85%)
 * Likes:    1596
 * Dislikes: 1572
 * Total Accepted:    189.2K
 * Total Submissions: 220.5K
 * Testcase Example:  '[0,1,2,3,4]\n[0,1,2,2,1]'
 *
 * Given two arrays of integers nums and index. Your task is to create target
 * array under the following rules:
 *
 *
 * Initially target array is empty.
 * From left to right read nums[i] and index[i], insert at index index[i] the
 * value nums[i] in target array.
 * Repeat the previous step until there are no elements to read in nums and
 * index.
 *
 *
 * Return the target array.
 *
 * It is guaranteed that the insertion operations will be valid.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
 * Output: [0,4,1,3,2]
 * Explanation:
 * nums       index     target
 * 0            0        [0]
 * 1            1        [0,1]
 * 2            2        [0,1,2]
 * 3            2        [0,1,3,2]
 * 4            1        [0,4,1,3,2]
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,2,3,4,0], index = [0,1,2,3,0]
 * Output: [0,1,2,3,4]
 * Explanation:
 * nums       index     target
 * 1            0        [1]
 * 2            1        [1,2]
 * 3            2        [1,2,3]
 * 4            3        [1,2,3,4]
 * 0            0        [0,1,2,3,4]
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [1], index = [0]
 * Output: [1]
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length, index.length <= 100
 * nums.length == index.length
 * 0 <= nums[i] <= 100
 * 0 <= index[i] <= i
 *
 *
 */

// @lc code=start
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function createTargetArray(nums: number[], index: number[]): number[] {
  const length: number = nums.length;
  const answer: number[] = new Array<number>(length).fill(-1);

  for (let i = 0; i < length; i++) {
    if (answer[index[i]] !== -1) {
      // save the current element
      // move everything
      // move each element down 1
      // [0, 1, 3, 2, 0]
      // [0, 1, 3, 2, 2]
      // [0, 1, 3, 3, 2]
      // [0, X, 1, 3, 2]
      for (let j = i; index[i] < j; j--) answer[j] = answer[j - 1];

      const temp = answer[index[i]];
      answer[index[i]] = nums[i];
      answer[index[i] + 1] = temp;
    } else answer[index[i]] = nums[i];
  }

  return answer;
}
// @lc code=end
