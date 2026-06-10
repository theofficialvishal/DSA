/*
Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
*/

function sortedSquares(nums) {
  let postiveArr = [];
  let negativeArr = [];
  let result = [];

  for (const num of nums) {
    if (num < 0) {
      negativeArr.push(num * num);
    } else {
      postiveArr.push(num * num);
    }
  }
  if (postiveArr.length === 0) {
    return negativeArr.reverse();
  } else if (negativeArr.length === 0) {
    return postiveArr;
  }

  let left = 0;
  let right = 0;
  negativeArr.reverse();
  while (left < postiveArr.length && right < negativeArr.length) {
    if (postiveArr[left] < negativeArr[right]) {
      result.push(postiveArr[left]);
      left++;
    } else {
      result.push(negativeArr[right]);
      right++;
    }
  }

  while (left < postiveArr.length) {
    result.push(postiveArr[left]);
    left++;
  }
  while (right < negativeArr.length) {
    result.push(negativeArr[right]);
    right++;
  }
  return result;
}
let nums = [-7, -3, 2, 3, 11];
console.log(sortedSquares(nums));
