/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let returnDate = -1;
    let a = new Map()
    for(let i = 0; i < s.length; i++){
        if(a.get(s[i])){
            a.set(s[i],a.get(s[i])+1)
        }else{
            a.set(s[i],1)
        }
    }
    console.log(a)
    for(let i = s.length-1; i >= 0; i--){
        if(a.get(s[i])===1){
            returnDate = i
        }
    }
    return returnDate
};