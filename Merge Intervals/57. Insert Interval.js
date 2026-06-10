/*
Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
*/

function insert(intervals, newInterval) {
  let insertt = true;
  let finalArr = [];
  for (let i = 0; i < intervals.length; i++) {
    let start1 = intervals[i][0];
    if (start1 > newInterval[0] && insertt === true) {
      finalArr.push(newInterval);
      finalArr.push(intervals[i]);
      insertt = false;
    } else {
      finalArr.push(intervals[i]);
    }
  }

  let start1 = finalArr[0][0];
  let end1 = finalArr[0][1];
  let res = [];

  for (let i = 1; i < finalArr.length; i++) {
    let start2 = finalArr[i][0];
    let end2 = finalArr[i][1];

    if (end1 >= start2) {
      start1 = start1;
      end1 = Math.max(end1, end2);
    } else {
      res.push([start1, end1]);
      start1 = start2;
      end1 = end2;
    }
  }
  res.push([start1, end1]);
  return res;
}

let intervals = [
  [1, 2],
  [3, 5],
  [6, 7],
  [8, 10],
  [12, 16],
];

let newInterval = [4, 8];
console.log(insert(intervals, newInterval));
