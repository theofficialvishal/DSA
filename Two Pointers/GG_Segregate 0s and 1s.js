/*
Input: arr[] = [0, 1, 0, 1, 0, 0, 1, 1, 1, 0]
Output: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]
Explanation:  After segregation, all the 0's are on the left and 1's are on the right. Modified array will be [0, 0, 0, 0, 0, 1, 1, 1, 1, 1].

Input: arr[] = [1, 1]
Output: [1, 1]
Explanation: There are no 0s in the given array, so the modified array is [1, 1]
*/

function segregate0and1(arr) {
    let left = 0
    let right = arr.length - 1
    
    while (left < right) {
        if (arr[left] === 1) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            right--
        } else {
            left++
        }
    }
    return arr
}

let arr= [0, 1, 0, 1, 0, 0, 1, 1, 1, 0]

console.log(segregate0and1(arr));