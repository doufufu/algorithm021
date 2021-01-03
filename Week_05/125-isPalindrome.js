/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let arr = s.toLocaleLowerCase().match(/[A-Za-z0-9]+/g)
    if(!arr) return true
    arr = arr.join('').split('');
    let start = 0, end = arr.length-1;
    let result = null;
    while(start<end){
        if(arr[start]===''|| arr[start]===':'){
            start++
        }
        if(arr[end]===''|| arr[end]===':'){
            end--
        }
        if( arr[start]!=arr[end] ){
            console.log(arr[start],arr[end])
            result = false;
            return result;
        }
        if(arr[start]===arr[end]){
            start++;
            end--;
        }
    }
    return true
};