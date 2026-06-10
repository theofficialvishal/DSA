/*
Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
Example 2:

Input: nums = [0,0,0], target = 1
Output: 0
Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

*/

function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);
  
  let closetSum = nums[0] + nums[1] + nums[2]
  
  for (let i = 0; i < nums.length-2; i++) {
    let left = i + 1
    let right = nums.length - 1
    
    while (left < right) {
      let currentSum = nums[i] + nums[left] + nums[right];

      if (Math.abs(currentSum - target) < Math.abs(closetSum - target)) {
        closetSum=currentSum
      }
      
      if (closetSum === target) {
        return closetSum
      } else if (closetSum > target) {
        right--
      } else {
        left++
      }
    }
  }
  return closetSum
}

let nums = [-1, 2, 1, -4];
let target = 1
console.log(threeSumClosest(nums,target))

