/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let returnData = [];
    dfs(0, [])
    function dfs(index,list){
        if(index === nums.length){
            returnData.push(list.slice())
            return
        }
        list.push(nums[index])
        dfs(index+1, list)
        list.pop()
        dfs(index+1, list)
    }
    return returnData
    console.log(returnData)
};