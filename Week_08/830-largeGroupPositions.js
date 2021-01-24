/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    let returnData = [];
    let max = 1, start = 0, end = 0;
    for(let i = 0; i < s.length-1; i++){
        if(s[i] === s[i+1]){
            max++
            if((i==s.length-2) && max>=3){
                end = i+1;
                returnData.push([start,end])
            }
        }else{
            console.log(max,i, s[i])
            if(max>=3){
                end = i;
                returnData.push([start,end])
                console.log(returnData)
            }
            start = i+1, end = i+1
            max = 1
        }
    }
    return returnData
};