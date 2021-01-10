/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0]
    let total = 0;
    for(let i = 0; i < nums.length; i++){
        if(total<0){
            total = nums[i]
        }else{
            total = total + nums[i]
        }
        max = Math.max(max, total)
    }
    return max
};