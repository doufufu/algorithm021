/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return n>0 && (n & (n - 1)) ===  0
    // 有且仅有一个二进制位是1.
    // n>0 并且 n&n-1 打掉一位后还是0
};