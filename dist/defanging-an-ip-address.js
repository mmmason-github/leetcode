"use strict";
/*
 * @lc app=leetcode id=1108 lang=typescript
 *
 * [1108] Defanging an IP Address
 *
 * https://leetcode.com/problems/defanging-an-ip-address/description/
 *
 * algorithms
 * Easy (89.09%)
 * Likes:    1613
 * Dislikes: 1661
 * Total Accepted:    507K
 * Total Submissions: 569.1K
 * Testcase Example:  '"1.1.1.1"'
 *
 * Given a valid (IPv4) IP address, return a defanged version of that IP
 * address.
 *
 * A defanged IP address replaces every period "." with "[.]".
 *
 *
 * Example 1:
 * Input: address = "1.1.1.1"
 * Output: "1[.]1[.]1[.]1"
 * Example 2:
 * Input: address = "255.100.50.0"
 * Output: "255[.]100[.]50[.]0"
 *
 *
 * Constraints:
 *
 *
 * The given address is a valid IPv4 address.
 *
 */
// @lc code=start
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function defangIPaddr(address) {
    return address.replace(/\./g, '[.]');
}
// @lc code=end
//# sourceMappingURL=defanging-an-ip-address.js.map