let arr = [12, 34, 67, 90];
let k = 2;

function findPages(arr, k) {
  function isVaildPages(arr, k, guess) {
    let studentCount = 1;
    let pages = 0;

    for (let i = 0; i < arr.length; i++) {
      if (pages + arr[i] <= guess) {
        pages = pages + arr[i];
      } else {
        studentCount++;
        if (studentCount > k || arr[i] > pages) {
          return false;
        } else {
          pages = 0;
          pages = pages + arr[i];
        }
      }
    }
    return true;
  }

  let start = 1;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  let end = sum;
  let ans = -1;

  while (start <= end) {
    let guess = Math.floor(start + (end - start) / 2);

    if (isVaildPages(arr, k, guess)) {
      ans = guess;
      end = guess - 1;
    } else {
      start = guess + 1;
    }
  }
  return ans;
}

console.log(findPages(arr, k));
