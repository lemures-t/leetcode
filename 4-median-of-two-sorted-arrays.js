/**
 * 
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 * You may assume nums1 and nums2 cannot be both empty.
 * 
 * Example 1:
 * nums1 = [1, 3]
 * nums2 = [2]
 * The median is 2.0
 * 
 * Example 2:
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * The median is (2 + 3)/2 = 2.5
 * 
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 
 * Half Brute Force
 * 遍历 nums1 和 nums2 数组，选取前 k 个数，直到 k 为 (nums1.length + nums2.length) >> 1 + 1
 * Time Complexity O(m+n)
 * Space Complexity O(1)
 */
let n = nums1.length;
let m = nums2.length;
let i = 0; // nums1 中选取的个数
let j = 0; // nums2 中选取的个数
while (i <= n || j <= m){
  if (i + j  === (n + m >> 1) + 1){
    let r = Math.max(
      typeof nums1[i-1] !== 'undefined' ? nums1[i-1] : -Infinity,
      typeof nums2[j-1] !== 'undefined' ? nums2[j-1] : -Infinity,
    )
    // 判断两个数组个数之和的奇偶性
    if ((n + m) %2){      
      return r 
    }else{
      let l = Math.min(
        Math.max(
          typeof nums1[i-1] !== 'undefined' ? nums1[i-1] : -Infinity,
          typeof nums2[j-2] !== 'undefined' ? nums2[j-2] : -Infinity,
        ),
        Math.max(
          typeof nums1[i-2] !== 'undefined' ? nums1[i-2] : -Infinity,
          typeof nums2[j-1] !== 'undefined' ? nums2[j-1] : -Infinity,
        )
      )
      return (l + r) / 2
    }
  };
  let a = nums1[i]
  let b = nums2[j]
  // a 比 b 小，a 中的元素选取一个
  // 也考虑 j 越界的情况，如 nums2 是空数组，j == 0 的情况
  if (a < b || typeof b === 'undefined') { 
    i++
  }else if ( a >= b || typeof a === 'undefined'){
    j++
  }
}

var d = findMedianSortedArrays([-1,2,3,4,5,6,7,8],[2,10,11]);