/*
Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1
Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
*/

function minSubArrayLen(nums, target) {
  let left = 0;
  let sum = 0;
  let minLen = Infinity;
  for (let right = 0; right < nums.length; right++) {
    sum = sum + nums[right];
    while (sum > target) {
      sum = sum - nums[left];
      left++;
    }
    if (sum === target) {
      let len = right - left + 1;
      minLen = Math.min(minLen, len);
    }
  }
  return minLen === Infinity ? 0 : minLen;
}
let nums = [2, 3, 1, 2, 4, 3];
let target = 7;
console.log(minSubArrayLen(nums, target));
