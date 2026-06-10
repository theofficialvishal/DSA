/*
Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
*/

function maxProduct(nums) {
  let maxEnd = nums[0];
  let minEnd = nums[0];
  let answer = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      [maxEnd, minEnd] = [minEnd, maxEnd];
    }
    maxEnd = Math.max(nums[i], nums[i] * maxEnd);
    minEnd = Math.min(nums[i], nums[i] * minEnd);

    answer = Math.max(answer, maxEnd);
  }
  return answer;
}

let nums = [-2, 0, -1];
console.log(maxProduct(nums));
