/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let list = [1]
    let a=0,b=0,c=0;
    for(let i = 1; i < n; i++){
        let a1=list[a]*2,a2=list[b]*3,a3=list[c]*5;
        list[i] = Math.min(Math.min(a1, a2), a3)
        if(list[i] == a1){
            a++
        }
        if(list[i] == a2)
            b++
        if(list[i] == a3)
            c++
    }
    console.log(list)
    return list[n-1]
};
