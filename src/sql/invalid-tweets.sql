--
-- @lc app=leetcode id=1683 lang=mysql
--
-- [1683] Invalid Tweets
--
-- https://leetcode.com/problems/invalid-tweets/description/
--
-- database
-- Easy (90.63%)
-- Likes:    84
-- Dislikes: 90
-- Total Accepted:    23.4K
-- Total Submissions: 25.9K
-- Testcase Example:  '{"headers":{"Tweets":["tweet_id","content"]},"rows":
-- {"Tweets":[[1,"Vote for Biden"],[2,"Let us make America great again!"]]}}'
--
-- Table: Tweets
--
--
-- +----------------+---------+
-- | Column Name    | Type    |
-- +----------------+---------+
-- | tweet_id       | int     |
-- | content        | varchar |
-- +----------------+---------+
-- tweet_id is the primary key for this table.
-- This table contains all the tweets in a social media app.
--
--
--
--
-- Write an SQL query to find the IDs of the invalid tweets. The tweet is
-- invalid if the number of characters used in the content of the tweet is
-- strictly greater than 15.
--
-- Return the result table in any order.
--
-- The query result format is in the following example.
--
--
-- Example 1:
--
--
-- Input:
-- Tweets table:
-- +----------+----------------------------------+
-- | tweet_id | content                          |
-- +----------+----------------------------------+
-- | 1        | Vote for Biden                   |
-- | 2        | Let us make America great again! |
-- +----------+----------------------------------+
-- Output:
-- +----------+
-- | tweet_id |
-- +----------+
-- | 2        |
-- +----------+
-- Explanation:
-- Tweet 1 has length = 14. It is a valid tweet.
-- Tweet 2 has length = 32. It is an invalid tweet.
--
--
--

-- @lc code=start
# write your mysql query statement below
SELECT tweet_id
FROM tweets
WHERE CHAR_LENGTH(content) > 15
-- @lc code=end
