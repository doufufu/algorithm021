/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let returnData = []
    let min = -1, max = -1;
    for(let i = 0; i < nums.length; i++){
        if(min===-1){
            min = nums[i]
        }
        if(nums[i+1]-nums[i]===1){
            continue;
        }else{
            max = nums[i]
            if(min===max){
                returnData.push(String(min))
            }else{
                returnData.push(min+'->'+max)
            }
            min = -1;
            max = -1;
        }
    }
    console.log(returnData)
    return returnData
};