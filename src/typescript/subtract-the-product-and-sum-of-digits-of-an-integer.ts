/*
 * @lc app=leetcode id=1281 lang=typescript
 *
 * [1281] Subtract the Product and Sum of Digits of an Integer
 *
 *
 * algorithms
 * Easy (86.65%)
 * Likes:    2043
 * Dislikes: 211
 * Total Accepted:    371.6K
 * Total Submissions: 428.9K
 * Testcase Example:  '234'
 *
 * Given an integer number n, return the difference between the product of its
 * digits and the sum of its digits.
 *
 * Example 1:
 *
 *
 * Input: n = 234
 * Output: 15
 * Explanation:
 * Product of digits = 2 * 3 * 4 = 24
 * Sum of digits = 2 + 3 + 4 = 9
 * Result = 24 - 9 = 15
 *
 *
 * Example 2:
 *
 *
 * Input: n = 4421
 * Output: 21
 * Explanation:
 * Product of digits = 4 * 4 * 2 * 1 = 32
 * Sum of digits = 4 + 4 + 2 + 1 = 11
 * Result = 32 - 11 = 21
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 10^5
 *
 *
 */

// @lc code=start
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function subtractProductAndSum(n: number): number {
  const digits: number[] = new Array<number>();
  let product: number = 1;
  let sum: number = 0;

  // Remove float point of number
  function toInt32(n: number): number {
    return n >> 0;
  }
  // Gets the digit
  do {
    const digit: number = n % 10;
    n = toInt32(n / 10);
    digits.push(digit);
  } while (n !== 0);

  // Compute the product and sum of the digits
  for (const digit of digits) {
    product *= digit;
    sum += digit;
  }

  return product - sum;
}
// @lc code=end
