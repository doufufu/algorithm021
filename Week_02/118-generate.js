/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows===0) return []
    if(numRows===1) return [[1]]
    let list = [];
    list[0] = [1];
    list[1] = [1,1]
    for(let i = 2; i < numRows; i++){
        list[i] = []
        list[i][0] = 1;
        list[i][i] = 1;
        for(let j = 1; j < i; j++){
            list[i][j] = list[i-1][j]+list[i-1][j-1]
        }
    }
    return list
};
