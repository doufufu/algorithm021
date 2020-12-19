/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let list = t.split('')
    let a = new Map();
    for(let i = 0; i < t.length;i++){
        let count = 0
        if(a.get(t[i])){
            count = a.get(t[i])
        }
        a.set(t[i], count +1)
    }
    for(let i = 0; i < s.length;i++){
        let count = 0
        if(a.get(s[i])){
            count = a.get(s[i])
            if(count===1){
                a.delete(s[i])
            }
            a.set(s[i], count -1)
        }
        
    }
    let returnData = '';
    a.forEach( (element, index, array)=> {
        if(element==1){
            returnData = index
        }
    });
    return returnData
};
