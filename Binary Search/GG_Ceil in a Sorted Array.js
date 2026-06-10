/*
Input: arr[] = [1, 2, 8, 10, 11, 12, 19], x = 5
Output: 2
Explanation: Smallest number greater than 5 is 8, whose index is 2.

Input: arr[] = [1, 2, 8, 10, 11, 12, 19], x = 20
Output: -1
Explanation: No element greater than 20 is found. So output is -1.

Input: arr[] = [1, 1, 2, 8, 10, 11, 12, 19], x = 0
Output: 0
Explanation: Smallest number greater than 0 is 1, whose indices are 0 and 1. The index of the first occurrence is 0.
*/

let arr = [1,1,4,4,4,4,10];
let x = 4;

function findCeil(arr, x) {
  let start = 0;
  let end = arr.length - 1;
  let ans = -1;

  while (start <= end) {
    let guess = Math.floor(start + (end - start) / 2);
    if (arr[guess] >= x) {
        ans = guess;
        end = guess - 1;
    } else {
      start = guess + 1;
    }
    }
    return ans
}

console.log(findCeil(arr, x));
