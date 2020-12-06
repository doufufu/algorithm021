/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0)return false
    let a = x%10;
    let b= Math.floor(x/10);
    let len = x.toString().length-1;
    while(len>0){
        a = a*10 + (b%10);
        b= Math.floor(b/10);
        len--;
    }
    if(a===x){
        return true
    }
    return false
};
