/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let a = 0, b = 1, total = 1;
    for(let i = 1; i < n; i++){
        a=b;
        b=total;
        total = a+b
    }
    return total
};