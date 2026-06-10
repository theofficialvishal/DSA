/*
Example 1:

Input: nums = [1,-3,2,3,-4]
Output: 5
Explanation: The subarray [2,3] has absolute sum = abs(2+3) = abs(5) = 5.
Example 2:

Input: nums = [2,-5,1,-4,3,-2]
Output: 8
Explanation: The subarray [-5,1,-4] has absolute sum = abs(-5+1-4) = abs(-8) = 8.

*/

function maxAbsoluteSum(nums) {
  let maxEnd = nums[0];
  let maxSum = nums[0];
  let minEnd = nums[0];
  let minSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxEnd = Math.max(nums[i], nums[i] + maxEnd);
    maxSum = Math.max(maxSum, maxEnd);
    minEnd = Math.min(nums[i], nums[i] + minEnd);
    minSum = Math.min(minSum, minEnd);
  }
  return Math.max(Math.abs(maxSum), Math.abs(minSum));
}

let nums = [2, -5, 1, -4, 3, -2];
console.log(maxAbsoluteSum(nums));
