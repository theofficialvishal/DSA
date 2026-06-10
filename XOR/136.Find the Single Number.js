/*
Example 1:

Input: nums = [2,2,1]

Output: 1

Example 2:

Input: nums = [4,1,2,1,2]

Output: 4

Example 3:

Input: nums = [1]

Output: 1
*/

function singleNumber(nums) {
  let result = 0;

  for (const num of nums) {
    result = result ^ num;
  }
  return result;
}

let nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums));


/*
Piche kya hua?
Kyunki order se farq nahi padta, equation piche aisi ban gayi:
4 ^ (1 ^ 1) ^ (2 ^ 2)
4 ^ 0 ^ 0 = 4
Saare duplicates ne ek dusre ko kaat kar khatam (0) kar diya, aur jo akele tha (4), woh bach gaya!
*/