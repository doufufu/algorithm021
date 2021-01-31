/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length===0 || !strs || strs[0].length===0) return ''
    for(let i = 0; i < strs[0].length; i++){
        let a = strs[0].charAt(i);
        for(let j = 0; j < strs.length; j++){
            if(i==strs[j].length || a!=strs[j].charAt(i)){
                return strs[0].slice(0,i,)
            }
        }
    }
    return strs[0]
};