/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let start = 0, end = s.length-1;
    while(start<end){
        let temp = '';
        temp = s[end];
        s[end] = s[start]
        s[start] = temp
        start++;
        end--;
    }
    return s
};