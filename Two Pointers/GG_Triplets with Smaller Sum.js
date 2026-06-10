/*
Examples :

Input: sum = 2, arr[] = [-2, 0, 1, 3]
Output:  2
Explanation: Triplets with sum less than 2 are (-2, 0, 1) and (-2, 0, 3). 


Input: sum = 12, arr[] = [5, 1, 3, 4, 7]
Output: 4
Explanation: Triplets with sum less than 12 are (1, 3, 4), (5, 1, 3), (1, 3, 7) and (5, 1, 4).
*/

function countTriplets(sum, arr) {
    arr.sort((a, b) => a - b)
    let result = 0
    for (let i = 0; i < arr.length-2; i++) {
        let left = i + 1
        let right = arr.length-1
        
        while (left < right) {
            let cumluativeSum = arr[i] + arr[left] + arr[right]
            if (cumluativeSum < sum) {
                let length = right - left
                result = result + length;
                left++
            } else {
                right--
            }
        }
    }
    return result
}

let sum = 12;
let arr = [5, 1, 3, 4, 7];
console.log(countTriplets(sum, arr));
