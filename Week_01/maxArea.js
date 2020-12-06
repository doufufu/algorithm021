/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let start = 0 , end = height.length-1;
    let max = 0;
    while(start<end){
        let heightCal = height[start];
        if(height[start]>=height[end]){
            heightCal = height[end]
        }
        let data = heightCal * (end-start);
        if(max < data){
            max = data;
        }
        if(height[start]<height[end]){
            start++
        }else{
            end--;
        }
    }
    console.log(max);
    return max
};
