/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let result = []
    let isUsed = new Array(nums.length).fill(0)
    nums.sort((x, y) => x - y);

    loop(0, [])
    function loop(level, data){
        if(level===nums.length) {
            result.push(data.slice())
            return
        }
        for(let i = 0; i < nums.length; i++){
            // 不是第一个 且 且上一个被用过而且本次和上次的值相同
            if(i>0 && nums[i]== nums[i-1] && !isUsed[i-1]) continue
            //  已经被用过
            if(isUsed[i]) continue;

            // 栈里塞进去一个
            data.push(nums[i]);
            // 设置为用过
            isUsed[i] = 1;
            // 进行下一层循环，并且把更新后的data带过去
            loop(level+1, data)
            // 然后回溯，设置为没用过
            isUsed[i] = 0;
            // 并且把data最后一个扔出来
            data.pop()
        }
    }
    console.log(result)
    return result
};

