function findMissingNums(nums) {
  //marking
  for (let i = 0; i < nums.length; i++) {
    let value = Math.abs(nums[i]);
    let position = value - 1;
    if (nums[position] > 0) {
      nums[position] = -nums[position];
    }
  }
  let result = [];
  //traverse and find postive nums
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }
  return result;
}

let nums = [3, 2, 3, 4, 5];
console.log(findMissingNums(nums));


function findMissingNums2(nums2) {
  let n = nums2.length;
  let zeroArr = new Array(n+1).fill(0);
  let result = [];
  for (const num of nums2) {
    zeroArr[num] = 1;
  }

  for (let i = 1; i <= n; i++) {
    if (zeroArr[i] === 0) {
      result.push(i);
    }
  }
  return result;
}

let nums2 = [3, 2, 3, 4, 5, 5];
console.log(findMissingNums2(nums2));


