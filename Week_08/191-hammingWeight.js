/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    // let count = 0;
    // while(n!=0){
    //     count++;
    //     n = n & (n-1)
    //     console.log(n)
    // }
    // return count

    // 方法二
    // let count = 0;
    // let mask = 1;
    // for(let i =0; i < 32; i++){
    //     if((n & mask) != 0){
    //         count++
    //     }
    //     mask <<= 1
    // }
    // return count;

    // 方法三： 
    return n.toString(2).replace(/0/g, '').length 
};