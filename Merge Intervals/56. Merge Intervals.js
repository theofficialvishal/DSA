/*
Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
Example 3:

Input: intervals = [[4,7],[1,4]]
Output: [[1,7]]
Explanation: Intervals [1,4] and [4,7] are considered overlapping.
*/

function merge(intervals) {
  let start1 = intervals[0][0];
  let end1 = intervals[0][1];
  let res = [];

  for (let i = 1; i < intervals.length; i++) {
    let start2 = intervals[i][0];
    let end2 = intervals[i][1];

    if (end1 >= start2) {
      start1 = start1;
      end1 = Math.max(end1, end2);
    } else {
      start1 = start2;
      end1 = end2;
    }
    res.push([start1, end1]);
  }
  return res;
}

let intervals = [
  [1, 4],
  [4, 5],
];
console.log(merge(intervals));
