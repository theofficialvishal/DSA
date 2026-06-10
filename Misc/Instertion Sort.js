function instertionSort(nums) {
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    let currentVal = nums[i];
    let prev = i - 1;

    while (prev >= 0 && nums[prev] > currentVal) {
      nums[prev + 1] = nums[prev];
      prev--;
    }
    nums[prev + 1] = currentVal;
  }
  return nums;
}

let nums = [5, 2, 4, 6, 1, 3];

console.log(instertionSort(nums));
