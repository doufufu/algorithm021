/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let a = []
    let str = ''
    for(let i = 0; i < s.length; i++){
        if(s[i]===' ' || i===s.length-1){
            if(i===s.length-1 && s[i]!=' '){
                str+=s[i]
            }
            if(str.length){
                a.unshift(str)
            }
            str = ''
        }else{
            str+=s[i]
        }
    }
    console.log(a)
    return a.join(' ')
};