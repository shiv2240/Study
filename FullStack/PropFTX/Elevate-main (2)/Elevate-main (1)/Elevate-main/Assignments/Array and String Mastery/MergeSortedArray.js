/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let first = nums1.slice(0,m)
    let new1 = [...first, ...nums2]
    new1.sort((a,b)=>a-b)
    for(let i=0; i<new1.length;i++){
        nums1[i]=new1[i]
    }
};