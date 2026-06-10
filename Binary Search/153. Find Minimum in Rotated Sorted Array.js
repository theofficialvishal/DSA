/*
Example 1:

Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
Example 2:

Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
Example 3:

Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 

*/

let nums = [3, 4, 5, 1, 2];

function findMin(nums) {
  let start = 0;
  let end = nums.length - 1;
  let ans = -1;

  while (start <= end) {
    let guess = Math.floor(start + (end - start) / 2);

    if (nums[guess] > nums[nums.length - 1]) {
      start = guess + 1;
    } else {
      ans = guess;
      end = guess - 1;
    }
  }
  return nums[ans];
}

console.log(findMin(nums));
