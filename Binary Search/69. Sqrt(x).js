/*
Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
*/

function mySqrt(x) {
  let start = 1;
  let end = x;
  let ans = 0;

  if (x === 0) {
    return 0;
  }

  while (start <= end) {
    let guess = Math.floor(start + (end - start) / 2);
    // guess*guess>x hum aise bhi likh skte hai guess>x/guess
    if (guess === x / guess) {
      return guess;
    } else if (guess > x / guess) {
      end = guess - 1;
    } else {
      ans = guess;
      start = guess + 1;
    }
  }
  return ans;
}
let x = 8;
console.log(mySqrt(x));
