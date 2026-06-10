/*
Example 1:

Input: 
arr[] = {3,-4, 2,-3,-1, 7,-5}
Output: -6
Explanation: sub-array which has smallest 
sum among all the sub-array is {-4,2,-3,-1} = -6
Example 2:

Input:
arr[] = {2, 6, 8, 1, 4}
Output: 1
Explanation: sub-array which has smallest
sum among all the sub-array is {1} = 1
*/

function minSub(arr) {
  let bestEnding = arr[0];
  let answer = arr[0];

  for (let i = 1; i < arr.length; i++) {
    bestEnding = Math.min(arr[i], arr[i] + bestEnding);
    answer = Math.min(bestEnding, answer);
  }
  return answer;
}
let arr = [3, -4, 2, -3, -1, 7, -5];
console.log(minSub(arr));
