/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if(nums.length<3)return[]
    function sortBy(a,b){
        return a-b
    }
    nums.sort(sortBy)
    console.log(nums);
    let returnData = [];

    for(let i = 0; i < nums.length; i++){
        let L = i+1, R = nums.length-1;
        if(nums[i]>0) return returnData;   
        // 去重 
        if(i>0 && nums[i]===nums[i-1]) continue;
        while(L<R){
            let total = nums[i]+nums[L]+nums[R];
            if(total===0){
                returnData.push( [nums[i], nums[L], nums[R] ] );
                while(L<R && nums[L]===nums[L+1])
                    L++
                while(L<R && nums[R]===nums[R-1])
                    R--
                L++;
                R--;
            }
            if(total>0){
                R--
            }
            if(total<0){
                L++
            }
        }
    }
    return returnData
};
