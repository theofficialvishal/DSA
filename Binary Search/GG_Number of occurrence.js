function upperBound(arr, target) {
  let start1 = 0;
  let end1 = arr.length - 1;
  let lowerBound = arr.length;
  let upperBound = arr.length;

  while (start1 <= end1) {
    let mid1 = Math.floor(start1 + (end1 - start1) / 2);
    if (arr[mid1] >= target) {
      lowerBound = mid1;
      end1 = mid1 - 1;
    } else {
      start1 = mid1 + 1;
    }
  }

  let start2 = 0;
  let end2 = arr.length - 1;
  while (start2 <= end2) {
    let mid2 = Math.floor(start2 + (end2 - start2) / 2);
    if (arr[mid2] > target) {
      upperBound = mid2;
      end2 = mid2 - 1;
    } else {
      start2 = mid2 + 1;
    }
  }

  let ans = upperBound - lowerBound;
  return ans;
}

let arr = [8, 9, 10, 12, 12, 12, 12];
let target = 12;

console.log(upperBound(arr, target));
