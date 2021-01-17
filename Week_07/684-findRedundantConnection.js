/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    var map = [];
    for(let i = 0 ; i < edges.length; i++){
        map[i] = i;
    }
    for(let i = 0 ; i < edges.length; i++){
        let a = find(edges[i][0], map)
        let b = find(edges[i][1], map)
        if(a==b){
            return edges[i]
        }else{
            map[b]=a
        }
    }
    return [0,0]
};

function find(n, map){
    var num = n;
    while(map[num]!=num){
        num = map[num]
    }
    return num
}