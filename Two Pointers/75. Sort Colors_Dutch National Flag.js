/*
Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]
*/

function sortColors(nums) {
  let left = 0;
  let mid = 0;
  let right = nums.length - 1;

  while (mid <= right) {
    if (nums[mid] === 0) {
      [nums[left], nums[mid]] = [nums[mid], nums[left]];
      left++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else if (nums[mid] === 2) {
      [nums[right], nums[mid]] = [nums[mid], nums[right]];
      right--;
    }
    }
    return nums
}

let nums = [2, 0, 2, 1, 1, 0];
console.log(sortColors(nums));
