/*  PROBLEM: 
Add tWo numbers
You are given two non-empty linked lists representing two non-negative integers.
 The digits are stored in reverse order, and each of their nodes contains a single digit. 
 Add the two numbers and return the sum as a linked list.
 */
var addTwoNumbers = function (l1, l2) {
  const num1 = Number(l1.reverse().join(""));
  const num2 = Number(l2.reverse().join(""));
  const sum = num1 + num2;
  console.log(sum);
  const arr = String(sum).split("");
  return arr.reverse();
};
let l1 = [2, 4, 3];
let l2 = [5, 6, 4];
addTwoNumbers(l1, l2);
