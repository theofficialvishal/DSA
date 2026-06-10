/*
Example 1:

Input: arr = [1,-2,0,3]
Output: 4
Explanation: Because we can choose [1, -2, 0, 3] and drop -2, thus the subarray [1, 0, 3] becomes the maximum value.
Example 2:

Input: arr = [1,-2,-2,3]
Output: 3
Explanation: We just choose [3] and it's the maximum sum.
Example 3:

Input: arr = [-1,-1,-1,-1]
Output: -1
Explanation: The final subarray needs to be non-empty. You can't choose [-1] and delete -1 from it, then get an empty subarray to make the sum equals to 0
*/

function oneDel(arr) {
  let noPower = arr[0];
  let power = arr[0];
  let ans = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let v1 = arr[i];
    let v2 = arr[i] + noPower;

    let v3 = arr[i] + power;
    let v4 = noPower;

    noPower = Math.max(v1, v2);
    power = Math.max(v3, v4);

    ans = Math.max(ans, noPower, power);
  }
  return ans;
}

let arr = [1, -2, 0, 3];
console.log(oneDel(arr));
