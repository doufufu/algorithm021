/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let own = 0;
    let own2 = 0;
    let returnData = true;
    for(let i = 0; i < bills.length; i++){
        if(bills[i]===5){
            own++
        }
        else if(bills[i]===10){
            if(own>=1){
                own--;
                own2++
            }else{
                console.log(10, own, own2, bills[i],i)
                returnData = false;
                break;
            }
        }
        else{
            if(own2>=1 && own>=1){
                own--
                own2--
            }
            else if(own>=3){
                own = own - 3
            }
            else{
                console.log(20, own, own2, bills[i],i)
                returnData = false;
                break;
            }
        }
    }
    return returnData;
};
