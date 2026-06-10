let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function sumOf2DArr(arr) {
  let result = [];
  let totalRows = arr.length;
  let totalCols = arr[0].length;

  for (let row = 0; row < totalRows; row++) {
    let sum = 0;
    for (let col = 0; col < totalCols; col++) {
      sum = sum + arr[row][col];
    }
    result.push(sum);
  }
  return result;
}

console.log(sumOf2DArr(arr));
