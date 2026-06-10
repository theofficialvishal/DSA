/*
Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1
*/

function search(nums, target) {
  let n = nums.length;
  function findKRotation(start, end, nums) {
    let ans;
    while (start <= end) {
      let guess = Math.floor(start + (end - start) / 2);
      if (nums[guess] > nums[nums.length - 1]) {
        start = guess + 1;
      } else {
        ans = guess;
        end = guess - 1;
      }
    }
    return ans;
  }

  let k = findKRotation(0, n - 1, nums);

  function bS(start, end, nums, target) {
    while (start <= end) {
      let guess = Math.floor(start + (end - start) / 2);
      if (nums[guess] === target) {
        return guess;
      } else if (nums[guess] > target) {
        end = guess - 1;
      } else {
        start = guess + 1;
      }
    }
  }

  let rightPart = bS(k, n - 1, nums, target);
  let leftPart = bS(0, k - 1, nums, target);
  if (rightPart === undefined && leftPart === undefined) {
    return -1;
  }
  return rightPart === undefined ? leftPart : rightPart;
}

let nums = [4, 5, 6, 7, 0, 1, 2];
let target = 3;
console.log(search(nums, target));



// Better Version

function search(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let n = nums.length;

  while (start <= end) {
    let guess = Math.floor(start + (end - start) / 2);
    if (nums[guess] === target) {
      return guess;
    }

    if (nums[guess] > nums[n - 1]) {
      //left part mein hai
      if (target >= nums[0] && target < nums[guess]) {
        end = guess - 1;
      } else {
        start = guess + 1;
      }
    } else {
      // less than or equal means right part
      if (target <= nums[n - 1] && target > nums[guess]) {
        start = guess + 1;
      } else {
        end = guess - 1;
      }
    }
  }
  return -1;
}

let nums = [5, 6, 7, 8, 9, 10, 1, 2, 3, 4];
let target = 10;
console.log(search(nums, target));