let nums = [
  [1, 2, 3],
  [4, 5, 6],
  [7,8,9]
];

function transpose(nums) {
  let result = [];
  let totalCols = nums[0].length;
  let totalRows = nums.length;

  for (let col = 0; col < totalCols; col++) {
    result[col] = [];
    for (let row = 0; row < totalRows; row++) {
      result[col][row] = nums[row][col];
    }
  }
  return result;
}

console.log(transpose(nums));
