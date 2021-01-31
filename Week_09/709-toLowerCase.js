/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    let s = ''
    for(let i = 0; i < str.length; i++){
        let a = str[i].charCodeAt()
        if(a>=65 && a<=90){
            s += String.fromCharCode(a+32)
        }else{
            s += str[i]
        }
    }
    return s

    /* 解法二 正则匹配替换 */
    // return str.replace(/[A-Z]/g, c => String.fromCharCode(c.charCodeAt() + 32))
};