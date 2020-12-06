/**
 * @param {number} n
 * @return {number}
 */
function countPrimes(n){
    if(n<3){
        return 0
    }
    let list = [];
    list[0]=list[1]='0';
    for(let i = 1;i<n-1;i++){
        list.push('1')
    }
    for(let i = 2; i * i <= n; i++){
        for(let j = i; j * i <= n; j++){
            list[j*i]='0'
        }
    }
    console.log(list)
    let count = 0;
    for(let i = 0;i < list.length; i++){
        if(list[i]==='1'){
            count++;
        }
    }
    return count;
}
