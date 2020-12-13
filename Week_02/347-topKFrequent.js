/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let a = new Map();
    for(let i=0; i<nums.length;i++){
        if(a.get(nums[i])!==undefined){
            let has = a.get(nums[i])
            a.set(nums[i], has +1)
        }else{
            a.set(nums[i], 1)
        }
    }
    
    a[Symbol.iterator] = function* () {
        yield* [...this.entries()].sort((a, b) => b[1] - a[1]);
    }
    let list = []
    let i = 0;
    while(k>0){
        list.push([...a][i][0])
        i++
        k--
    }
    return list
    console.log(list)
};
