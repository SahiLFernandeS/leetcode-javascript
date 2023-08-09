"use strict";
`
Given a string s, find the length of the longest 
substring
without repeating characters.
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
`;

// var s = "abcabcbb";
// var s = "bbbbb";
var s = "pwwkew";
var longestSubstring = 0;
var substring = new Map();
var lengthOfLongestSubstring = function (s) {
  for (let i = 0, j = 0; j < s.length; j++) {
    if (substring.has(s[j])) {
      i = Math.max(i, substring.get(s[j]) + 1);
    }
    substring.set(s[j], j);
    longestSubstring = Math.max(longestSubstring, j - i + 1);
  }
  return longestSubstring;
};

var test = lengthOfLongestSubstring(s);
console.log(test);
