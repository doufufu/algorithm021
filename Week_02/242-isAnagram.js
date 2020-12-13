/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var a = new Map();
    var b = new Map();
    let length = Math.max(s.length, t.length);
    for(let i = 0; i < length; i++){
        let a1 = 0, b1 = 0;
        if(a.get(s[i])){
            a1 = a.get(s[i]) 
        }
        if(b.get(t[i])){
            b1 = b.get(t[i]) 
        }
        a.set(s[i], a1+1);
        b.set(t[i], b1+1);
    }
    console.log([...a].sort().join(''), a)
    console.log([...b].sort().join(''), b)
    if([...a].sort().join('') === [...b].sort().join('')){
        return true
    }
    return false
};
