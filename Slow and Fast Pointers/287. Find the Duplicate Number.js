/*
Example 1:

Input: nums = [1,3,4,2,2]
Output: 2
Example 2:

Input: nums = [3,1,3,4,2]
Output: 3
Example 3:

Input: nums = [3,3,3,3,3]
Output: 3
*/

function findDuplicate(nums) {
    let slow = 0
    let fast = 0

    while (true) {
        slow = nums[slow]
        fast = nums[fast]
        fast = nums[fast]

        if (slow === fast) { //mtlb cycle mil gayi
            slow = 0
            while (slow !== fast) { //ab cycle ka entry point niklna hai
                slow = nums[slow]
                fast = nums[fast]
            }
            return slow
        }
    }
}

let nums = [1, 3, 4, 2, 2];
console.log(findDuplicate(nums))