/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let list = [];
    list[0] = 1;
    list[1] = 1;
    for(let i = 2; i <= n; i++){
        list[i] = list[i-2]+list[i-1]
    }
    console.log(list, list[n]);
    return list[n];

};
