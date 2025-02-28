var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + nums[i + 1] === target) {
      console.log([i, i + 1]);
    }
  }
};
let nums;
let target;
nums = [3, 2, 3];
target = 6;
twoSum(nums, target);
