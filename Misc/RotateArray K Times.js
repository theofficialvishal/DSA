function rotate(nums, k) {
  let n = nums.length;
  k = k % n;
  function reverse(nums, start, end) {
    while (start < end) {
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  }

  reverse(nums, 0, n - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, n - 1);
  return nums;
}

let nums = [1, 2, 3, 4, 5];
let k = 3;

console.log(rotate(nums, k));
