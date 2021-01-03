/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while(stones.length>=2){
        stones = stones.sort((a,b)=>a-b)
        let data = stones.pop() - stones.pop()
        if(data){
            stones.push(data)   
        }
    }
    return stones.length?stones[0]:0
};