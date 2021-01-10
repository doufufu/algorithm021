/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let h = triangle.length;
    let dp = new Array(h);
    for(let i = 0; i < h; i++){
        dp[i] = new Array(triangle[i].length)
    }
    
    for(let i = h -1; i>=0;i--){
        for(let j = 0; j <= i; j++){
            if(i===h-1){
                dp[i][j] = triangle[i][j]
            }else{
                dp[i][j] = Math.min(dp[i+1][j], dp[i+1][j+1])+triangle[i][j]
            }
        }
    }
    console.log(dp)
    return dp[0][0]
};