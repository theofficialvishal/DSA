/*
Examples:
Input: arr[] = [100, 200, 300, 400], k = 2
Output: 700


Explanation: arr2 + arr3 = 700, which is maximum.
Input: arr[] = [1, 4, 2, 10, 23, 3, 1, 0, 20], k = 4
Output: 39


Explanation: arr1 + arr2 + arr3 + arr4 = 39, which is maximum.
Input: arr[] = [100, 200, 300, 400], k = 1
Output: 400
Explanation: arr3 = 400, which is maximum.
*/

function maxSubarraySum(arr, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum = sum + arr[i];
  }
  let maxSum = sum;
  let left = 0;
  for (let right = k; right < arr.length; right++) {
    sum = sum - arr[left];
    sum = sum + arr[right];
    left++;
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
}
let arr = [100, 200, 300, 400];
let k = 2;

console.log(maxSubarraySum(arr, k));
