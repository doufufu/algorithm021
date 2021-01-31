/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let a = new Map()
    for(let i = 0; i < jewels.length;i++){
        a.set(jewels[i],1)
    }
    let returnData = 0;
    for(let i = 0; i < stones.length;i++){
        if(a.get(stones[i])){
            returnData++
        }
    }
    return returnData
};