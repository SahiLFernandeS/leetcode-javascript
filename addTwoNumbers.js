"use strict";
`You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
`;

// var l1 = [2, 4, 3];
// var l2 = [5, 6, 4];

// var l1 = [0];
// var l2 = [0];

var l1 = [9, 9, 9, 9, 9, 9, 9];
var l2 = [9, 9, 9, 9];

var numl1 = l1
  .sort((a, b) => -a)
  .toString()
  .replaceAll(",", "");

var numl2 = l2
  .sort((a, b) => -a)
  .toString()
  .replaceAll(",", "");

var addition = `${+numl1 + +numl2}`;
var result = [];
for (let i = addition.length - 1; i >= 0; i--) {
  result.push(+addition[i]);
}

console.log(result);
