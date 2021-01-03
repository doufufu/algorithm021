/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    for(let i = 0; i < flowerbed.length; i++){
        if(flowerbed[i]===0){
            if( flowerbed[i+1]===0 || i===flowerbed.length-1){
                n--
                i++
            }
        }else{
            i++
        }
    }
    console.log(n)
    return n<=0?true: false
};