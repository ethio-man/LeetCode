/*greatest absolute sum of sub arrays of an array*/
let sum = 0;
let newSum = 0;
var maxAbsoluteSum = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      newSum = Math.abs(nums.slice(i, j).reduce((acc, num) => acc + num, 0));
      if (sum < newSum) {
        sum = newSum;
      }
    }
  }
  console.log(sum);
};
maxAbsoluteSum([2, -5, 1, -4, 3, -2]);
