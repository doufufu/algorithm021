/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n<2){
        switch(n){
            case 0: return 0
            case 1: return 1
        }
    }

    let a = 0, b = 1, c = 1;
    for(let i = 2; i < n; i++){
        a = b;
        b = c
        c = a + b
    }
    return c
};