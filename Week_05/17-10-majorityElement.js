/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = new Map()
    for(let i = 0 ; i < nums.length; i++){
        map.set(nums[i], map.get(nums[i])?map.get(nums[i])+1:1 )
    }
    let max = -1;
    map.forEach((i,v)=>{
        console.log(i,v)
        if(i>nums.length/2){
            max= v
        }
    })
    return max
    
};