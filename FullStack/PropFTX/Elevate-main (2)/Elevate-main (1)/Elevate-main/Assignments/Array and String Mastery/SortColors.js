/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let i=0
    let mid=0
    let j= nums.length-1
    while (mid<=j){
        if(nums[mid]===0){
            [nums[i], nums[mid]]=[nums[mid],nums[i]]
            i++
            mid++
        }else if (nums[mid]===1){
            mid++
        }else{
            [nums[mid], nums[j]]=[nums[j],nums[mid]]
            j--
        }
    }
};