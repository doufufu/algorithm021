/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function(A) {
    let total = 0;
    // 行
    for(let i = 0; i < A.length; i++){
        if(A[i][0]!=1){
            A[i] = reverse(A[i]);
        }
        total++;
    }
    console.log(A);
    // 列
    let list = [];
    for(let i = 0; i < A[0].length; i++){
        list[i] = 0
    }
    
    for(let i = 0; i < A.length; i++){
        for(let j = 0; j < A[i].length; j++){
            if(A[i][j] === 0){
                list[j]++
            }
        }
    }
    console.log(list);
    for(let i = 0; i < list.length; i++){
        let isNext = false;
        if((total%2)==1){
            isNext = list[i] > Math.floor(total/2)
        }else{
            isNext = list[i] >= Math.floor(total/2)
        }
        console.log(total, (total%2)==1, list[i] , Math.floor(total/2))
        if(isNext){
            for(let j = 0; j < A.length; j++){
                A[j][i] = 1 - A[j][i]
            }
        }
    }
    console.log(A)
    let sum = 0;
    for(let i = 0; i < A.length; i++){
        sum = sum + parseInt(A[i].join(''),2)
    }
    return sum;
};

function getCount(arr){
    var str = arr.join('');
    var n = (str.split('0')).length-1;
    return n
}

function reverse(arr){
    arr = arr.map((i)=>{return 1-i})
    return arr
}
