/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort();
    let returnData = [];
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            for(let k = j+1; k < nums.length; k++){
                if((nums[i]+nums[j]+nums[k])===0){
                    returnData.push( nums[i]+':' +nums[j]+':'+ nums[k]);
                }
            }
        }
    }
    var finalreturn = [];
    for(let i = 0; i < returnData.length; i++){
        if(JSON.stringify(finalreturn).indexOf(returnData[i])===-1){
            finalreturn.push(returnData[i])
        }
    }
    for(let i = 0 ;i<finalreturn.length;i++){
       finalreturn[i] = finalreturn[i].split(':')
    }
    return finalreturn;
};
