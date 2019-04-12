/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * Example:
 *
 * Given nums = [2, 7, 11, 15], target = 9,
 *
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
*/



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 * Two-pass for loop
 * Time complexity : O(n^2)
 * Space complexity: O(1)
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++){
        let n = nums[i];
        let m = target - n;
        for (let j = 0; j < nums.length; j++){
            if (j == i) continue;
            if (nums[j] === m) return [i,j]
        }
    }
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 * One-pass hash table, or map in javascript
 * Time complexity : O(n)
 * Space complexity: O(n)
 */
var twoSum = function(nums, target) {
    let map = {}
    for (let i = 0; i < nums.length; i++){
        let n = nums[i];
        let m = target - n;
        
        if (map[m] >=0) return [i, map[m]]
        map[n] = i
    }
};
