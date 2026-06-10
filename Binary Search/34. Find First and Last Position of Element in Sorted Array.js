/*
Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
*/

function searchRange(nums, target) {
  let n = nums.length;

  function upperBound(start, end, nums, target) {
    let ans = nums.length;
    while (start <= end) {
      let guess = Math.floor(start + (end - start) / 2);
      if (nums[guess] > target) {
        ans = guess;
        end = guess - 1;
      } else {
        start = guess + 1;
      }
    }
    return ans;
  }
  function lowerBound(start, end, nums, target) {
    let ans = nums.length;
    while (start <= end) {
      let guess = Math.floor(start + (end - start) / 2);
      if (nums[guess] >= target) {
        ans = guess;
        end = guess - 1;
      } else {
        start = guess + 1;
      }
    }
    return ans;
  }

  let upperBoundVal = upperBound(0, n - 1, nums, target);
  let lowerBoundVal = lowerBound(0, n - 1, nums, target);

  if (lowerBoundVal === n || nums[lowerBoundVal] !== target) {
    return [-1, -1];
  }
  // agar target 20 hai toh humhe lowerBound return karega hume array ka n===n aur agar
  // agar target hai 4 toh humhe lowerBound return karega 0 hum 0===6 false || nums[0]=>(5)!==(4)

  return [lowerBoundVal, upperBoundVal - 1];
}

let nums = [5, 7, 7, 8, 8, 10];
let target = 4;
console.log(searchRange(nums, target));
