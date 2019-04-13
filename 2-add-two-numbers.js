/** 
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * 
 * Example:
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
*/

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * Time complexity : O(max(m,n))
 * Space complexity: O(max(m,n))
*/
var addTwoNumbers = function(l1, l2) {
    
    let output;
    let lastNode;
    let digitsInTens = 0;
    
    while(true){
        if (l1 || l2 || digitsInTens){
            l1 = l1 || new ListNode(0)
            l2 = l2 || new ListNode(0)
            let num = l1.val + l2.val + digitsInTens
            digitsInTens =  num >= 10 ? 1 : 0
            let node = new ListNode(num % 10)
            if (!output) {
                output = lastNode = node;
            }else{
                lastNode.next = node;
                lastNode = node;
            }
            l1 = l1.next
            l2 = l2.next
            continue;
        }
        break;
    }
    return output
    
};