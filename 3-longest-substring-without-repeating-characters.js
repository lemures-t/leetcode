/**
 * Given a string, find the length of the longest substring without repeating characters.
 * Example 1:

 * Input: "abcabcbb"
 * Output: 3 
 * Explanation: The answer is "abc", with the length of 3. 
 * Example 2:
 * 
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * Example 3:
 * 
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3. 
 * Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */



/**
 * @param {string}
 * @return {number}
 * Sliding window, with Set data structure in javascript
 * Time complexity : O(2n)=O(n). Worst case: both i and j travel from 0 to n
 * Space complexity : O(k) k is the size of Set, determined by s.length and longest substring
 */

var lengthOfLongestSubstring = function(s) {
    let n = s.length;
    let i = 0;
    let j = 0;
    let maxLength = 0;
    // let maxStr = ''
    let strSet = new Set()
    while (i < n && j < n){
      let nextJChar = s.charAt(j++)
      if (strSet.has(nextJChar)){
        strSet.delete(s.charAt(i++))
        j--
      }else{
        strSet.add(nextJChar)
      }
      // if (strSet.size > maxLength) maxStr = [...strSet].join('')
      maxLength = Math.max(maxLength, strSet.size)
    }
    // console.log(maxStr,maxLength)
    return maxLength
};


/**
 * @param {string}
 * @return {number}
 * Sliding window, with map data structure, whose key is the character and value is index
 * Time complexity : O(n)
 * Space complexity : O(k) as previous
 */

var lengthOfLongestSubstring = function(s) {
  let maxLength = 0;
  let strMap = new Map();
  // let maxStr = ''
  for (let i = 0, j = 0; j < s.length; j++) {
    let jChar = s.charAt(j)
    if (strMap.has(jChar)) i = Math.max(i, strMap.get(jChar) + 1)
    // if (maxLength < j - i + 1) maxStr = s.slice(i, j + 1)
    maxLength = Math.max(maxLength, j - i + 1)
    strMap.set(jChar, j)
  }
  // console.log(maxStr, maxLength)
  return maxLength
};