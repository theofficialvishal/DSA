/*
Example 1:

Input: arr = [0,1,0]

Output: 1

Example 2:

Input: arr = [0,2,1,0]

Output: 1

Example 3:

Input: arr = [0,10,5,2]

Output: 1
*/

function peak(arr) {
  let start = 0;
  let end = arr.length - 1;
  let ans = -1;

  while (start <= end) {
    let guess = Math.floor(start + (end - start) / 2);

    if (arr[guess] < arr[guess + 1]) {
      start = guess + 1;
    } else {
      ans = guess;
      end = guess - 1;
    }
  }
  return ans;
}

let arr = [0, 2, 4, 5, 3, 1];
console.log(peak(arr));
