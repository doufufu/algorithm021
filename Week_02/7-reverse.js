/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let list = ''
    let flag = false;
    if(x<0){
        flag = true;
        x = -x
    }
    while(x>0){
        list=list+(x%10);
        x = Math.floor(x/10);
    }
    if(list>2147483647){
        return 0
    }
    if(flag){
        return -list
    }else{
        return list
    }
};
