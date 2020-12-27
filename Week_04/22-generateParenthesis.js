/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = []
    loop(0, 0, n, '')
    function loop(left, right, n, data){
        if(right===n){
            result.push(data)
            return
        }
        if(left < n){
            loop(left+1, right, n, data+'(')
        }
        if(left>right){
            loop(left, right+1, n, data+')')
        }
    }
    console.log(result)
    return result
};