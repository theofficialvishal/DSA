let nums = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function colSum(nums) {
  let totalRows = nums.length;
  let totalCols = nums[0].length;
  let result = [];

  for (let col = 0; col < totalCols; col++) {
    let sum = 0;
    for (let row = 0; row < totalRows; row++) {
      sum = sum + nums[row][col];
    }
    result.push(sum);
  }
  return result;
}

console.log(colSum(nums));
