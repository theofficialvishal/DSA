/*
Input: arr[] = [5, 1, 2, 3, 4]
Output: 1
Explanation: The given array is [5, 1, 2, 3, 4]. The original sorted array is [1, 2, 3, 4, 5]. We can see that the array was rotated 1 times to the right.

Input: arr = [1, 2, 3, 4, 5]
Output: 0
Explanation: The given array is not rotated.
*/

function findKRotation(arr) {
  let start = 0;
  let end = arr.length - 1;
  let ans = 0;
  while (start <= end) {
    let guess = Math.floor(start + (end - start) / 2);
    if (arr[guess] > arr[arr.length - 1]) {
      //left part
      start = guess + 1;
    } else {
      ans = guess;
      end = guess - 1;
    }
  }
  return ans;
}
let arr = [4, 5, 1, 2, 3];
console.log(findKRotation(arr));
