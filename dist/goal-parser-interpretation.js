"use strict";
/*
 * @lc app=leetcode id=1678 lang=typescript
 *
 * [1678] Goal Parser Interpretation
 *
 * https://leetcode.com/problems/goal-parser-interpretation/description/
 *
 * algorithms
 * Easy (86.54%)
 * Likes:    1239
 * Dislikes: 83
 * Total Accepted:    175.2K
 * Total Submissions: 202.4K
 * Testcase Example:  '"G()(al)"'
 *
 * You own a Goal Parser that can interpret a string command. The command
 * consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal
 * Parser will interpret "G" as the string "G", "()" as the string "o", and
 * "(al)" as the string "al". The interpreted strings are then concatenated in
 * the original order.
 *
 * Given the string command, return the Goal Parser's interpretation of
 * command.
 *
 *
 * Example 1:
 *
 *
 * Input: command = "G()(al)"
 * Output: "Goal"
 * Explanation: The Goal Parser interprets the command as follows:
 * G -> G
 * () -> o
 * (al) -> al
 * The final concatenated result is "Goal".
 *
 *
 * Example 2:
 *
 *
 * Input: command = "G()()()()(al)"
 * Output: "Gooooal"
 *
 *
 * Example 3:
 *
 *
 * Input: command = "(al)G(al)()()G"
 * Output: "alGalooG"
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= command.length <= 100
 * command consists of "G", "()", and/or "(al)" in some order.
 *
 *
 */
// @lc code=start
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function interpret(command) {
    let answer = '';
    for (let i = 0; i < command.length; i++) {
        // Get the i^th character if it is "("
        // Then check if a or )
        // If a then i to i+3 is the command
        // bump the i^th value to i+1 and
        // add al to the answer
        // If ) then i to i+1 is the command
        // bump the i^th value to i+1
        // add o to the answer and
        // If G then that is the command
        // add G to the answer
        // continue
        if (command[i] === '(') {
            if (command[i + 1] === 'a') {
                i += 2;
                answer += 'al';
            }
            else if (command[i + 1] === ')') {
                i += 1;
                answer += 'o';
            }
        }
        else if (command[i] === 'G') {
            answer += 'G';
        }
    }
    return answer;
}
// @lc code=end
//# sourceMappingURL=goal-parser-interpretation.js.map