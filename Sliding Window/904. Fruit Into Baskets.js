/*
Example 1:

Input: fruits = [1,2,1]
Output: 3
Explanation: We can pick from all 3 trees.
Example 2:

Input: fruits = [0,1,2,2]
Output: 3
Explanation: We can pick from trees [1,2,2].
If we had started at the first tree, we would only pick from trees [0,1].
Example 3:

Input: fruits = [1,2,3,2,2]
Output: 4
Explanation: We can pick from trees [2,3,2,2].
If we had started at the first tree, we would only pick from trees [1,2].
*/

function totalFruits(fruits) {
  let left = 0;
  let map = new Map();
  let k = 2;
  let maxFruits = 0;

  for (let right = 0; right < fruits.length; right++) {
    let fruit = fruits[right];
    map.set(fruit, (map.get(fruit) || 0) + 1);
    while (map.size > k) {
      map.set(fruits[left], map.get(fruits[left]) - 1);
      if (map.get(fruits[left]) === 0) {
        map.delete(fruits[left]);
      }
      left++;
    }
    if (map.size === k) {
      let len = right - left + 1;
      maxFruits = Math.max(maxFruits, len);
    }
  }
  return maxFruits;
}
let fruits = [1, 2, 1];
console.log(totalFruits(fruits));
