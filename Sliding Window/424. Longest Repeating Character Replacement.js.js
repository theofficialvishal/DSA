/*
Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.
*/

function characterReplacement(s, k) {
  let left = 0;
  let maxLen = 0;
  let map = new Map();
  let maxRepeatCount = 0; // Window mein jo character sabse zyada baar aaya hai uski frequency

  for (let right = 0; right < s.length; right++) {
    map.set(s[right], (map.get(s[right]) || 0) + 1);
    //Track karo ki pure map mein sabse badi frequency kaun si hai
    maxRepeatCount = Math.max(maxRepeatCount, map.get(s[right]));
    let windowLen = right - left + 1;
    while (windowLen - maxRepeatCount > k) {
      map.set(s[left], map.get(s[left]) - 1);
      windowLen = right - left + 1;
      left++;
    }
    let len = right - left + 1;
    maxLen = Math.max(maxLen, len);
  }

  return maxLen;
}

let s = "AABABBA";
let k = 1;
console.log(characterReplacement(s, k)); // Output: 4
