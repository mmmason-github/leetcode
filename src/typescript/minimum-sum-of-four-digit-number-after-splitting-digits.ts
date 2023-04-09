/*
 * @lc app=leetcode id=2160 lang=typescript
 *
 * [2160] Minimum Sum of Four Digit Number After Splitting Digits
 *
 *
 * algorithms
 * Easy (86.83%)
 * Likes:    1033
 * Dislikes: 109
 * Total Accepted:    81.2K
 * Total Submissions: 93.5K
 * Testcase Example:  '2932'
 *
 * You are given a positive integer num consisting of exactly four digits.
 * Split num into two new integers new1 and new2 by using the digits found in
 * num. Leading zeros are allowed in new1 and new2, and all the digits found in
 * num must be used.
 *
 *
 * For example, given num = 2932, you have the following digits: two 2's, one 9
 * and one 3. Some of the possible pairs [new1, new2] are [22, 93], [23, 92],
 * [223, 9] and [2, 329].
 *
 *
 * Return the minimum possible sum of new1 and new2.
 *
 *
 * Example 1:
 *
 *
 * Input: num = 2932
 * Output: 52
 * Explanation: Some possible pairs [new1, new2] are [29, 23], [223, 9], etc.
 * The minimum sum can be obtained by the pair [29, 23]: 29 + 23 = 52.
 *
 *
 * Example 2:
 *
 *
 * Input: num = 4009
 * Output: 13
 * Explanation: Some possible pairs [new1, new2] are [0, 49], [490, 0], etc.
 * The minimum sum can be obtained by the pair [4, 9]: 4 + 9 = 13.
 *
 *
 *
 * Constraints:
 *
 *
 * 1000 <= num <= 9999
 *
 *
 */

// @lc code=start
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function minimumSum(num: number): number {
  // Create array of digits
  // Sort them
  // Return (array[0]*10 + array[3]) + (array[1]*10 + array[4])
  const digits: number[] = new Array<number>();

  // Typescript stupid like that
  // Remove the float part
  function toInt32(f: number): number {
    // Note that type "number" in JS is always "float" internally.
    return f >> 0;
  }

  // Create array of digits
  do {
    const digit: number = num % 10;
    digits.push(digit);
    // Updating num to num/10 cuts off the last digit:
    num = toInt32(num / 10);
  } while (num !== 0);

  // Sort them (bubble sort..) why not
  for (let i = 0; i < digits.length; i++) {
    for (let j = i; j < digits.length; j++) {
      if (digits[i] > digits[j]) {
        const temp: number = digits[i];
        digits[i] = digits[j];
        digits[j] = temp;
      }
    }
  }

  return digits[0] * 10 + digits[2] + digits[1] * 10 + digits[3];
}
// @lc code=end
