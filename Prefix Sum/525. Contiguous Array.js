/*
Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

Example 1:

Input: nums = [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
Example 2:

Input: nums = [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
Example 3:

Input: nums = [0,1,1,1,1,1,0,0,0]
Output: 6
Explanation: [1,1,1,0,0,0] is the longest contiguous subarray with equal number of 0 and 1.
*/


function findMaxLength(nums) {
  let map = new Map();
  
  // Base Case: Agar shuruat mein hi sum 0 ho jaye, toh index -1 maanenge
  map.set(0, -1); 
  
  let sum = 0; // Yeh hamara running sum hai (0 ko -1 aur 1 ko +1 treat karega)
  let maxLen = 0;

  for (let i = 0; i < nums.length; i++) {
    // 0 aane par -1 karo, 1 aane par +1 karo
    sum += (nums[i] === 0) ? -1 : 1;

    if (map.has(sum)) {
      let prevIndex = map.get(sum);
      let len = i - prevIndex; // Current index - Purana waala index
      maxLen = Math.max(maxLen, len);
    } else {

      map.set(sum, i);
    }
  }

  return maxLen;
}

let nums = [0, 1, 1, 1, 1, 1, 0, 0, 0];
console.log(findMaxLength(nums)); 
