/*
Example 1:

Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
Example 2:

Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.
Example 3:

Input: nums = [2,1,-1]
Output: 0
Explanation:
The pivot index is 0.
Left sum = 0 (no elements to the left of index 0)
Right sum = nums[1] + nums[2] = 1 + -1 = 0
*/

function pivotIndex(nums) {
  let sum = 0;
  let left = 0;
  let right = 0;

  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }

  for (let j = 0; j < nums.length; j++) {
    right = sum - left - nums[j];

    if (left === right) {
      return j;
    }
    left = left + nums[j];  
  }
  return -1;
}

let nums = [2, 1, -1];
console.log(pivotIndex(nums));
