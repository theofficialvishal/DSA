/*
Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
*/

function maxSub(nums) {
  let bestEnding = nums[0];
  let answer = nums[0];

  for (let i = 1; i < nums.length; i++) {
    bestEnding = Math.max(nums[i], nums[i] + bestEnding);
    answer = Math.max(answer, bestEnding);
  }
  return answer;
}

let nums = [5, 4, -1, 7, 8];
console.log(maxSub(nums));
