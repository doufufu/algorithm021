/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const len = nums.length;
    for(let i = 0; i < len; i++ ){
        if(nums[i+1]!==nums[i]){
            nums.push(nums[i])
        }
    }
    nums.splice(0, len, );
};
