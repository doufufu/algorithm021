/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = [];
    for(let i = 0; i < nums.length; i++){
        let a = result.indexOf(nums[i])
        if(a === -1){
            result.push(nums[i])
        }else{
            result.splice(a,1,)
        }
    }
    return result[0]
};