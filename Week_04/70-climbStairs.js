/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let a1 = 0, a2 = 0, total = 1;
    for (let i = 1; i <= n; ++i) {
        a1 = a2;
        a2 = total;
        total = a1 + a2;
    }
    return total;
};