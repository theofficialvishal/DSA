/*
Input: s = "aabacbebebe", k = 3
Output: 7
Explanation: The longest substring with exactly 3 distinct characters is "cbebebe", which includes 'c', 'b', and 'e'.

Input: s = "aaaa", k = 2
Output: -1
Explanation: There's no substring with 2 distinct characters.

Input: s = "aabaaab", k = 2
Output: 7
Explanation: The entire string "aabaaab" has exactly 2 unique characters 'a' and 'b', making it the longest valid substring.
*/

function longestKSubstr(s, k) {
  let left = 0;
  let maxLen = -1;
  let map = new Map();

  for (let right = 0; right < s.length; right++) {
    let char = s[right];
    map.set(char, (map.get(char) || 0) + 1);
    while (map.size > k) {
      map.set(s[left], map.get(s[left]) - 1);
      if (map.get(s[left]) === 0) {
        map.delete(s[left]);
      }
      left++;
    }
    if (map.size === k) {
      let len = right - left + 1;
      maxLen = Math.max(len, maxLen);
    }
  }
  return maxLen;
}

let s = "aabaaab";
let k = 2;
console.log(longestKSubstr(s, k));
