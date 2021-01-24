/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if(nums.length==0) return 0
    let count = 1;
    let returnData = 1;
    for(let i = 0; i < nums.length; i++){
        console.log(nums[i],nums[i+1])
        if(nums[i]<nums[i+1]){
            returnData = Math.max(returnData, ++count)
        }else{
            count = 1
        }
    }
    return returnData 
};