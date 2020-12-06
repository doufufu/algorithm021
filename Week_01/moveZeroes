/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if(nums.indexOf(0)>-1){
        let current = 0;
        for(let i = 0; i < nums.length; i++){
            if(nums[i]!==0){
                nums[current]=nums[i];
                current++;
            }
        }
        for(let i = current; i < nums.length;i++){
            nums[i] = 0
        }
    }
    
    return nums
};
