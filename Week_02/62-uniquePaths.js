/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let list = [];
    for(let j = 0; j < n; j++){
        list[j] = []
        list[j][0] = 1
    }
    for(let i = 0; i < m; i++){
        list[0][i] = 1
    }
    console.log(list)
    for(let i = 1; i < n; i++){
        for(let j = 1; j < m; j++){
            list[i][j] = list[i-1][j] + list[i][j-1]
        }
    }
    console.log(list)
    return list[n-1][m-1]
};
