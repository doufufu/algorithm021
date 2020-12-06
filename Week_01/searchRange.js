/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let len = nums.length;
    if(len===0){
        return [-1,-1]
    }
    let begin = 0, finish = len;
    let start = loopStart(begin,finish);
    if(start === -1){
        return [-1,-1]
    }
    let end = loopEnd(begin,finish);
    console.log(start,end);
    return [start,end];

    function loopStart(start, end){
        let mid = start + (end-start)/2;
        while(start<=end){
            if(nums[mid]>target){
                loopStart(start, min-1)
            }else if(nums[mid] === target){
                return mid
            }else{
                loopStart(mid+1, end)
            }
        }
    }

    function loopEnd(start, end){
        let mid = start + (end-start)/2 ;
        while(start<=end){
            if(nums[mid]<target){
                loopEnd(min+1, end)
            }else if(nums[mid] > target){
                loopEnd(start, min-1)
            }else{
                return mid
            }
        }
    }
};
