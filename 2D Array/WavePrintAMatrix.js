let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let m = 3;
let n = 3;

//output 1 4 7 8 5 2 3 6 9

function waveOPrintMatrix(arr, m, n) {
  let result = [];
  for (let col = 0; col < m; col++) {
    if (col%2===1) {
      for (let row = n - 1; row >= 0; row--) {
        result.push(arr[row][col]);
      }
    } else {
      for (let row = 0; row < n; row++) {
        result.push(arr[row][col]);
      }
    }
  }
  return result;
}

console.log(waveOPrintMatrix(arr, m, n));

