let nums = [5, 1, 4, 2, 8, 9, 6];

function bubbleSort(nums) {
  //sabse bade number ko end mein dalo
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return nums;
}

console.log(bubbleSort(nums));

function selectionSort(arr) {
  //sabse chote number ko phele lao

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        arr[j] = arr[j] ^ arr[i];
        arr[i] = arr[j] ^ arr[i];
        arr[j] = arr[j] ^ arr[i];
      }
    }
  }
  return arr;
}
console.log(selectionSort(nums));



