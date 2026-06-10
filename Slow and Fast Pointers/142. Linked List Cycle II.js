/*
Example 1:

-4 <-> 2
Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.
Example 2:

2 <-> 1
Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.
Example 3:


Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list.
*/


class Node{
    constructor(val) {
        this.val = val
        this.next=null
    }
}

let node1 = new Node(3)
let node2 = new Node(2)
let node3 = new Node(0)
let node4 = new Node(-4)

node1.next=node2
node2.next=node3
node3.next=node4
node4.next=node2

let head = node1


function detectCycle(head) {
    let slow = head
    let fast = head

    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next

        if (slow === fast) {
            slow = head
            while (slow !== fast) {
                slow = slow.next
                fast = fast.next
                return slow
            }
        }
    }
    return -1
}

console.log(detectCycle(head))