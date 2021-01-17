/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    coordinates.sort((a,b)=>(a[0]-b[0]))
    console.log(coordinates)
    let k1 = (coordinates[1][0]-coordinates[0][0])
    let k2 = (coordinates[1][1]-coordinates[0][1])
    for(let i=1; i < coordinates.length-1; i++){
        let test1 = (coordinates[i+1][0]-coordinates[i][0])
        let test2 = (coordinates[i+1][1]-coordinates[i][1])
        console.log(test1,test2,k1,k2)
        if(k1===0 && test1===k1 || k2===0 && test2===k2){
            continue
        }
        if(test1/test2!=k1/k2){
            return false
        }
    }
    return true;
};