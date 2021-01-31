/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let lastLength = 0;
    let isFirst = false;
    for(let i = s.length-1; i >= 0; i--){
        if(s[i]===' '){
            if(isFirst){
                return lastLength
            }
        }else{
            isFirst = true;
            ++lastLength;
        }
    }
    return lastLength
};